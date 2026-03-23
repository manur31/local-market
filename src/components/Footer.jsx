function Footer() {
  return (
    <footer className="text-green-500">
      <hr aria-hidden="true" />
      <section aria-label="Informacion principal del footer">
        <div>
          <h2>LocalMarket</h2>
          <p>
            Empowering independent creators and local communities since 2024.
            Curated with love, for the neighborhood.
          </p>
        </div>

        <nav aria-label="Enlaces de empresa">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Local Store Directory</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Enlaces de soporte">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Community Guidelines</a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Redes sociales">
          <h3>Connect</h3>
          <div>
            <a href="#" aria-label="Ir a red social 1">
              ☘
            </a>
            <a href="#" aria-label="Ir a red social 2">
              @
            </a>
          </div>
        </nav>
      </section>
      <hr aria-hidden="true" />
      <section aria-label="Informacion legal y configuracion">
        <p>© 2024 LocalMarket. All rights reserved.</p>
        <div>
          <button type="button" aria-label="Seleccionar idioma">
            <span>logo</span>English
          </button>
          <button type="button" aria-label="Seleccionar moneda">
            <span>logo</span>USD
          </button>
        </div>
      </section>
    </footer>
  )
}

export default Footer
