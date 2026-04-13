import { useState } from "react";
import { toast } from 'sonner'

function CardProduct({product, updateCart, cart}) {
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    const existing = Array.isArray(cart) && cart?.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }]
      updateCart(newCart); 
    }
    toast.success(`${product?.name} fue agregado a tu carrito`);
  };


  return (
    <article
      className="w-85 bg-surface rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 shadow-xl sh-"
    >
      <div className="relative overflow-hidden">
        {/* TEXTO */}
        {product?.stock ? (
          <p className="absolute top-2 left-2 bg-green-200 text-grey-800 text-xs px-3 py-1 rounded-full z-10 border border-green-500">
            HAY STOCK
          </p>
        ) : (
          <p className="absolute top-2 left-2 bg-orange-100 text-orange-500 text-xs px-3 py-1 rounded-full z-10 border border-orange-500">
            NO HAY STOCK
          </p>
        )}
        {/* CORAZÓN */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 bg-gray-700 size-8 flex items-center justify-center rounded-full z-10"
        >
          <i
            className={`${liked ? "fas text-red-500" : "far text-white"} fa-heart`}
          ></i>
        </button>

        {/* IMAGEN con zoom */}
        {product?.images[0] ? (
          <img
            className="w-full h-[256px] object-cover transition-transform duration-300 hover:scale-105"
            src={product?.images[0]}
            alt={`imagen acerca de ${product?.name}`}
          />
        ):(
          <p>Este producto no tiene imagen</p>
        )}
      </div>

      <section className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-[10px]">{product?.category}</p>
            <h2 className="font-bold text-[18px]">{product?.name}</h2>
          </div>
          <p className="text-primary text-[20px] font-bold">${product?.price}</p>
        </div>
        <p className="py-2 text-sm text-[#999999] h-[60px] overflow-hidden">{product?.description}</p>
        <button onClick={handleAddToCart} className="bg-primary-container text-white w-full h-13 rounded-lg transition-all duration-150 hover:bg-primary active:scale-95 active:bg-green-500">
        Agregar al Carrito
        </button> 
      </section>
    </article>
  );
}

export default CardProduct;
