import { useLoaderData, useNavigate } from "react-router-dom";

function ProductCard() {
  // TODO dodać komentarze + ocenę?
  const product = useLoaderData();
  let navigate = useNavigate();
  return (
    <>
      <main className="product">
        <button onClick={()=>navigate(-1)}>wróć</button>
        <img src={`/${product.img}`} />
        <h2>{product.name}</h2>
        <p>{product.ingredients.join(", ")}</p>
      </main>
    </>
  );
}

export default ProductCard;
