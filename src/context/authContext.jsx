import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../services/authService.js"
import { set } from "zod";

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error("useAuth most be used within an AuthProvider")
    }
    return context 
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("userData");
        return storedUser ? JSON.parse(storedUser) : null;
    })
    const [loading, setLoading] = useState(false)

    const register = async (formData) => {
        setLoading(true)
        const user = await authService.register(formData) 
        setUser(user)
        localStorage.setItem('userData', JSON.stringify(user))
        setLoading(false)
    }

    const login = async ({email, password}) => {
        setLoading(true)
        const user = await authService.login(email, password)
        setUser(user)
        localStorage.setItem('userData', JSON.stringify(user))
        setLoading(false)
    }

    const logout = async () => {
        setLoading(true)
        await authService.logout()
        setUser(null)
        localStorage.removeItem("userData");
        setLoading(false)
    }

    const uploadBusinessImage = async (businessId, image) => {
        setLoading(true) 
        await authService.uploadBusinessImage(businessId, image)
        setLoading(false)
    }

    return (
        <AuthContext.Provider
        value={{
            register, 
            login,
            logout,
            user,
            loading,
            setLoading,
            uploadBusinessImage
        }}>
            {children}
        </AuthContext.Provider>
    )
}