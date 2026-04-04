import { supabase } from '../lib/supabaseClient'


export const getProducts = async () => {
    try {
        const { data, error } = await supabase.from('products')
        .select()

        if (error) {
            throw error;
        }

        return data
    } catch (error) {
        console.log(error)
    }
}

export const getProductByBusiness = async (business_id) => {
    try {
        const { data, error } = await supabase.from('products')
        .select()
        .eq('business_id', business_id)

        if (error) throw error

        return data
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (id) => {
    try {
        const { data, error } = await supabase.from('products')
        .select()
        .eq('id', id)

        if (error) {
            throw error;
        }

        return data
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async (business_id, productData) => {
    const { name, price, stock, description, category } = productData

    try {
        const { data, error } = await supabase.from('products')
        .insert({
            name,
            price,
            stock,
            description,
            category,
            business_id
        }).select()
 
        if (error) {
            throw error
        }
        
        return data
    } catch (error) {
        console.error(error)
    }
}

export const updateProduct = async (business_id, id, updateFields) => {
    const { data, error } = await supabase.from('products')
    .update(updateFields)
    .eq('business_id', business_id)
    .eq('id', id)
    .select()

    if (error) {
        throw error
    }
    return data
}

export const deleteProduct = async (business_id, id) => {
    const { error } = await supabase.from('products')
    .delete()
    .eq('business_id', business_id)
    .eq('id', id)

    if (error) {
        throw error
    }
}