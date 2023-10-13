import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
  );
}

export default App;