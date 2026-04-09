import { useState } from "react"

function ProductImagesForm({ product, closeForm, uploadProductImage }) {
  const productId = product?.id
  const business_id = product?.business_id

  const MAX_IMAGES = 4

  const [images, setImages] = useState(Array(MAX_IMAGES).fill(null))
  const [previews, setPreviews] = useState(Array(MAX_IMAGES).fill(null))
  const [loading, setLoading] = useState(false)

  // 📥 manejar cambio por slot
  const handleImageChange = (index, file) => {
    if (!file) return

    const updatedImages = [...images]
    const updatedPreviews = [...previews]

    updatedImages[index] = file
    updatedPreviews[index] = URL.createObjectURL(file)

    setImages(updatedImages)
    setPreviews(updatedPreviews) 
  }

  // ❌ eliminar imagen de un slot
  const removeImage = (index) => {
    const updatedImages = [...images]
    const updatedPreviews = [...previews]

    updatedImages[index] = null
    updatedPreviews[index] = null

    setImages(updatedImages)
    setPreviews(updatedPreviews)
  }

  // 📤 submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    const validImages = images.filter(Boolean)

    if (validImages.length === 0) {
      alert("Debes subir al menos una imagen")
      return
    }

    try {
      setLoading(true)
      await uploadProductImage(business_id, productId, validImages)

    } catch (error) {
      console.error(error)
      alert("Error subiendo imágenes")
    } finally {
      setLoading(false)
      setImages(Array(MAX_IMAGES).fill(null))
      setPreviews(Array(MAX_IMAGES).fill(null))
      closeForm()
    }
  }

  const handleClose = () => {
    setImages(Array(MAX_IMAGES).fill(null))
    setPreviews(Array(MAX_IMAGES).fill(null))
    closeForm()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl w-full max-w-[500px]"
    >
      <h2 className="text-lg font-bold mb-4">
        Imágenes del producto
      </h2>

      {/* Grid de slots */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((_, index) => (
          <div
            key={index}
            className="relative border-2 border-dashed rounded-xl h-32 flex items-center justify-center overflow-hidden"
          >
            {previews[index] ? (
              <>
                <img
                  src={previews[index]}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-black/70 text-white text-xs px-2 rounded"
                  aria-label={`Eliminar imagen ${index + 1}`}
                >
                  ✕
                </button>
              </>
            ) : (
              <label className="cursor-pointer text-sm text-gray-500 text-center px-2">
                Subir imagen
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageChange(index, e.target.files[0])
                  }
                  className="hidden"
                />
              </label>
            )}
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="flex gap-4 justify-end">
        <button type='button' onClick={handleClose} className='rounded-xl py-2 px-4 mt-6 w-fit text-sm cursor-pointer border-2 border-surface-highest hover:bg-surface-highest'>Cancelar</button>

        <button
          type="submit"
          disabled={loading}
          className="w-fit mt-6 bg-primary-container text-white py-2 px-6 rounded-xl disabled:opacity-50 cursor-pointer hover:bg-white hover:text-primary border-2 border-primary-container"
        >
          {loading ? "Subiendo..." : "Guardar imágenes"}
        </button>

      </div>
    </form>
  )
}

export default ProductImagesForm