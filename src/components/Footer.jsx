function Footer() {
  return (
    <footer className="bg-surface text-on-surface rounded-t-2xl">
      {/*  - - - - - - Version mobile - - - - - - */}
      <section className="p-[40px_48px] flex flex-col items-center lg:hidden">
        <h1 className="text-primary font-bold text-lg" >LocalMarket</h1>
        <p className="text-sm">© 2024 LocalMarket. Harvested with care.</p>
        <ul className="text-xs grid grid-cols-2 gap-4 uppercase">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Vendor Portal</a>
          </li>
          <li>
            <a href="#">Sustainability</a>
          </li>
        </ul>
      {/*  - - - - - - Version Desktop - - - - - - */}
      </section>
      <section className="hidden lg:block border-0 border-t border-[#BFC9C133] pt-[80px] pb-[80px]">
        <div className="mx-auto w-full max-w-[1280px] px-[24px]">
        <section
          aria-label="Informacion principal del footer"
          className="mb-[80px] flex gap-12"
        >
          <div className="flex-1 max-w-[272px] aspect-video">
            <h2 className="text-primary font-bold text-lg mb-6 shrink-0">LocalMarket</h2>
            <p>
              Empowering independent creators and local communities since 2024.
              Curated with love, for the neighborhood.
            </p>
          </div>

          <nav
            aria-label="Enlaces de empresa"
            className="flex flex-col flex-1 max-w-[272px] aspect-video min-h-0 text-base"
          >
            <h3 className="mb-6 shrink-0 font-bold">Company</h3>
            <ul className="flex min-h-0 flex-1 flex-col justify-evenly">
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

          <nav
            aria-label="Enlaces de soporte"
            className="flex flex-col flex-1 max-w-[272px] aspect-video min-h-0 text-base"
          >
            <h3 className="mb-6 shrink-0 font-bold">Support</h3>
            <ul className="flex min-h-0 flex-1 flex-col justify-evenly">
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

          <nav aria-label="Redes sociales" className="flex-1 max-w-[272px] aspect-video text-base">
            <h3 className="mb-6 shrink-0 font-bold">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex size-[40px] items-center justify-center bg-gray-100 rounded-full "
                aria-label="Ir a red social 1"
              >
                <i className="fas fa-share-alt" />
              </a>
              <a
                href="#"
                className="inline-flex size-[40px] items-center justify-center bg-gray-100 rounded-full"
                aria-label="Ir a red social 2"
              >
                <i className="fas fa-at" />
              </a>
            </div>
          </nav>
        </section>
        </div>

        <section
          aria-label="Informacion legal y configuracion"
          className="border-0 border-t border-[#BFC9C133]"
        >
          <div className="mx-auto flex h-[53px] w-full max-w-[1280px] items-end justify-between px-[24px] text-sm">
            <p>© 2024 LocalMarket. All rights reserved.</p>
            <div>
              <button type="button" className="mr-8" aria-label="Seleccionar idioma">
                <span className="mr-2"><i class="fas fa-globe-americas"></i></span>English
              </button>
              <button type="button" aria-label="Seleccionar moneda">
                <span className="mr-2"><i class="far fa-money-bill-alt"></i></span>USD
              </button>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
