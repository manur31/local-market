import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct.jsx";
import { useProduct } from "../context/productContext.jsx";
import { useCategory } from "../context/categoryContext.jsx";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useLocation } from "react-router";
import { useCart } from "../context/cartContext.jsx";


function ProductListingPage() {
  const { products, getProducts } = useProduct()
  const { categories, getCategories } = useCategory()
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(null)
  const location = useLocation();
  const [search, setSearch] = useState('')

  const { cart, updateCart } = useCart()

  useEffect(() => {
    async function fetchData() {
      await getProducts()
      await getCategories()
    } 

    fetchData()
  }, [])

  useEffect(() => {
    let result = [...products]

    if (active !== "All") {
      result = result.filter(p => p.category === active)
    }

    if (search) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.price.toString().includes(search)
      )
    }

    setFilteredProducts(result)
  }, [products, active, search])

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q') || '';
    setSearch(q);
  }, [location.search]);

  const itemsForPage = 9; // 3 filas x 3 columnas (puedes ajustar)

  const totalPage = Math.ceil(filteredProducts?.length / itemsForPage);

  const start = page * itemsForPage;
  const visibleProducts = filteredProducts?.slice(start, start + itemsForPage);



  return (
    <section className="bg-white min-h-screen w-full">
      <section className="mx-auto px-4 py-10">
        {/* - - - - - - - - - - - - - - - - - - - TITLE - - - - - - - - - - - - - - - - - - - */}
        <h1 className="text-3xl font-semibold text-center">
          NeighborhoodMarket
        </h1>
        <p className="text-center text-gray-500 mt-2">
          {`Showing ${filteredProducts?.length} curated products from some local vendors`}
        </p>

        {/* - - - - - - - - - - - - - - - - - - -SEARCH- - - - - - - - - - - - - - - - - - - */}
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search curated local goods..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 focus:outline-none"
          />
        </div>

        {/* - - - - - - - - - - - - - - - - - - -CATEGORIES- - - - - - - - - - - - - - - - - - - */}
        <div className="flex justify-center mt-6 mb-6">
          <ul className="flex flex-wrap gap-3">
            <button onClick={() => setActive('All')} className={`px-4 py-2 rounded-full transition ${active === 'All' ? "bg-primary text-white" : "bg-gray-200 text-black"}`}
                >
                  Todos
                </button>
            {categories?.map((cat) => (
                <button
                key={cat.id} onClick={() => setActive(cat.name)} className={`px-4 py-2 rounded-full transition ${active === cat.name ? "bg-primary text-white" : "bg-gray-200 text-black"}`}
                >
                  {cat?.name}
                </button>
            ))}
          </ul>
        </div>

        {/* - - - - - - - - - - - - - - - - - - -CARRUSEL- - - - - - - - - - - - - - - - - - - */}
        <div className="w-full flex justify-center items-end max-w-7xl mx-auto my-10 h-fit gap-2">
          {/* - - - - - - - - - - - - - - - - - - -Botones izquierda- - - - - - - - - - - - - - - - - - - */}

          <button onClick={() => setPage((p) => Math.max(p - 1, 0))} className={`${itemsForPage >= products?.length && 'hidden'} px-5 py-4 rounded-full border border-gray-400 bg-surface transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-105 active:scale-95 active:bg-gray-300 active:shadow-inner`}>
            <FiArrowLeft/>
          </button>

          {/* - - - - - - - - - - - - - - - - - - -Grid- - - - - - - - - - - - - - - - - - - */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] justify-items-center gap-y-10 w-full ">
            {visibleProducts?.map((product) => (
              <CardProduct
              key={product.id}
              product={product}
              updateCart={updateCart}
              cart={cart}
              />
            ))}
          </div>
          {/* - - - - - - - - - - - - - - - - - - -Botones derechaza - - - - - - - - - - - - - - - - - - - */}

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPage - 1))}
            className={`${itemsForPage >= products?.length && 'hidden'} px-5 py-4 rounded-full border border-gray-400 bg-surface transition-all duration-200 ease-in-out hover:bg-gray-200 hover:scale-105 active:scale-95 active:bg-gray-300 active:shadow-inner`}>
              <FiArrowRight/>
            </button>
        </div>
      </section>
    </section>
  );
}

export default ProductListingPage;
