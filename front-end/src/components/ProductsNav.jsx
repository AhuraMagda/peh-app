import { Link, Outlet } from "react-router-dom";

// TODO add "<- wróć" only when one product is opened

function ProductsNav() {
  return (
    <main className="products-page">
      <div className="products-page__nav">
        <Link to="/products/emolientowa">
          <button>emolietowe</button>
        </Link>
        <Link to="/products/proteinowa">
          <button>proteinowe</button>
        </Link>
        <Link to="/products/humektantowa">
          <button>humektantowe</button>
        </Link>
        <Link to="/products">
          <button>wszystkie</button>
        </Link>
      </div>

      <div className="products-page__content">
        <Outlet />
      </div>
    </main>
  );
}

export default ProductsNav;
