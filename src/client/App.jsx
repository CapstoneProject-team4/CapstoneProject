import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
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
  <Route path="/Login" element={<Login />} />
  <Route path="/Register" element={<Register />} />
  <Route path="/Cart" element={<Cart />} />
  </Routes>
  </div>
  </>
}


export default App;