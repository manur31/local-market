import { useForm } from 'react-hook-form'
import { FiX } from 'react-icons/fi'

function ProductForm({product, closeForm}) {

    const { 
          register, 
          handleSubmit, 
          setError,
          reset,
          formState: { errors, isSubmitting, isValid } 
        } = useForm({ 
            mode: 'all',
        })

        // console.log(product)

  return (
    <article className='bg-white py-6 rounded-2xl sm:max-w-[420px] w-full'>
        <header className='flex flex-col items-center justify-between relative px-6'>
                <h2 className='text-xl font-bold mt-4 text-on-surface'>{product ? `Editar ${product.name}` : 'Agregar nuevo producto'}</h2>
                <p className='text-center text-sm text-on-surface font-light'>{product ? 'Edita algun detalle de tu producto.' : 'Rellena los espacion en blanco para tu nuevo producto.'}</p>
            <FiX onClick={closeForm} className='absolute top-0 right-6 text-xl cursor-pointer'/>
        </header>
        <form className='px-6'>
            <section className='grid grid-cols-2 gap-4 mt-8'>
                <div className="flex flex-col gap-1 col-span-2">
                    <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="product_name">Nombre del producto</label>
                    <input {...register('product_name')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="text" id='product_name'/>
                    {errors.product_name && <p className="text-red-500 text-sm mt-2">{errors.product_name.message}</p>}
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

                <div className="flex flex-col gap-1">
                    <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="category">Categoria</label>
                    <input {...register('category')} className="bg-surface-high rounded-xl py-2 px-4 font-medium text-sm" type="category" id='category'/>
                    {errors.category && <p className="text-red-500 text-sm mt-2">{errors.category.message}</p>}
                </div>

                <div className="flex flex-col gap-1 col-span-2">
                    <label className="uppercase tracking-label text-on-surface text-label-md" htmlFor="description">descripción</label>
                    <textarea {...register('description')} className="bg-surface-high rounded-xl h-24 px-4 py-2" name="description" id="description"></textarea>
                    {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description.message}</p>}
                </div>
            </section>
            <section className='flex gap-4 items-center justify-end mt-8'>
                <button type='button' onClick={closeForm} className='rounded-2xl py-2 px-4 text-sm cursor-pointer border border-surface-high'>Cancelar</button>
                <button type="submit" disabled={!isValid} className="rounded-2xl bg-primary-container text-white text-sm py-2 px-4 cursor-pointer disabled:cursor-not-allowed disabled:bg-secondary-fixed">
                    {isSubmitting ? 'Agregando...' : 'Agregar Producto'}
                </button>
            </section>
        </form>
    </article>
  )
}

export default ProductForm