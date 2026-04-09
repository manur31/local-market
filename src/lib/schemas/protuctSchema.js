import { z } from "zod"

export const createProductSchema = z.object({
    name: z.string({
        required_error: 'Nombre del producto es reuqerido'
    }).min(2, {
        message: 'El nombre del producto debe tener almenos 2 caracteres'
    }),
    price: z.coerce.number({
        required_error: 'Precio es requerida'
    }).int({
        message: 'El precio debe ser un numero'
    }).positive({
        message: 'El precio debe ser mayor a 0'
    }),
    stock: z.coerce.number({
        required_error: 'Stock es requerida'
    }).positive({
        message: 'El stock debe ser mayor a 0'
    }),
    description: z.string({
        required_error: 'Descripcion es requerida'
    }).min(30, {
        message: 'La descripcion debe tener almenos 30 caracteres'
    }),
    category: z.string({
        required_error: 'Categoria es requerida'
    }).min(1, "Selecciona una categoría"),
})