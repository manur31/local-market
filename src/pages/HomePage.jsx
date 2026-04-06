import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CardProduct from "../components/CardProduct.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <CardProduct
        title="RAW WILDFLOWER HONEY"
        price="18.00"
        image="src/assets/arbol.jpg"
        businessId="THE APIARY"
        description="Unfiltered and raw honey collected from local mountain meadows. Rich in floral notes."
        lote={true}
      />
      <main className="hidden">
        <section>
          <h2>Bienvenido a Local Market</h2>
          <p>Compra y vende productos locales de forma facil.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
