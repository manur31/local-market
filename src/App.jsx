import { AuthProvider } from "./context/authContext"
import {BrowserRouter, Routes, Route} from 'react-router'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import HomePage from "./pages/HomePage"
import ProductDetailPage from './pages/ProductDetailPage'
import { ProductProvider } from "./context/productContext"
import { CategoryProvider } from "./context/categoryContext"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <AuthProvider>
      <ProductProvider>
        <CategoryProvider>
          <div className="flex flex-col min-h-screen">
            <BrowserRouter>
              <Header/>
              <main className="grow w-full">
                <Routes>
                  <Route path={'/'} element={<HomePage/>} /> {/* Aqui ve HomePage */}
                  <Route path={'/products'} element/> {/* Aqui ve ProductListingPage */}
                  <Route path={'/products/:id'} element={<ProductDetailPage/>}/> {/* Aqui ve ProductDetailPage */}
                  <Route path={'/cart'} element/> {/* Aqui ve CartPage */}
                  <Route path={'/checkout'} element/> {/* Aqui ve CheckoutPage */}
                  <Route path={'/dashboard'} element={<Dashboard/>}/>
                  <Route path={'/login'} element={<Login/>}/>
                  <Route path={'/register'} element={<Register/>}/>
                </Routes>
              </main>
              <Footer/>
            </BrowserRouter>
          </div>
        </CategoryProvider>
      </ProductProvider>
    </AuthProvider>
    </>
  )
}

export default App
