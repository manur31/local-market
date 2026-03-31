import { FiEdit2, FiTrash2 } from "react-icons/fi";

function ProductsTable({products, onEdit}) {
  return (
    <div className="bg-white overflow-auto max-h-[400px]">
      <table className="w-full text-sm text-left">
        <thead className="bg-white text-on-surface text-xs tracking-wide">
          <tr>
            <th className="px-6 py-4">Product</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Stock</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            const isActive = product.stock > 0;

            return (
              <tr
                key={product.id}
                className="border-t border-surface-high hover:bg-gray-50 transition"
              >
                {/* PRODUCT */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="min-w-12 min-h-12 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                    Img
                  </div>
                  <span className="font-medium text-gray-800 text-nowrap">
                    {product.name}
                  </span>
                </td>

                {/* CATEGORY */}
                <td className="px-6 py-4 text-gray-600 text-nowrap">
                  {product.category_id}
                </td>

                {/* PRICE */}
                <td className="px-6 py-4 font-medium text-gray-800">
                  ${product.price.toFixed(2)}
                </td>

                {/* STOCK */}
                <td className="px-6 py-4 text-gray-700">
                  {product.stock}
                </td>

                {/* STATUS */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      isActive
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {isActive ? "Active" : "Out of stock"}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="px-6 py-4 flex justify-end gap-3">
                  <button onClick={() => onEdit(product)} className="text-gray-500 hover:text-blue-600 transition cursor-pointer">
                    <FiEdit2 size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-red-600 transition cursor-pointer">
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable