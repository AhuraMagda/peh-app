import "./scss/main.css";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:product" element={<ProductCard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
