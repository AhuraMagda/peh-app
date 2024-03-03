import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProductsNav from "./components/ProductsNav.jsx";
import ProductsList from "./components/ProductsList.jsx";
import ProductCard from "./components/ProductCard.jsx";
import About from "./components/About.jsx";
import Test from "./components/Test.jsx";
import NotFound from "./components/NotFound.jsx";
import ProductCardComments, {
  addComment,
} from "./components/ProductCardComments.jsx";
import { BACK_END_URL } from "../constants/api.js";
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
