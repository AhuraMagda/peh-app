import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";

function ProductCard() {
  const product = useLoaderData();
  let navigate = useNavigate();
  return (
    <div className="mb-10">
      <div className="flex justify-center items-center flex-col">
        <button onClick={() => navigate(-1)}>wróć</button>
        <img src={`/${product.img}`} className="h-48" />
        <h2 className="p-2.5 text-2xl">{product.name}</h2>
        <p className="text-xl">OCENA: 3.5⋆</p>
        <p className="py-6 max-w-sm">{product.ingredients.join(", ")}</p>
      </div>

      {/* schować button po kliku */}
      <Link to={`/products/${product.type}/${product.id}/comments`}>
        pokaż komenatrze
      </Link>
      <Outlet />
    </div>
  );
}

export default ProductCard;
