import { createContext, useContext, useState } from "react";



const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCart most be used within a CartProvider")
    }

    return context
}

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const getCart = () => {
        setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    }

    const updateCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const updateQty = (id, delta) => {
        const updated = cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item);
        updateCart(updated);
    };

    const removeItem = (id) => updateCart(cart.filter((item) => item.id !== id));

    return (
        <CartContext.Provider
        value={{
            cart,
            getCart,
            updateCart,
            updateQty,
            removeItem
        }}
        >
            {children}
        </CartContext.Provider>
    )
}