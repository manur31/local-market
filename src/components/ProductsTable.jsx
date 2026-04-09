import { useState } from "react";
import { FiEdit2, FiTrash2, FiXOctagon } from "react-icons/fi";
import ProductImagesForm from "./ProductImagesForm";

function ProductsTable({products, onEdit, business_id, deleteProduct, uploadProductImage}) {

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [open, setOpen] = useState(false)
  const [openFormImage, setOpenFormImage] = useState(false)

  const handleOpen = (product) => {
    if (open) {
      setSelectedProduct(null)
    } else {
      setSelectedProduct(product)
    }
    setOpen(!open)
  }

  const handleOpenFormImage = (product) => {
    if (setOpenFormImage) {
      setSelectedProduct(product)
    } else {
      setSelectedProduct(null)
    }
    setOpenFormImage(!openFormImage)
  }

  const handleDelete = async () => {
    await deleteProduct(business_id, selectedProduct.id)
    setOpen(!open)
  }

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
                  <div onClick={() => handleOpenFormImage(product)} className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-500 cursor-pointer overflow-hidden">
                    {product.images ? (
                      <img className="w-full h-full object-cover" src={product.images[0]}/> 
                    ): (
                      <p>Img</p>
                    )}
                  </div>
                  <span className="font-medium text-gray-800 text-nowrap">
                    {product.name}
                  </span>
                </td>

                {/* CATEGORY */}
                <td className="px-6 py-4 text-gray-600 text-nowrap">
                  {product.category}
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
                <td className="px-6 py-4 flex justify-end gap-3 h-full">
                  <button onClick={() => onEdit(product)} className="text-gray-500 hover:text-blue-600 transition cursor-pointer">
                    <FiEdit2 size={18} />
                  </button>
                  <button onClick={() => handleOpen(product)} className="text-gray-500 hover:text-red-600 transition cursor-pointer">
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <section className={`${!open && 'hidden'} fixed top-0 left-0 flex items-center justify-center bg-gray-500/60 w-full h-screen px-4`}>
          <article className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl w-64">
            <FiXOctagon className="text-4xl text-red-500"/>
            <h3 className="text-center">Estas seguro de que quieres eliminar <span className="text-primary">{selectedProduct?.name}</span></h3>
            <div className="flex gap-4 mt-2">
              <button onClick={handleOpen} className="text-gray-500 hover:text-neutral-600 border border-transparent hover:border-neutral-600  py-1 px-4 w-fit rounded-lg transition cursor-pointer">
                Cancelar
              </button>
              <button onClick={handleDelete} className="text-white bg-red-500 hover:text-red-600 border border-red-500 py-1 px-4 w-fit rounded-lg hover:bg-white transition cursor-pointer">
                Eliminar
              </button>
            </div>
          </article>
      </section>

      <section className={`${!openFormImage && 'hidden'} fixed top-0 left-0 flex items-center justify-center bg-gray-500/60 w-full h-screen px-4 z-30`}>
          <ProductImagesForm product={selectedProduct} uploadProductImage={uploadProductImage} closeForm={() => setOpenFormImage(!openFormImage)}/>
      </section>
    </div>
  );
}

export default ProductsTable