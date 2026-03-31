import { useState } from 'react'
// import { useAuth } from '../context/authContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiDollarSign, FiPackage, FiPlus, FiShoppingCart } from 'react-icons/fi'
import ProductsTable from '../components/ProductsTable'
import OrdersTable from '../components/OrdersTable'
import ProductForm from '../components/ProductForm'

function Dashboard() {

    const [btnActive, setBtnActive] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [seletedProduct, setSeletedProduct] = useState(null)

    const handleEdit = (product) => {
        setSeletedProduct(product)
        setIsOpen(!isOpen)
    }

    const products = [
    {
        id: "prod-1",
        name: "Coca-Cola 1L",
        price: 75,
        stock: 20,
        description: "Refresco frío",
        category_id: "cat-1",
        business_id: "bus-1",
        created_at: "2026-03-27T10:00:00Z"
    },
    {
        id: "prod-2",
        name: "Pan sobao",
        price: 25,
        stock: 50,
        description: "Pan fresco del día",
        category_id: "cat-2",
        business_id: "bus-1",
        created_at: "2026-03-27T10:05:00Z"
    },
    {
        id: "prod-3",
        name: "Leche Rica 1L",
        price: 80,
        stock: 15,
        description: "Leche entera",
        category_id: "cat-1",
        business_id: "bus-1",
        created_at: "2026-03-27T10:10:00Z"
    },
    {
        id: "prod-4",
        name: "Coca-Cola 1L",
        price: 75,
        stock: 20,
        description: "Refresco frío",
        category_id: "cat-1",
        business_id: "bus-1",
        created_at: "2026-03-27T10:00:00Z"
    },{
        id: "prod-5",
        name: "Coca-Cola 1L",
        price: 75,
        stock: 20,
        description: "Refresco frío",
        category_id: "cat-1",
        business_id: "bus-1",
        created_at: "2026-03-27T10:00:00Z"
    },{
        id: "prod-6",
        name: "Coca-Cola 1L",
        price: 75,
        stock: 20,
        description: "Refresco frío",
        category_id: "cat-1",
        business_id: "bus-1",
        created_at: "2026-03-27T10:00:00Z"
    },
];

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
        <main className='bg-surface max-w-[1240px] mx-auto sm:mb-10 lg:mb-26'>
            <header className='flex flex-wrap justify-between items-end gap-4 px-4 pt-4'>
                <section className='flex flex-col gap-4'>
                    <h4 className='text-label-md uppercase text-on-tertiary-fixed tracking-label'>Seller Dashboard</h4>
                    <h2 className='text-4xl sm:text-5xl font-semibold flex flex-col'>Welcome back, <span className='text-primary'>Business Name</span></h2>
                </section>
                <button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-2 w-fit h-fit bg-primary-container px-8 py-2 my-2 sm:my-0 rounded-full text-white cursor-pointer'>
                    <FiPlus/>
                    Agregar Producto
                </button>
            </header>
            <section className='flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full px-4 mt-6'>
                <article className='flex items-center gap-4 flex-2 bg-white py-8 px-4 rounded-2xl border border-tertiary-fixed/40 shadow-seller-cards'>
                    <div className='bg-neutral-200 w-fit h-fit p-2 rounded-lg text-primary'>
                        <FiDollarSign size={20}/>
                    </div>
                    <section>
                        <h3 className='text-xs text-neutral-400'>Total de ventas</h3>
                        <p className='text-xl'>$1,245.00</p>
                    </section>
                </article>

                <article className='flex items-center gap-4 flex-1 bg-white py-8 px-4 rounded-2xl border border-tertiary-fixed/40 shadow-seller-cards'>
                    <div className='bg-neutral-200 w-fit h-fit p-2 rounded-lg text-primary'>
                        <FiShoppingCart size={20}/>
                    </div>
                    <section>
                        <h3 className='text-xs text-neutral-400'>Ordenes</h3>
                        <p className='text-xl'>{orders.length}</p>
                    </section>
                </article>

                <article className='flex items-center gap-4 flex-1 bg-white py-8 px-4 rounded-2xl border border-tertiary-fixed/40 shadow-seller-cards'>
                    <div className='bg-neutral-200 w-fit h-fit p-2 rounded-lg text-primary'>
                        <FiPackage size={20}/>
                    </div>
                    <section>
                        <h3 className='text-xs text-neutral-400'>Productos</h3>
                        <p className='text-xl'>{products.length}</p>
                    </section>
                </article>
            </section>
            <section className='px-6'>
                <div className='flex items-center bg-tertiary-fixed/20 w-fit h-fit p-1 rounded-lg my-6'>
                    <button onClick={() => setBtnActive(true)} className={`flex items-center gap-1 text-xs ${btnActive ? 'bg-white' : ''} py-1 px-2 rounded-lg`}>
                        <FiPackage/>
                        Productos
                    </button>
                    <button onClick={() => setBtnActive(false)} className={`flex items-center gap-1 text-xs ${btnActive ? '' : 'bg-white'} py-1 px-2 rounded-lg`}>
                        <FiShoppingCart/>
                        Ordenes
                    </button>
                </div>
                    <article className='flex flex-col gap-4 h-fit bg-white p-4 rounded-2xl border border-tertiary-fixed/40 shadow-seller-cards'>
                        <header className='flex flex-col'>
                                <h2 className='text-sm font-sans font-bold'>{btnActive ? 'Mis Productos' : 'Ordenes recientes'}</h2>
                                <p className='text-xs pr-1 text-neutral-400'>{btnActive ? 'Gestiona tu lista de productos' : 'Mira y getiona las ordenes de tus clientes'}</p>
                        </header>
                            {btnActive ? (
                                <section>
                                    <ProductsTable products={products} onEdit={handleEdit}/>
                                </section>
                            ) : (
                                <section>
                                    <OrdersTable orders={orders}/>
                                </section>
                            )}
                    </article>
            </section>

            <section className={`${!isOpen && 'hidden'} absolute top-0 left-0 flex items-center justify-center bg-gray-500/60 w-full h-screen px-4`}>
                <ProductForm product={seletedProduct} closeForm={() => setIsOpen(!isOpen)}/>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default Dashboard