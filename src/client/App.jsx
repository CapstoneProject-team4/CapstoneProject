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
import { useState } from "react";
import AdminDashboard from "./Pages/AdminDashboard";


function App() {
  const [token,setToken] = useState()
  const [role, setRole] = useState()
  return <>
   <div className="routes">
  <Routes>

  <Route path="/" element={<Home token ={token} setToken={setToken} role ={role} setRole={setRole}/>} />
  <Route path="/products" element={<AllProducts token ={token} setToken={setToken}/>} />
  <Route path="/products/:id" element={<SingleProduct token ={token} setToken={setToken}/>} />
  <Route path="/login" element={<Login token ={token} setToken={setToken} role ={role} setRole={setRole}/>} />
  <Route path="/admin" element={<AdminDashboard token ={token} setToken={setToken} role ={role} setRole={setRole}/>} />
  <Route path="/register" element={<Register />} />
  <Route path="/cart" element={<Cart token ={token} setToken={setToken}/>} />

  </Routes>
  </div>
  </>
}


export default App;