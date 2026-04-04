import { useEffect, useState } from 'react'
// import { useAuth } from '../context/authContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiDollarSign, FiPackage, FiPlus, FiShoppingCart } from 'react-icons/fi'
import ProductsTable from '../components/ProductsTable'
import OrdersTable from '../components/OrdersTable'
import ProductForm from '../components/ProductForm'
import { useAuth } from '../context/authContext'
import { useProduct } from '../context/productContext'
import { useCategory } from '../context/categoryContext'

function Dashboard() {

    const { user, logout } = useAuth()
    const { products, createProduct, getProducts, updateProduct, deleteProduct } = useProduct()
    const { categories, getCategories, createCategory } = useCategory()
    const [btnActive, setBtnActive] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [seletedProduct, setSeletedProduct] = useState(null)
    const [business_id, setBusiness_id] = useState(user?.business.id)

    const handleEdit = (product) => {
        setSeletedProduct(product)
        setIsOpen(!isOpen)
    }

    const handleCreate = () => { 
        setSeletedProduct(null)
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        getProducts()
    }, [products])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [isOpen])

    const handleLogout = async () => {
        console.log('1')
        await logout
        console.log('2')
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
    <>
        <Header/>
        <main className='bg-surface max-w-[1240px] mx-auto mb-4 sm:mb-10 lg:mb-26'>
            <header className='flex flex-wrap justify-between items-end gap-4 px-4 pt-4'>
                <section className='flex flex-col gap-4'>
                    <h4 className='text-label-md uppercase text-on-tertiary-fixed tracking-label'>Seller Dashboard</h4>
                    <h2 className='text-4xl sm:text-5xl font-semibold flex flex-col'>Welcome back, <span className='text-primary'>{user?.business?.name}</span></h2>
                </section>
                <button onClick={handleCreate} className='flex items-center gap-2 w-fit h-fit bg-primary-container px-8 py-2 my-2 sm:my-0 rounded-full text-white cursor-pointer'>
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
                        <h3 className='text-xs text-neutral-400'>Total de ventas</h3>
                        <p className='text-xl'>$1,245.00</p>
                    </section>
                </article>

                <article className='flex items-center gap-4 flex-1 bg-surface-high py-8 px-4 rounded-2xl border border-tertiary-fixed shadow-seller-cards'>
                    <div className='bg-neutral-300 w-fit h-fit p-2 rounded-lg text-primary'>
                        <FiShoppingCart size={20}/>
                    </div>
                    <section>
                        <h3 className='text-xs text-neutral-400'>Ordenes</h3>
                        <p className='text-xl'>{orders.length}</p>
                    </section>
                </article>

                <article className='flex items-center gap-4 flex-1 bg-surface-high py-8 px-4 rounded-2xl border border-tertiary-fixed shadow-seller-cards'>
                    <div className='bg-neutral-300 w-fit h-fit p-2 rounded-lg text-primary'>
                        <FiPackage size={20}/>
                    </div>
                    <section>
                        <h3 className='text-xs text-neutral-400'>Productos</h3>
                        <p className='text-xl'>{products?.length > 0 ? products.length : (<span className='text-sm text-neutral-600 text-nowrap'>No tienes productos</span>)}</p>
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
                                    {products?.length > 0 ? (
                                        <ProductsTable products={products} onEdit={handleEdit} business_id={business_id} deleteProduct={deleteProduct}/>
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

            <section className={`${!isOpen && 'hidden'} fixed top-0 left-0 flex items-center justify-center bg-gray-500/60 w-full h-screen px-4`}>
                <ProductForm product={seletedProduct} isOpen={isOpen} createProduct={createProduct} updateProduct={updateProduct} categories={categories} getCategories={getCategories} createCategory={createCategory} closeForm={() => setIsOpen(!isOpen)}/>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default Dashboard