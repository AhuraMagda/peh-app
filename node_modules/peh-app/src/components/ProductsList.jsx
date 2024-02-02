import { Link, Outlet, useLoaderData } from "react-router-dom";

function ProductsList() {
  const products = useLoaderData();

  return (
    <>
      <div className="flex justify-center items-center flex-wrap px-2 py-4">
        {products
          .map((product) => {
            return (
              <Link
                key={product.id}
                to={`/products/${product.type}/${product.id}`}
              >
                <div className="flex bg-white p-2.5 w-72 m-2.5 border-2 border-solid border-yellow-400 rounded-xl">
                  <img src={`/${product.img}`} alt="kallos" className="h-40"/>
                  <div className="flex justify-center items-center flex-col">
                    <h2>{product.name}</h2>
                    <p>{product.type}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <Outlet />
    </>
  );
}

export default ProductsList;
