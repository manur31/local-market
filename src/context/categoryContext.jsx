import { createContext, useContext, useState } from "react";
import * as categoryService from '../services/categoryService'


const CategoryContext = createContext()

export const useCategory = () => {
    const context = useContext(CategoryContext)

    if (!context) {
        throw new Error("useCategory most be used within an CategoryProvider")
    }

    return context
}

export const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const categories = await categoryService.getCategories()

        setCategories(categories)
    }

    const createCategory = async (name) => {
        const category = await categoryService.createCategory(name)

        setCategories([...categories, ...category])
    }


    return (
        <CategoryContext.Provider
        value={{
            categories,
            getCategories,
            createCategory
        }}
        >
            {children}
        </CategoryContext.Provider>
    )
}