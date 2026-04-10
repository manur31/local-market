import { FiShoppingCart, FiClock, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router";

function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center h-fit py-10 sm:py-40 bg-white px-4">
      <div className="max-w-xl w-full text-center">

        {/* Icono */}
        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-gray-100">
            <FiShoppingCart className="text-4xl text-gray-700" />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-semibold text-gray-900">
          Checkout en desarrollo
        </h1>

        {/* Descripción */}
        <p className="text-gray-500 mt-4 leading-relaxed">
          Estamos trabajando para ofrecerte una mejor experiencia de compra.
          Muy pronto podrás completar tus pedidos de forma rápida, segura y sencilla.
        </p>

        {/* Estado */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
          <FiClock />
          <span>Disponible próximamente</span>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <FiArrowLeft />
            Volver
          </button>

          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 rounded-full bg-primary text-white hover:opacity-90 transition"
          >
            Seguir comprando
          </button>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;