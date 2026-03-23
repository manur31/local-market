function Header() {
  return (
    <header className="text-red-500">
      <h1>Local Market</h1>
      <nav aria-label="Navegación principal">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
        </ul>
      </nav>
      <div>
        <button aria-label="Carrito">Carrito</button>
        <button aria-label="Perfil">Usuario</button>
      </div>
    </header>
  );
}

export default Header;
