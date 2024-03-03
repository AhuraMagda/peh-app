import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/HomePage.jsx";
import ProductsNav from "./components/ProductsNav.jsx";
import ProductsList from "./views/ProductsList.jsx";
import ProductCard from "./components/ProductCard.jsx";
import AboutPage from "./views/AboutPage.jsx";
import TestPage from "./views/TestPage.jsx";
import NotFound from "./components/NotFound.jsx";
import ProductCardComments, {
  addComment,
} from "./components/ProductCardComments.jsx";
import Layout from "./components/Layout.jsx";
import { productsListLoader } from "../api/productsListLoader.js";
import { productCardLoader } from "../api/productCardLoader.js";
import { commentsLoader } from "../api/commentsLoader.js";

// WPROWADZIC ZMIANY Z KURSU
// 1 STRUKTURA FOLDEROW
// WYCIAGANIE FUNKCJI
// ROUTER

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/test",
        element: <TestPage />,
      },
      {
        path: "/products",
        element: <ProductsNav />,
        children: [
          {
            path: "/products/:typeId?",
            element: <ProductsList />,
            loader: productsListLoader,
          },
          {
            path: "/products/:typeId/:productId",
            element: <ProductCard />,
            loader: productCardLoader,
            children: [
              {
                path: "/products/:typeId/:productId/comments",
                action: addComment,
                element: <ProductCardComments />,
                loader: commentsLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
