import { createContext, useContext, useState } from "react";
import * as productService from '../services/productService'


const ProductContext = createContext()

export const useProduct = () => {
    const context = useContext(ProductContext)

    if (!context) {
        throw new Error("useProduct most be used within an ProductProvider")
    }

    return context
}

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const products = await productService.getProducts()

        setProducts(products)
    }

    const getProductsByBusiness = async (business_id) => {
        const products = productService.getProductsByBusiness(business_id)

        setProducts(products)
    }

    const getProductsById = async (id) => {
        const product = await productService.getProductById(id)

        setProducts(product)
    }

    const createProduct = async (business_id, productData) => {
        console.log('si')
        const product = await productService.createProduct(business_id, productData)
        console.log('sisi')

        setProducts([...products, ...product])
    }

    const updateProduct = async (business_id, id, updateFields) => {
        const product = await productService.updateProduct(business_id, id, updateFields)

        setProducts(products.filter(product => product.id !== id))
    } 

    const deleteProduct = async (business_id, id) => {
        await productService.deleteProduct(business_id, id)
        
        setProducts(products.filter(product => product.id !== id))
    }

    return (
        <ProductContext.Provider
        value={{
            getProducts,
            getProductsByBusiness,
            getProductsById,
            createProduct,
            updateProduct,
            deleteProduct,
            products
        }}
        >
            {children}
        </ProductContext.Provider>
    )
}