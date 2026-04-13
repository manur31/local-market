import CardProduct from "../components/CardProduct.jsx";
import { useProduct } from '../context/productContext'
import { useCategory } from '../context/categoryContext'
import { useEffect } from "react";
import { useCart } from "../context/cartContext.jsx";
import { Link, useNavigate } from "react-router";

function HomePage() {

  const { products, getProducts } = useProduct()
  const { categories, getCategories } = useCategory()
  const { cart, updateCart } = useCart()
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await getProducts()
      await getCategories()
    } 

    fetchData()
  }, [])

  const filteredProducts = products?.slice(0, 3)

  return (
    <section className="max-w-[1440px] mx-auto">
      <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <span className="text-[#D4A373] font-semibold text-sm uppercase">Organic & Healthy</span>
          <h1 className="text-5xl font-bold text-[#1A4D2E] leading-tight mt-2">
            The heartbeat of <span className="text-[#D4A373]">your neighborhood</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            Discover extraordinary products made by hands you know. Supporting local businesses is a direct investment in the soul of your city.
          </p>
          <div className="flex gap-4 mt-8">
            <button onClick={() => navigate('/products')} className="bg-primary-container text-white px-6 py-3 rounded-full hover:bg-primary transition cursor-pointer">Explore Marketplace</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="src/assets/arbol.jpg" alt="Hero" className="rounded-2xl shadow-xl w-full object-cover h-[400px]" />
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-[#1A4D2E]">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map(cat => (
            <div key={cat.id} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center cursor-pointer hover:shadow-md transition-all">
              <p className="font-semibold text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1A4D2E]">Featured Local Products</h2>
          <Link to={'/products'}>
            <p className="text-primary font-semibold underline cursor-pointer">See all</p>
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-items-center gap-10 w-full">
          {filteredProducts.map(product => (
            <CardProduct
              key={product.id}
              product={product}
              updateCart={updateCart}
              cart={cart}
              />
          ))}
        </div>
      </section>

      {/* <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-4">
          <div>
            <span className="text-secondary font-bold text-xs tracking-widest uppercase">
              THE NEIGHBORHOOD PULSE
            </span>
            <h2 className="text-[36px] font-bold leading-tight text-[#1A4D2E]">
              Featured Local Stores
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#404943] italic">
              "We believe every storefront tells a story. Here are the authors of our local economy."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESSES.map((biz) => (
            <CardBusiness
              key={biz.id}
              name={biz.name}
              category={biz.category}
              location={biz.location}
              image={biz.image}
              description={biz.description}
              fans={biz.fans}
            />
          ))}
        </div>
      </section> */}
    </section>
  );
}

export default HomePage;
