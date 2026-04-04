import { FiEye } from "react-icons/fi";
import OrderDetail from "./OrderDetail";
import { useEffect, useState } from "react";

function OrdersTable({orders}) {

  const [selectedOrder, setSelectedOrder] = useState(null)
  const [open, setOpen] = useState(false)

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

  useEffect(() => {
          if (open) {
              document.body.style.overflowY = 'hidden'
          } else {
              document.body.style.overflowY = 'auto'
          }
      }, [open])

  const handleView = (order) => {
    setSelectedOrder(order)
    setOpen(!open)
  }

  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  return (
    <div className="bg-white overflow-auto max-h-[400px]">
      <table className="w-full text-sm text-left">
        <thead className="text-on-surface text-xs">
          <tr>
            <th className="px-6 py-4">Order ID</th>
            <th className="px-6 py-4">Customer</th>
            <th className="px-6 py-4">Items</th>
            <th className="px-6 py-4">Total</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t border-surface-high hover:bg-gray-50 transition"
            >
              {/* ORDER ID */}
              <td className="px-6 py-4 font-medium text-nowrap text-gray-800">
                {order.order_code}
              </td>

              {/* CUSTOMER */}
              <td className="px-6 py-4 text-nowrap text-gray-700">
                {order.customer_name}
              </td>

              {/* ITEMS */}
              <td className="px-6 py-4 text-nowrap text-gray-600">
                {order.items} items
              </td>

              {/* TOTAL */}
              <td className="px-6 py-4 text-nowrap font-medium text-gray-800">
                ${order.total.toFixed(2)}
              </td>

              {/* STATUS */}
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 text-xs text-nowrap rounded-full font-medium ${getStatusStyles(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </td>

              {/* DATE */}
              <td className="px-6 py-4 text-nowrap text-gray-600">
                {formatDate(order.created_at)}
              </td>

              {/* ACTION */}
              <td className="px-6 py-4 flex justify-end">
                <button className="text-gray-500 hover:text-blue-600 transition cursor-pointer">
                  <FiEye size={18} onClick={() => handleView(order)}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className={`${!open && 'hidden'} fixed top-0 left-0 flex items-center justify-center bg-gray-500/60 w-full h-screen px-4`}>
          <OrderDetail order={selectedOrder} closeCard={() => setOpen(!open)}/>
      </section>
    </div>
  );
}

export default OrdersTable