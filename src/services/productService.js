import { supabase } from '../lib/supabaseClient'
import { getUrlProductImage } from './storageService';


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
    try {
        const { data, error } = await supabase.from('products')
        .update(updateFields)
        .eq('business_id', business_id)
        .eq('id', id)
        .select()

        if (error) {
            throw error
        }
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (business_id, id) => {
    try {
        const { error } = await supabase.from('products')
        .delete()
        .eq('business_id', business_id)
        .eq('id', id)

        if (error) {
            throw error
        }
    } catch (error) {
        console.log(error)
    }
}

export const uploadProductImage = async (business_id, id, image) => {
    try {
        const imagesUrl = []
        if (image) {
            for(let i = 0; i < image.length; i++) {
                imagesUrl.push(await getUrlProductImage(image[i], id))
            }
        }

        
        if (imagesUrl.length === 0) {
            throw new Error({message: 'There is no urls to upload'})
        } 
        
        const isValid = imagesUrl.some(item => item === "{}")

        if (isValid) {
            throw new Error({message: 'There is at least one image without url'})
        }

        const { error } = await supabase.from('products')
        .update({
            images: imagesUrl
        })
        .eq('business_id', business_id)
        .eq('id', id)

        if (error) {
            throw error
        }
    } catch (error) {
        console.log(error)
    }
}