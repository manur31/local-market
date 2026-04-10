import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FiMinus, FiPlus, FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/cartContext";


const CartPage = () => {
  const { cart, getCart, updateQty, removeItem } = useCart()

  useEffect(() => {
    getCart()
  }, []);

  const total = Array.isArray(cart)
  ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  : 0;

  if (cart.length === 0) {
    return (
      <div className="container py-28 lg:py-40 text-center mx-auto">
        <FiShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-xl font-bold text-foreground mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Start adding some amazing local products!</p>
        <Link to="/products"><button>Browse Products</button></Link>
      </div>
    );
  }

  return (
      <div className="flex flex-col lg:flex-row gap-6 py-6 px-4 sm:px-20 lg:px-30 w-full max-w-[1440px] mx-auto">
        <section className="lg:w-3/4 w-full">
            <h1 className="text-2xl font-bold text-foreground mb-6">Carrito</h1>

            <div className="flex flex-col gap-4 w-full">
            {Array.isArray(cart) && cart.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow p-4 flex gap-4">
                <img src={item.images[0]} alt={item.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">{item.store}</p>
                    <h3 className="font-semibold text-sm text-card-foreground truncate">{item.name}</h3>
                    <p className="text-primary font-bold mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center ">
                        <button variant="outline" size="icon" className="flex items-center justify-center h-8 w-8 rounded-lg" onClick={() => updateQty(item.id, -1)}>
                        <FiMinus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button variant="outline" size="icon" className="h-8 w-8 rounded-lg" onClick={() => updateQty(item.id, 1)}>
                        <FiPlus className="w-3 h-3" />
                        </button>
                    </div>
                    <button variant="ghost" size="icon" className="text-destructive flex items-center justify-center h-8 w-8" onClick={() => removeItem(item.id)}>
                        <FiTrash2 className="w-3 h-3" />
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>

        <section className="lg:sticky lg:top-26 w-full min-w-2xs lg:w-1/4 h-fit bg-surface-high rounded-2xl lg:mt-14 ">
            <div className="flex flex-col gap-4 p-8 w-full">
                <h3 className="font-bold text-center">Resumen del pedido</h3>
                <article>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Subtotal</span><span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-3">
                        <span>Delivery</span><span>Gratis</span>
                    </div>
                </article>
                <div className="border-t border-tertiary-fixed text-on-secondary-fixed pt-3 flex justify-between font-bold text-foreground">
                    <span>Total</span><span>${total.toFixed(2)}</span>
                </div>

                <Link to="/checkout">
                <button className="bg-primary text-white w-full py-3 mt-4 rounded-full transition-all duration-150 hover:bg-green-400 active:scale-95 active:bg-green-500">
                    Proceder a pagar
                </button> 
                </Link>
            </div>
        </section>
      </div>
  );
};

export default CartPage;