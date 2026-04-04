import { FiMapPin, FiPackage, FiX } from "react-icons/fi";

function OrderDetail({ order, closeCard }) {
  const getStatusStyles = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-600";
      case "processing":
        return "bg-blue-100 text-blue-600";
      case "completed":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <article className="bg-white rounded-2xl shadow-sm p-6 space-y-4 hover:shadow-md transition relative">
        <FiX onClick={closeCard} className="absolute top-3 right-3 cursor-pointer"/>
      
      {/* HEADER */}
      <header className="flex items-center justify-between gap-4 mt-2">
        <h3 className="font-semibold text-gray-800 text-lg">
          {order?.order_code}
        </h3>

        <p className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusStyles(order?.status)}`}>
            {order?.status}
        </p>
      </header>

      {/* CUSTOMER */}
      <p className="text-gray-700 font-medium">
        {order?.customer_name}
      </p>

      {/* INFO */}
      <section className="space-y-2 text-sm text-gray-600">
        
        <div className="flex items-center gap-2">
          <FiPackage size={16} />
          <span>{order?.items} items</span>
        </div>

        <div className="flex items-center gap-2">
          <FiMapPin size={16} />
          <span>{order?.delivery_address}</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-3 border-t border-primary">
        <p className="w-full font-semibold text-end text-gray-800">
          ${order?.total.toFixed(2)}
        </p>
      </footer>
    </article>
  );
}

export default OrderDetail