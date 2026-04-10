import { AuthProvider } from "./context/authContext"
import { ProductProvider } from "./context/productContext"
import { CategoryProvider } from "./context/categoryContext"
import {BrowserRouter, Routes, Route} from 'react-router'

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/HomePage"
import ProductDetailPage from './pages/ProductDetailPage'
import ProductListingPage from "./pages/ProductListingPage"
import CartPage from "./pages/CartPage"

import Header from "./components/Header"
import Footer from "./components/Footer"

import { Toaster } from "sonner"
import { CartProvider } from "./context/cartContext"
import CheckoutPage from "./pages/CheckoutPage"

function App() {

  return (
    <>
    <AuthProvider>
      <ProductProvider>
        <CategoryProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Toaster/>
              <BrowserRouter>
                <Header/>
                <main className="grow w-full">
                  <Routes>
                    <Route path={'/'} element={<HomePage/>} /> {/* Aqui ve HomePage */}
                    <Route path={'/products'} element={<ProductListingPage/>}/> {/* Aqui ve ProductListingPage */}
                    <Route path={'/products/:id'} element={<ProductDetailPage/>}/> {/* Aqui ve ProductDetailPage */}
                    <Route path={'/cart'} element={<CartPage/>}/> {/* Aqui ve CartPage */}
                    <Route path={'/checkout'} element={<CheckoutPage/>}/> {/* Aqui ve CheckoutPage */}
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                  </Routes>
                </main>
                <Footer/>
              </BrowserRouter>
            </div>
          </CartProvider>
        </CategoryProvider>
      </ProductProvider>
    </AuthProvider>
    </>
  )
}

export default App
