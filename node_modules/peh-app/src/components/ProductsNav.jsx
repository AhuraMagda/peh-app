import { Link, Outlet } from "react-router-dom";

export default function ProductsNav() {
  const filters = ["emolientowa", "proteinowa", "humektantowa"];

  return (
    <main className="mt-20vh pt-10 mb-10vh">
      <div className="w-full flex-wrap justify-center items-center flex h-20vh">
        {filters.map((filter) => (
          <Link key={filter} to={`/products/${filter}`}>
            <button className="m-5 bg-detail p-2">{filter}</button>
          </Link>
        ))}
        <Link to="/products">
          <button className="m-5 bg-amber-600 p-2">wszystkie</button>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </main>
  );
}
