import { supabase } from '../lib/supabaseClient.js'

// registro de negocio con usuario
export const register = async (formData) => {
    const { 
        name, 
        email, 
        password, 
        businessName, 
        description, 
        slogan, 
        location, 
    } = formData

    console.log("1. Antes de signUp")

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })

    if (error) throw error

    const user = data.user

    const { data: userData } = await supabase.auth.getUser()

    const { error: businessError } = await supabase
        .from('business')
        .insert({
            owner_id: userData?.user?.id,
            owner_name: name,
            name: businessName,
            description, 
            slogan, 
            location,
        })

    if (businessError) throw businessError

    return user
}

export const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email, 
        password
    })

    if (error) throw error

    return data.user
}

export const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}