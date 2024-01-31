import { useLoaderData } from "react-router-dom";

function ProductCard() {

  // TODO zrobić back button
  const product = useLoaderData()
  console.log(product)
  return (
    <>
        <main className="product">    
        <img src={`../${product.img}`} />
        <h2>{product.name}</h2>
        <p>{product.ingredients.join(", ")}</p>
      </main>
    </>
  );
}

export default ProductCard;
