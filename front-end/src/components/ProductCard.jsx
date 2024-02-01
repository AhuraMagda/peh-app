import { Link, useLoaderData } from "react-router-dom";

function ProductCard() {
  // TODO wróc wraca do wszystkich lub typów w zależności od poprzedniej
  const product = useLoaderData();
  console.log(product);
  return (
    <>
      <main className="product">
        <Link to="/products">wróc</Link>
        <img src={`/${product.img}`} />
        <h2>{product.name}</h2>
        <p>{product.ingredients.join(", ")}</p>
      </main>
    </>
  );
}

export default ProductCard;
