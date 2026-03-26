import { supabase } from '../lib/supabaseClient.js'

export const uploadBusinessLogo =  async (file, userId) => {
    const filePath = `business-logos/${userId}/${Date.now()}-${file.name}`

    const { error } = await supabase.storage
    .from("local-market-images")
    .upload(filePath, file);

    console.log(error)

    if (error) throw error;

    const { data } = supabase.storage
    .from("local-market-images")
    .getPublicUrl(filePath);

    return data.publicUrl;
}

export const uploadProductImage =  async (file, userId) => {
    const filePath = `products-images/${userId}-${Date.now()}`;

    const { error } = await supabase.storage
    .from("local-market-images")
    .upload(filePath, file);

    if (error) throw error;

    const { data } = supabase.storage
    .from("local-market-images")
    .getPublicUrl(filePath);

  return data.publicUrl;
}

export const uploadCategoryIcon =  async (file, userId) => {
    const filePath = `categories-icons/${userId}-${Date.now()}`;

    const { error } = await supabase.storage
    .from("local-market-images")
    .upload(filePath, file);

    if (error) throw error;

    const { data } = supabase.storage
    .from("local-market-images")
    .getPublicUrl(filePath);

  return data.publicUrl;
}