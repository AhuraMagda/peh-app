import { Link, Outlet } from "react-router-dom";

// TODO add "<- wróć" only when one product is opened

function ProductsNav() {
  return (
    <main className="mt-20vh pt-10">
      <div className="w-full flex justify-center items-center h-20vh">
        <Link to="/products/emolientowa">
          <button className="m-5 bg-amber-400 p-2">emolietowe</button>
        </Link>
        <Link to="/products/proteinowa">
          <button className="m-5 bg-amber-400 p-2">proteinowe</button>
        </Link>
        <Link to="/products/humektantowa">
          <button className="m-5 bg-amber-400 p-2">humektantowe</button>
        </Link>
        <Link to="/products">
          <button className="m-5 bg-amber-400 p-2">wszystkie</button>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default ProductsNav;
