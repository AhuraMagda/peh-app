import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate,
  useOutlet,
} from "react-router-dom";

function ProductCard() {
  const product = useLoaderData();
  let navigate = useNavigate();

  const isOutletVisible = useOutlet();

  return (
    <div className="mb-10">
      <div className="flex justify-center items-center flex-col">
        <button onClick={() => navigate(-1)}>wróć</button>
        <img src={`/${product.img}`} className="h-48" />
        <h2 className="p-2.5 text-2xl">{product.name}</h2>
        <p className="text-xl text-red-600">OCENA: 3.5⋆</p>
        <p className="py-6 max-w-sm">{product.ingredients.join(", ")}</p>
      </div>

      {!isOutletVisible ? (
        <Link to={`/products/${product.type}/${product.id}/comments`}>
          pokaż komenatrze
        </Link>
      ) : (
        <Link to={`/products/${product.type}/${product.id}`}>
          schowaj komentarze
        </Link>
      )}
      <Outlet />
    </div>
  );
}

export default ProductCard;
