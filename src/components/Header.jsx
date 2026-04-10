import { useEffect, useState } from "react";
import { Link } from 'react-router'
import { FiMenu, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { useCart } from "../context/cartContext";


function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const { cart } = useCart()

  return (
    <header className="sticky top-0 z-50">
      <section className="bg-surface mx-auto w-full max-w-[1440px] flex justify-between items-center p-6 lg:px-30" >
        <Link to={'/'}>
          <h1 onClick={() => setOpenMenu(false)} className="font-bold text-2xl text-primary">Local Market</h1>
        </Link>
        <nav aria-label="Navegación principal" className={`${openMenu ? 'flex' : 'hidden'} lg:flex max-sm:flex-col max-sm:w-full max-sm:h-dvh max-sm:absolute bg-surface max-sm:bg-surface/40 top-20 left-0`}>
          <Link className="w-full flex items-center justify-center" to={'/'}>
            <p onClick={() => setOpenMenu(!openMenu)} className="py-2 p-4 w-full text-center font-bold uppercase tracking-label lg:rounded-lg bg-surface hover:bg-primary hover:text-white">Home</p>
          </Link>
          <Link className="w-full flex items-center justify-center" to={'/products'}>
            <p onClick={() => setOpenMenu(!openMenu)} className="py-2 p-4 w-full text-center font-bold uppercase tracking-label lg:rounded-lg bg-surface hover:bg-primary hover:text-white">Shop</p>
          </Link>
          <Link className="w-full flex items-center justify-center" to='/dashboard'>
            <p onClick={() => setOpenMenu(!openMenu)} className="py-2 p-4 w-full text-center font-bold uppercase tracking-label lg:rounded-lg bg-surface hover:bg-primary hover:text-white">Sell</p>
          </Link>
        </nav>
        <nav className="flex gap-6 text-2xl">
          <Link className="relative" to={'/cart'}>
            <FiShoppingCart onClick={() => setOpenMenu(false)}/>
            <p className={`${cart?.length === 0 || cart === null && 'hidden'} absolute -top-3 -right-4 size-6 bg-primary flex items-center justify-center text-white text-sm rounded-full`}>
              {cart?.length}
            </p>
          </Link>
          <Link to={'/dashboard'}>
            <FiUser onClick={() => setOpenMenu(false)}/>
          </Link>
          <div className="lg:hidden">
            {openMenu ? (
              <FiX onClick={() => setOpenMenu(!openMenu)}/>
            ) : (
              <FiMenu onClick={() => setOpenMenu(!openMenu)}/>
            )}
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Header;
