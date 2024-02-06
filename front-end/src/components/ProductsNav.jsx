import { Link, Outlet } from "react-router-dom";

export default function ProductsNav() {
  const filters = ["emolientowe", "proteinowe", "humektantowe"];

  return (
    <main className="mt-20vh pt-10 mb-10vh">
      <div className="w-full flex justify-center items-center h-20vh">
        {filters.map((filter) => (
          <Link key={filter} to={`/products/${filter}`}>
            <button className="m-5 bg-amber-400 p-2">{filter}</button>
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
