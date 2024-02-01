import { Link, useLoaderData } from "react-router-dom";

function ProductCard() {

  // TODO zrobić back button
  const product = useLoaderData()
  console.log(product)
  // fix wróć
  return (
    <>
        <main className="product">    
        <Link to="/products">
        wróc
        </Link>
        <img src={`../${product.img}`} />
        <h2>{product.name}</h2>
        <p>{product.ingredients.join(", ")}</p>
      </main>
    </>
  );
}

export default ProductCard;
