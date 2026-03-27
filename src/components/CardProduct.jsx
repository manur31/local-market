import { useState } from "react";

function CardProduct({ title, price, image, businessId, description, lote }) {
  const [liked, setLiked] = useState(false);

  return (
    <article
      className="w-85  bg-surface rounded-lg m-10 overflow-hidden 
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      <div className="relative overflow-hidden">
        {/* TEXTO */}
        {lote ? (
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
        <img
          className="w-full h-[256px] object-cover transition-transform duration-300 hover:scale-105"
          src={image}
          alt={title}
        />
      </div>

      <section className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-[10px]">{businessId}</p>
            <h2 className="font-bold text-[18px]">{title}</h2>
          </div>
          <p className="text-primary text-[20px] font-bold">${price}</p>
        </div>
        <p className="py-2 text-sm text-[#999999] h-[60px] overflow-hidden">{description}</p>
        <button className="bg-[#9CE39E] w-full h-13 rounded-lg transition-all duration-150 hover:bg-green-400 active:scale-95 active:bg-green-500">
        Add to Basket
        </button> 
      </section>
    </article>
  );
}

export default CardProduct;
