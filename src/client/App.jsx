import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

function App() {
  return <>
   <div className="navigate">
      <Link to= "/products">All Products</Link>
   </div>


   <div>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/products" element={<AllProducts/>} />
  <Route path="/products/:id" element={<SingleProduct />} />
  </Routes>
  </div>
  </>
}


export default App;
