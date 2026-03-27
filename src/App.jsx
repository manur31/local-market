import { AuthProvider } from "./context/authContext"
import {BrowserRouter, Routes, Route} from 'react-router'
import Login from "./pages/Login"
import Register from "./pages/Register"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element ={<HomePage/>} /> 
          <Route path={'/products'} element/> {/* Aqui ve ProductListingPage */}
          <Route path={'/products/:id'} element/> {/* Aqui ve ProductDetailPage */}
          <Route path={'/cart'} element/> {/* Aqui ve CartPage */}
          <Route path={'/checkout'} element/> {/* Aqui ve CheckoutPage */}
          <Route path={'/dashboard'} element/> {/* Aqui ve DashboardPage */}
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
