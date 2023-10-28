
import './scss/main.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductCard from './components/ProductCard';
import Layout from './components/Layout';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:product" element={<ProductCard />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
