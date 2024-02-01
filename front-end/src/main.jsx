import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProductsNav from "./components/ProductsNav.jsx";
import ProductsList from "./components/ProductsList.jsx";
import ProductCard from "./components/ProductCard.jsx";
import About from "./components/About.jsx";
import Test from "./components/Test.jsx";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/products",
        element: <ProductsNav />,
        loader: () => {
          return fetch(`http://localhost:3000/products`);
        },
        children: [
          {
            path: "/products",
            element: <ProductsList />,
            loader: () => {
              return fetch(`http://localhost:3000/products`);
            },
          },
          {
            path: "/products/:typeId",
            element: <ProductsList />,
            loader: ({ params }) => {
              return fetch(
                `http://localhost:3000/products?type=${params.typeId}`
              );
            },
          },
          {
            path: "/products/:typeId/:productId",
            element: <ProductCard />,
            loader: ({ params }) => {
              console.log(params);
              return fetch(
                `http://localhost:3000/products/${params.productId}`
              );
            },
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
