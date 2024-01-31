import { Link, Outlet} from "react-router-dom";


function Products() {
  return (
    <main className="products-page">
      <div className="products-page__nav">
        <Link to="..">
          <button>HOME</button>
        </Link>
        {/* TODO use redirect */}
        <Link to="/products/emolientowa" >
          emolietowe
        </Link>
        <Link to="/products/proteinowa" >
          proteinowe
        </Link>
        <Link to="/products/humektantowa" >
          humektantowe
        </Link>
        <Link to="/products" >
          wszystkie
        </Link>
      </div>

      <div className="products-page__content">
        <Outlet />
      </div>
    </main>
  );
}

export default Products;
