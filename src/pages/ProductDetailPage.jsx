import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import arbol from "../assets/arbol.jpg";

function ProductDetailPage({ name, price, stock, image, description }) {
  image = arbol
  // Generar datos random UNA vez
  const [randomData] = useState(() => {
    const badges = ["LOCAL", "IMPORTADO", "ORGÁNICO"];
    return {
      badge: badges[Math.floor(Math.random() * badges.length)],
      rating: (Math.random() * 5).toFixed(1), // 0.0 a 5.0
      reviews: Math.floor(Math.random() * 201), // 0 a 200
    };
  });

  return (
    <section className="bg-gray-100">
      <Header />

      {/* MOBILE */}
      <section className="lg:hidden min-h-screen">
        <div className="w-full h-[350px] overflow-hidden">
          <img src={image} alt="Producto" className="w-full h-full object-cover" />
        </div>

        <div className="relative -mt-20 px-4 pb-10">
          <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-2xl mx-auto">

            {/* Badge + rating */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full font-medium">
                {randomData.badge}
              </span>
              <span className="text-sm text-gray-600">
                ⭐ {randomData.rating} ({randomData.reviews} reviews)
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-3">{name}</h2>

            <div className="flex items-center gap-3 mb-5">
              <p className="text-2xl font-bold text-green-600">${price}</p>
              <p className="text-gray-500">({stock} disponibles)</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 mb-6">
              <p className="text-sm font-semibold text-gray-500 mb-1">
                Descripción
              </p>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>

            <button className="w-full text-white bg-primary-container py-3 rounded-xl font-medium transition-all duration-150 hover:bg-green-800 active:scale-95">
              Add to Basket
            </button>
          </div>
        </div>
      </section>

      {/* DESKTOP */}
      <section className="hidden lg:flex px-10 py-12 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">

          <div className="w-full h-[600px]">
            <img src={image} alt="Producto" className="w-full h-full object-cover rounded-2xl shadow-md" />
          </div>

          <div className="flex flex-col">

            {/* Badge + rating */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full font-medium">
                {randomData.badge}
              </span>
              <span className="text-sm text-gray-600">
                ⭐ {randomData.rating} ({randomData.reviews} reviews)
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">{name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <p className="text-3xl font-bold text-green-600">${price}</p>
              <p className="text-gray-500">({stock} disponibles)</p>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

            <button className="bg-primary-container text-white py-4 rounded-full w-[300px] transition-all duration-150 hover:bg-green-800 active:scale-95 mb-6">
              Add to Cart
            </button>

            <div className="flex gap-10 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <i className="fas fa-truck"></i> <span>Envío local gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt"></i> <span>Compra segura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default ProductDetailPage;