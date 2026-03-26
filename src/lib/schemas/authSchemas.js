import { z } from "zod"

export const stepOneSchema = z.object({
    email: z.string({
        required_error: 'Email es requerido'
    }).email({
        message: 'Email invalido'
    }),
    password: z.string({
        required_error: 'Contraseña requerida'
    }).min(6, {
        message: 'Contraseña debe tener al menos 6 caracteres'
    }),
    name: z.string({
        required_error: 'Nombre es reuqerido'
    }).min(3, {
        message: 'El nombre debe tener almenos 3 caracteres'
    })
})

export const stepTwoSchema = z.object({
    businessName: z.string({
        required_error: 'Nombre del negocio es reuqerido'
    }).min(3, {
        message: 'El nombre del negocio debe tener almenos 3 caracteres'
    }),
    location: z.string({
        required_error: 'Ubicacion es requerida'
    }).min(10, {
        message: 'La ubicacion debe tener almenos 10 caracteres'
    }),
    slogan: z.string({
        required_error: 'Slogan es requerido'
    }).min(10, {
        message: 'El slogan debe tener almenos 10 caracteres'
    }),
    logo: z.any().optional(),
    description: z.string({
        required_error: 'Descripcion es requerida'
    }).min(80, {
        message: 'La descripcion debe tener almenos 80 caracteres'
    })
})

export const registerSchema = stepOneSchema.merge(stepTwoSchema)


export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email es requerido'
    }).email({
        message: 'Email invalido'
    }),
    password: z.string({
        required_error: 'Contraseña requerida'
    }).min(6, {
        message: 'Contraseña debe tener al menos 6 caracteres'
    })
})