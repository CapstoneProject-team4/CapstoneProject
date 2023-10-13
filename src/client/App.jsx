import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import  AllProducts from "./Components/AllProducts"
import SingleProduct from "./Components/SingleProducts"

function App() {
  return <>
   <div className="routes">
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/products" element={<AllProducts/>} />
  <Route path="/products/:id" element={<SingleProduct />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/cart" element={<Cart />} />
  </Routes>
  </div>
  </>
}


export default App;