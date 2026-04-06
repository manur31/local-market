import { createContext, useContext, useState } from "react";
import * as authService from "../services/authService.js"

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error("useAuth most be used within an AuthProvider")
    }
    return context 
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const register = async (formData) => {
        const user = await authService.register(formData) 
        setUser(user)
    }

    const login = async ({email, password}) => {
        const user = await authService.login(email, password)
        setUser(user)
    }

    const logout = async () => {
        await authService.logout()
        setUser(null)
    }


    return (
        <AuthContext.Provider
        value={{
            register, 
            login,
            logout,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}