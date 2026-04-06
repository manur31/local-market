
const CardBusiness = ({ name, category, image, location, description, fans }) => {
   return (
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition">

         <div className="relative">
            <img
               src={image || "https://images.unsplash.com/photo-1509042239860-f550ce710b93"}
               alt={name}
               className="w-full h-56 object-cover"
               loading="lazy"
            />

            <div  className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-xl shadow text-sm font-medium flex items-center gap-1">
               📍 {location || "Local Store"}
            </div>
         </div>

         <div className="p-5">

            <span className="inline-block text-xs font-semibold bg-red-100 text-red-500 px-2 py-1 rounded-md mb-3">
               {category || "FAMILY OWNED"}
            </span>

            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-3">
               {description || "No description available for this local store."}
            </p>

        <div className="border-gray-200 border-t my-4"></div>

        <div className="flex items-center justify-between">
          
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
          </div>

               <span className="text-sm text-gray-500 font-medium">{fans || "500+"} local fans</span>
            </div>

         </div>
      </div>
   );
};

export default CardBusiness;