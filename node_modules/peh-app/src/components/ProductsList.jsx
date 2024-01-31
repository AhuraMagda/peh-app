import { Link, useLoaderData } from "react-router-dom";

function ProductsList() {
  const products = useLoaderData();

  return (
    <>
      <div className="products-list">
        {products
          .map((product) => {
            return (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
              >
                <div className="products-list__product-card">
                  <img src={`${product.img}`} alt="kallos" />
                  <div className="products-list__product-card__text">
                    <h2>{product.name}</h2>
                    <p>{product.type}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default ProductsList;
