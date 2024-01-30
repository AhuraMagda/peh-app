import { useParams, Link, useLocation } from "react-router-dom";
import products from "../data/products";

function ProductCard() {
  const params = useParams();
  const location = useLocation();
  const search = location.state?.search ? `?${location.state.search}` : "";

  const product = products.find((p) => p.id === +params.product);
  const backButton = search ? `wróć do ${search.slice(6, -1)}e` : "wróć";

  return (
    <>
      <main className="product">
        <Link to={`..${search || ""}`} relative="path">
          {backButton}
        </Link>

        <img src={`../${product.img}`} />
        <h2>{product.name}</h2>
        <p>{product.ingredients.join(", ")}</p>
      </main>
    </>
  );
}

export default ProductCard;
