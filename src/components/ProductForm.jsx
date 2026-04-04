import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FiX } from 'react-icons/fi'
import { createProductSchema } from '../lib/schemas/protuctSchema'
import { useEffect, useEffectEvent, useState } from 'react'
import SelectCategory from './SelectCategory'
import { useAuth } from '../context/authContext'
import { updateProduct } from '../services/productService'

function ProductForm({product, closeForm, isOpen, createProduct, updateProduct, categories, getCategories, createCategory}) {
    const { user } = useAuth()

    const business_id = user?.business.id

    const { 
          register, 
          handleSubmit, 
          reset,
          setValue,
          getValues,
          formState: { errors, isSubmitting, isValid } 
    } = useForm({ 
        resolver: zodResolver(createProductSchema), 
        mode: 'all',
        shouldUnregister: false
    })

    const [catToUpdate, setCatToUpdate] = useState('')
    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        getCategories()
    })

    useEffect(() => {
        if (product) {
            reset({
                name: product.name || '',
                price: product.price || '',
                stock: product.stock || '',
                description: product.description || ''
            })

            setCatToUpdate(product?.category)
        } else {
            reset({
                name: '',
                price: '',
                stock: '',
                description: '',
                category: ''
            })
            setCatToUpdate(null)
            setNewCategory(null)
        }
    }, [product, reset])

    const handleClose = () => {
        reset()
        closeForm()
    }

    const onSubmit = async (data) => {
        const category = getValues('category')
        data.category = category

        if (!product) {
            await createProduct(business_id, data)
        } else {
            await updateProduct(business_id, product.id, data)
        }

        const exists = categories?.some(cat => cat.name === category)

        if(!exists) {
            await createCategory(category)
        }

        handleClose()
    }

  return ( 
    <article className='bg-white py-6 rounded-2xl sm:max-w-[420px] w-full'>
        <header className='flex flex-col items-center justify-between relative px-6'>
                <h2 className='text-xl font-bold mt-4 text-on-surface'>{product ? `Editar ${product.name}` : 'Agregar nuevo producto'}</h2>
                <p className='text-center text-sm text-on-surface font-light'>{product ? 'Edita algun detalle de tu producto.' : 'Rellena los espacion en blanco para tu nuevo producto.'}</p>
            <FiX onClick={handleClose} className='absolute top-0 right-6 text-xl cursor-pointer'/>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className='px-6'>
            <section className='grid grid-cols-2 gap-4 mt-8'>
                <div className="flex flex-col gap-1 col-span-2">
                    <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="name">Nombre del producto</label>
                    <input {...register('name')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="text" id='name'/>
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="price">Precio</label>
                    <input {...register('price')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="number" id='price'/>
                    {errors.price && <p className="text-red-500 text-sm mt-2">{errors.price.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="stock">Stock</label>
                    <input {...register('stock')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="number" id='stock'/>
                    {errors.stock && <p className="text-red-500 text-sm mt-2">{errors.stock.message}</p>}
                </div>

                <SelectCategory
                    register={register}
                    errors={errors}
                    setValue={setValue}
                    initialCategory={catToUpdate}
                    newCategory={newCategory}
                    setNewCategory={setNewCategory}
                    isOpen={isOpen}
                    categories={categories}
                />

                <div className="flex flex-col gap-1 col-span-2">
                    <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="description">descripción</label>
                    <textarea {...register('description')} className="bg-surface-high rounded-xl h-24 px-4 py-2" name="description" id="description"></textarea>
                    {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description.message}</p>}
                </div>
            </section>
            <section className='flex gap-4 items-center justify-end mt-8'>
                <button type='button' onClick={handleClose} className='rounded-2xl py-2 px-4 text-sm cursor-pointer border border-surface-high'>Cancelar</button>
                <button type="submit" disabled={!isValid} className="rounded-2xl bg-primary-container text-white text-sm py-2 px-4 cursor-pointer disabled:cursor-not-allowed disabled:bg-secondary-fixed">
                   {isSubmitting ? (product ? 'Guardando...' : 'Agregando...') : (product ? 'Guardar cambios' : 'Agregar Producto')}
                </button>
            </section>
        </form>
    </article>
  )
}

export default ProductForm