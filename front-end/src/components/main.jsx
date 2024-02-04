import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import ProductCard from "./components/ProductCard.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => {
          return fetch("http://localhost:3000/products");
        },
      },
      {
        path: "/products/:productId",
        element: <ProductCard />,
        loader: ({ params }) => {
          console.log(params)
          return fetch(
            `http://localhost:3000/products/${params.productId}`
          );
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);