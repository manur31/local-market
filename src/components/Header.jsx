function Header() {
  return (
    <header className="">
      {/*  - - - - - - - - Mobile - - - - - - - -*/}
      <section className="lg:hidden p-[20px_24px] bg-surface">
        <div className="flex items-end justify-between mb-6 mx-2">
          <h1 className="font-bold text-2xl text-primary">LocalMarket</h1>
          <ul className="flex">
            <li className="mr-10 text-[20px]">
              <a href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
            <li className="text-[20px]">
              <a href="#">
                <i className="far fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex justify-between mx-2 text-sm">
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">FARMERS</a>
          </li>
          <li>
            <a href="#">DEALS</a>
          </li>
          <li>
            <a href="#">SUBSCRIPTION</a>
          </li>
        </ul>
      </section>
      {/*  - - - - - - - - Desktop - - - - - - - -*/}
      <section className="hidden  lg:block bg-surface " >
        <div className="max-w-[1280px] mx-auto w-full flex justify-between p-[24px_24px] ">

        <h1 className="font-bold text-2xl text-primary">Local Market</h1>
        <nav aria-label="Navegación principal">
          <ul className="flex font-bold">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="mx-8">
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Sell</a>
            </li>
          </ul>
        </nav>
          <ul className="flex">
            <li className="mr-6 text-[20px]"><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
            <li className="text-[20px]"><a href="#"><i className="far fa-user"></i></a></li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default Header;
