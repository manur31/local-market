import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiDollarSign, FiPackage, FiPlus, FiShoppingCart, FiUpload, FiUploadCloud } from 'react-icons/fi'
import ProductsTable from '../components/ProductsTable'
import OrdersTable from '../components/OrdersTable'
import ProductForm from '../components/ProductForm'
import { useAuth } from '../context/authContext'
import { useProduct } from '../context/productContext'
import { useCategory } from '../context/categoryContext'

function Dashboard() {

    const { user, uploadBusinessImage } = useAuth()
    const { businessProducts, createProduct, getProductsByBusiness, updateProduct, deleteProduct, uploadProductImage } = useProduct()
    const { categories, getCategories, createCategory } = useCategory()
    const [btnActive, setBtnActive] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState(null)
    const [seletedProduct, setSeletedProduct] = useState(null)
    const [business, setBusiness] = useState(user?.business)

    const handleEdit = (product) => {
        setSeletedProduct(product)
        setIsOpen(!isOpen)
    }

    const handleCreate = () => { 
        setSeletedProduct(null)
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        getProductsByBusiness(user?.business.id)
    }, [businessProducts])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [isOpen])

    const handleUpload = async (e) => {
        e.preventDefault()
        if (image) {
            await uploadBusinessImage(business?.id, image)
        }

        setOpen(!open)
    }

const orders = [
  {
    id: "order-1",
    order_code: "ORD-001",
    customer_name: "Carlos Pérez",
    items: 3,
    delivery_address: "Villa Mella",
    total: 175,
    status: "pending",
    created_at: "2026-03-27T11:00:00Z",
  },
  {
    id: "order-2",
    order_code: "ORD-002",
    customer_name: "Ana Gómez",
    items: 2,
    delivery_address: "Santo Domingo Este",
    total: 90,
    status: "processing",
    created_at: "2026-03-26T10:00:00Z",
  },
  {
    id: "order-3",
    order_code: "ORD-003",
    customer_name: "Luis Martínez",
    items: 5,
    delivery_address: "Gazcue",
    total: 250,
    status: "completed",
    created_at: "2026-03-25T09:00:00Z",
  },
  {
    id: "order-4",
    order_code: "ORD-001",
    customer_name: "Carlos Pérez",
    items: 3,
    delivery_address: "Villa Mella",
    total: 175,
    status: "pending",
    created_at: "2026-03-27T11:00:00Z",
  },
  {
    id: "order-5",
    order_code: "ORD-001",
    customer_name: "Carlos Pérez",
    items: 3,
    delivery_address: "Villa Mella",
    total: 175,
    status: "pending",
    created_at: "2026-03-27T11:00:00Z",
  },
  {
    id: "order-6",
    order_code: "ORD-001",
    customer_name: "Carlos Pérez",
    items: 3,
    delivery_address: "Villa Mella",
    total: 175,
    status: "pending",
    created_at: "2026-03-27T11:00:00Z",
  },
  {
    id: "order-7",
    order_code: "ORD-001",
    customer_name: "Carlos Pérez",
    items: 3,
    delivery_address: "Villa Mella",
    total: 175,
    status: "pending",
    created_at: "2026-03-27T11:00:00Z",
  },
  {
    id: "order-8",
    order_code: "ORD-001",
    customer_name: "Carlos Pérez",
    items: 3,
    delivery_address: "Villa Mella",
    total: 175,
    status: "pending",
    created_at: "2026-03-27T11:00:00Z",
  },
  {
    id: "order-9",
    order_code: "ORD-001",
    customer_name: "Carlos Pérez",
    items: 3,
    delivery_address: "Villa Mella",
    total: 175,
    status: "pending",
    created_at: "2026-03-27T11:00:00Z",
  },
];

  return (
    <main className=' max-w-[1240px] mx-auto mb-4 sm:mb-10 lg:mb-26'>
        <header className={`flex flex-wrap justify-between items-end gap-4 px-4 pt-50 pb-4 relative  from-surface/20 ${business?.image_url ? 'bg-linear-to-b' : 'bg-black/10'} sm:via-surface/20 to-black/40 rounded-b-xl`}>
            <div onClick={() => setOpen(!open)} className='flex items-center justify-center absolute top-0 left-0  w-full h-full rounded-b-xl overflow-hidden'>
                {business?.image_url ? (
                    <img src={business?.image_url} alt="" className='w-full h-full object-cover -z-10'/>
                ) : (
                    <div>
                        <button type='button' className={`text-4xl z-50 ${open ? 'hidden' : 'block'}`}>
                            <FiUpload />
                        </button>
                        <div className={`${open ? 'flex' : 'hidden'} items-center justify-center w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-transparent p-10 rounded-base cursor-pointer hover:bg-neutral-tertiary-medium">
                                    <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                                        <FiUploadCloud/>
                                        <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs">SVG, PNG or JPG (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])}/>
                                    <button onClick={handleUpload} className='flex items-center gap-2 w-fit h-fit bg-primary-container px-8 py-2 my-2 sm:my-0 rounded-full text-white cursor-pointer'>Subir imagen</button>
                                </label>
                            </div> 
                        </div>
                    </div>
                )}
            </div>
            <section className='flex flex-col gap-2 z-10'>
                <h4 className={`text-label-md uppercase ${business?.image_url ? 'text-tertiary-fixed' : 'text-on-tertiary-fixed'} font-bold tracking-label`}>Seller Dashboard</h4>
                <h2 className={`text-4xl sm:text-5xl ${business?.image_url ? 'text-tertiary-fixed' : 'text-on-tertiary-fixed' } font-semibold flex flex-col`}>Welcome back, <span className={`${business?.image_url ? 'text-white' : 'text-primary'}`}>{business?.name}</span></h2>
            </section>
            <button onClick={handleCreate} className='flex items-center gap-2 w-fit h-fit bg-primary-container px-8 py-2 my-2 sm:my-0 rounded-full text-white cursor-pointer z-10'>
                <FiPlus/>
                Agregar Producto
            </button>
        </header>
        <section className='flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full px-4 mt-6'>
            <article className='flex items-center gap-4 flex-2 bg-surface-high py-8 px-4 rounded-2xl border border-tertiary-fixed shadow-seller-cards'>
                <div className='bg-neutral-300 w-fit h-fit p-2 rounded-lg text-primary'>
                    <FiDollarSign size={20}/>
                </div>
                <section>
                    <h3 className='text-sm text-neutral-500'>Total de ventas</h3>
                    <p className='text-3xl font-bold text-primary-container'>$1,245.00</p>
                </section>
            </article>

            <article className='flex items-center gap-4 flex-1 bg-surface-high py-8 px-4 rounded-2xl border border-tertiary-fixed shadow-seller-cards'>
                <div className='bg-neutral-300 w-fit h-fit p-2 rounded-lg text-primary'>
                    <FiShoppingCart size={20}/>
                </div>
                <section>
                    <h3 className='text-sm text-neutral-500'>Ordenes</h3>
                    <p className='text-2xl'>{orders.length}</p>
                </section>
            </article>

            <article className='flex items-center gap-4 flex-1 bg-surface-high py-8 px-4 rounded-2xl border border-tertiary-fixed shadow-seller-cards'>
                <div className='bg-neutral-300 w-fit h-fit p-2 rounded-lg text-primary'>
                    <FiPackage size={20}/>
                </div>
                <section>
                    <h3 className='text-sm text-neutral-500'>Productos</h3>
                    <p className='text-2xl'>{businessProducts?.length > 0 ? businessProducts.length : (<span className='text-sm text-neutral-600 text-nowrap'>No tienes productos</span>)}</p>
                </section>
            </article>
        </section>
        <section className='px-6'>
            <div className='flex items-center bg-tertiary-fixed w-fit h-fit p-1 rounded-lg my-6'>
                <button onClick={() => setBtnActive(true)} className={`flex items-center gap-1 text-xs ${btnActive ? 'bg-white' : ''} py-1 px-2 rounded-lg`}>
                    <FiPackage/>
                    Productos
                </button>
                <button onClick={() => setBtnActive(false)} className={`flex items-center gap-1 text-xs ${btnActive ? '' : 'bg-white'} py-1 px-2 rounded-lg`}>
                    <FiShoppingCart/>
                    Ordenes
                </button>
            </div>
                <article className='flex flex-col gap-4 h-fit bg-white p-6 rounded-2xl border border-tertiary-fixed shadow-seller-cards'>
                    <header className='flex flex-col'>
                            <h2 className='text-sm font-sans font-bold'>{btnActive ? 'Mis Productos' : 'Ordenes recientes'}</h2>
                            <p className='text-xs pr-1 text-neutral-400'>{btnActive ? 'Gestiona tu lista de productos' : 'Mira y getiona las ordenes de tus clientes'}</p>
                    </header>
                        {btnActive ? (
                            <section>
                                {businessProducts?.length > 0 ? (
                                    <ProductsTable products={businessProducts} onEdit={handleEdit} business_id={business?.id} deleteProduct={deleteProduct} uploadProductImage={uploadProductImage}/>
                                ) : (
                                    <h3 className='text-on-surface text-sm'>Agrega productos para empezar a vender!</h3>
                                )}
                            </section>
                        ) : (
                            <section>
                                <OrdersTable orders={orders}/>
                            </section>
                        )}
                </article>
        </section>

        <section className={`${!isOpen && 'hidden'} fixed top-0 left-0 flex items-center justify-center bg-gray-500/60 w-full h-screen px-4 z-20`}>
            <ProductForm product={seletedProduct} isOpen={isOpen} createProduct={createProduct} updateProduct={updateProduct} categories={categories} getCategories={getCategories} createCategory={createCategory} closeForm={() => setIsOpen(!isOpen)}/>
        </section>
    </main>
  )
}

export default Dashboard