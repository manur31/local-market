import { supabase } from '../lib/supabaseClient.js'
import { uploadBusinessLogo } from './storageService.js'

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

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })

    if (error) throw error

    const user = data.user

    const { data: userData } = await supabase.auth.getUser()

    const { data: businessData, error: businessError } = await supabase
        .from('business')
        .insert({
            owner_id: userData?.user?.id,
            owner_name: name,
            name: businessName,
            description, 
            slogan, 
            location,
        }).select()

    if (businessError) throw businessError

    return {
        user: user,
        business: businessData
    }
}

export const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email, 
        password
    })

    if (error) throw error

    const user = data.user

    const { data: businessData, error: businessError } = await supabase.from('business')
    .select()
    .eq('owner_id', data.user.id)

    if (businessError) throw businessError

    user.business = businessData[0]
    
    return user
}

export const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}

export const uploadBusinessImage = async (businessId, image) => {
    const imageUrl = await uploadBusinessLogo(image, businessId)
    console.log(imageUrl)

    const { error } = await supabase.from('business').update({
        image_url: imageUrl
    }).eq('id', businessId)

    if (error) throw error
}