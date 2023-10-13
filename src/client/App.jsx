import Product from "./Components/Product";
import Home from "./Pages/Home"
import {Route,Routes} from 'react-router-dom';
import Products from './Components/Products'
import SingleProduct from "./Components/SingleProducts";
import AllProducts from "./Components/AllProducts";
import { Link } from 'react-router-dom'




import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
