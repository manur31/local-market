import Header from "../components/Header.jsx";
import CardProduct from "../components/CardProduct.jsx";
import CardBusiness from "../components/CardBusiness/CardBusiness.jsx";
import Footer from "../components/Footer.jsx";

const CATEGORIES = [
  { id: 1, name: "Lácteos", icon: "🧀" },
  { id: 2, name: "Panadería", icon: "🥖" },
  { id: 3, name: "Frutas", icon: "🍎" },
  { id: 4, name: "Carnes", icon: "🥩" },
  { id: 5, name: "Verduras", icon: "🥬" },
  { id: 6, name: "Miel", icon: "🍯" }
];

const PRODUCTS = [
  { id: 1, title: "RAW WILDFLOWER HONEY", price: "18.00", businessId: "THE APIARY", image: "src/assets/arbol.jpg", description: "Unfiltered and raw honey.", lote: true },
  { id: 2, title: "PAN CASERO", price: "8.00", businessId: "PAN DE DIOS", image: "src/assets/arbol.jpg", description: "Recién horneado.", lote: false },
  { id: 3, title: "QUESO CAMEMBERT", price: "25.00", businessId: "LACTEOS SUR", image: "src/assets/arbol.jpg", description: "Artesanal 100%.", lote: true },
];

const BUSINESSES = [
  {
    id: 1,
    name: "The Apiary",
    category: "ORGANIC HONEY",
    location: "Brooklyn, NY",
    image: "src/assets/arbol.jpg",
    description: "Our honey is collected from local mountain meadows...",
    fans: "1.2k"
  },
  {
    id: 2,
    name: "Green Bean Roastery",
    category: "COFFEE SHOP",
    location: "Queens, NY",
    image: "src/assets/arbol.jpg",
    description: "The best local roasted beans in the area...",
    fans: "2.8k"
  }
];

function HomePage() {
  return (
    <>
      <Header />
      
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
            <button className="bg-[#1A4D2E] text-white px-6 py-3 rounded-full hover:bg-[#143d24] transition">Explore Marketplace</button>
            <button className="bg-[#F5EFE6] text-[#1A4D2E] px-6 py-3 rounded-full hover:bg-[#ede4d5] transition">View on Maps</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="src/assets/arbol.jpg" alt="Hero" className="rounded-2xl shadow-xl w-full object-cover h-[400px]" />
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-[#1A4D2E]">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center cursor-pointer hover:shadow-md transition-all">
              <span className="text-3xl mb-2 block">{cat.icon}</span>
              <p className="font-semibold text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1A4D2E]">Featured Local Products</h2>
          <button className="text-[#1A4D2E] font-semibold underline">See all</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(prod => (
            <CardProduct
              key={prod.id}
              title={prod.title}
              price={prod.price}
              image={prod.image}
              businessId={prod.businessId}
              description={prod.description}
              lote={prod.lote}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-4">
          <div>
            <span className="text-[#855300] font-bold text-xs tracking-widest uppercase">
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
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
