import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import  AllProducts from "./Components/AllProducts"
import SingleProduct from "./components/SingleProducts"
import { useState } from "react";
import AdminDashboard from "./Pages/AdminDashboard";
import Users from "./Pages/users";
import EditProduct from "./Components/EditProduct";




function App() {
  const [token,setToken] = useState()
  const [role, setRole] = useState()
  console.log(role,"rolesss")
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
  <Route path="/users" element={<Users token ={token} setToken={setToken} role ={role} setRole={setRole}/>} />
  <Route path="/products/:id/edit" element={<EditProduct token ={token} setToken={setToken} role ={role} setRole={setRole}/>} />

  </Routes>
  </div>
  </>
}


export default App;