import { supabase } from '../lib/supabaseClient'

export const getCategories = async () => {
    try {
        const { data, error } = await supabase.from('category').select()

        if(error) throw error

        return data
    } catch (error) {
        console.log(error)
    }
}

export const createCategory = async (name) => {
    try {
        const { data, error } = await supabase.from('category')
        .insert({
            name
        }).select()

        if(error) throw error

        return data
    } catch (error) {
        console.log(error)
    }
}