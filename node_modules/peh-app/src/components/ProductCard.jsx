import { useLoaderData, useNavigate } from "react-router-dom";

function ProductCard() {
  // TODO dodać komentarze + ocenę?
  const product = useLoaderData();
  let navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col">
      <button onClick={() => navigate(-1)}>wróć</button>
      <img src={`/${product.img}`} className="h-48" />
      <h2 className="p-2.5 text-2xl">{product.name}</h2>
      <p className="py-6 max-w-sm">{product.ingredients.join(", ")}</p>
    </div>
  );
}

export default ProductCard;
