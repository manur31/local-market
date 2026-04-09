import { useRef } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CardProduct from "../components/CardProduct.jsx";
import arbol from "../assets/arbol.jpg";
import { useState } from "react";

const products = Array(13).fill({
  title: "RAW WILDFLOWER HONEY",
  price: "18.00",
  image: arbol,
  businessId: "THE APIARY",
  description:
    "Unfiltered and raw honey collected from local mountain meadows.",
  lote: true,
});

function ProductListingPage() {
  const [active, setActive] = useState("All");
  const categories = ["All", "Food", "Clothing", "Handmade", "Coffee", "Home"];
  {
    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  }

  const elementosPorPagina = 9; // 3 filas x 3 columnas (puedes ajustar)

  const [pagina, setPagina] = useState(0);

  const totalPaginas = Math.ceil(products.length / elementosPorPagina);

  const inicio = pagina * elementosPorPagina;
  const productosVisibles = products.slice(inicio, inicio + elementosPorPagina);

  const [visibleCount, setVisibleCount] = useState(4);
  const productosVisibles3 = products.slice(0, visibleCount);

  return (
    <section className="bg-white min-h-screen w-full">
      <Header />
      <section className="lg:hidden">
        {/*  - - - - - - - - - - - - - - - - - - - - - */}
        {/*  - - - - - - Version Mobile - - - - - - */}
        {/*  - - - - - - - - - - - - - - - - - - - - - */}

        {/* - - - - - - - - - - - - - - - - - - - TITLE - - - - - - - - - - - - - - - - - - - */}
        <h1 className="text-3xl font-semibold mt-6 text-center">
          NeighborhoodMarket
        </h1>
        {/* - - - - - - - - - - - - - - - - - - -SEARCH- - - - - - - - - - - - - - - - - - - */}
        <div className="flex justify-center mx-4 mt-6">
          <input
            type="text"
            placeholder="Search curated local goods..."
            className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 focus:outline-none"
          />
        </div>
        {/* - - - - - - - - - - - - - - - - - - -CATEGORIES- - - - - - - - - - - - - - - - - - - */}
        <div className="flex justify-center mx-4 mt-6 mb-6">
          <ul className="flex justify-center flex-wrap gap-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full transition 
                  ${
                    active === cat
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* - - - - - - - - - - - - - - - - - - - Products - - - - - - - - - - - - - - - - - - - */}
        <div className="grid sm:grid-rows-2 sm:grid-cols-2 gap-2">
          {productosVisibles3.map((product) => (
            <CardProduct
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              businessId={product.businessId}
              description={product.description}
              lote={product.lote}
            />
          ))}
        </div>

        {visibleCount < products.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-6 py-2 bg-primary text-white rounded-full hover:scale-105 active:scale-95 transition"
            >
              Mostr{" "}
              <div className="grid sm:grid-rows-2 sm:grid-cols-2 gap-2">
                {productosVisibles.map((product) => (
                  <CardProduct
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    businessId={product.businessId}
                    description={product.description}
                    lote={product.lote}
                  />
                ))}
              </div>
              {visibleCount < productos.length && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 4)}
                    className="px-6 py-2 bg-primary text-white rounded-full hover:scale-105 active:scale-95 transition"
                  >
                    Mostrar más
                  </button>
                </div>
              )}
              ar más
            </button>
          </div>
        )}
      </section>
      {/*  - - - - - - - - - - - - - - - - - - - - - */}
      {/*  - - - - - - Version Desktop - - - - - - */}
      {/*  - - - - - - - - - - - - - - - - - - - - - */}
      <section className=" hidden lg:block mx-auto px-4 py-10">
        {/* - - - - - - - - - - - - - - - - - - - TITLE - - - - - - - - - - - - - - - - - - - */}
        <h1 className="text-3xl font-semibold text-center">
          NeighborhoodMarket
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Showing 144 curated products from 23 local vendors
        </p>

        {/* - - - - - - - - - - - - - - - - - - -SEARCH- - - - - - - - - - - - - - - - - - - */}
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search curated local goods..."
            className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 focus:outline-none"
          />
        </div>

        {/* - - - - - - - - - - - - - - - - - - -CATEGORIES- - - - - - - - - - - - - - - - - - - */}
        <div className="flex justify-center mt-6 mb-6">
          <ul className="flex gap-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full transition 
                  ${
                    active === cat
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* - - - - - - - - - - - - - - - - - - -CARRUSEL- - - - - - - - - - - - - - - - - - - */}
        <div className="w-full flex justify-center  items-center gap-4">
          {/* - - - - - - - - - - - - - - - - - - -Botones izquierda- - - - - - - - - - - - - - - - - - - */}

          <button
            onClick={() => setPagina((p) => Math.max(p - 1, 0))}
            className="
                  px-5 py-4 rounded-full border border-gray-400 bg-surface
                  transition-all duration-200 ease-in-out
                hover:bg-gray-200 hover:scale-105
                  active:scale-95 active:bg-gray-300 active:shadow-inner
              "
          >
            <i class="fas fa-arrow-left"></i>
          </button>

          {/* - - - - - - - - - - - - - - - - - - -Grid- - - - - - - - - - - - - - - - - - - */}
          <div className="grid grid-rows-3 grid-cols-3 gap-4">
            {productosVisibles.map((product) => (
              <CardProduct
                name={product.name}
                price={product.price}
                image={product.image}
                businessId={product.businessId}
                description={product.description}
                lote={product.lote}
              />
            ))}
          </div>
          {/* - - - - - - - - - - - - - - - - - - -Botones derechaza - - - - - - - - - - - - - - - - - - - */}

          <button
            onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas - 1))}
            className="
                  px-5 py-4 rounded-full border border-gray-400 bg-surface
                  transition-all duration-200 ease-in-out
                hover:bg-gray-200 hover:scale-105
                  active:scale-95 active:bg-gray-300 active:shadow-inner
              "
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default ProductListingPage;
