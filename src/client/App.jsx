import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProducts";
import React, { useState, useEffect } from "react";
import AdminDashboard from "./Pages/AdminDashboard";
import Users from "./Pages/users";
import EditProduct from "./Components/EditProduct";
import AddProducts from "./Components/AddProducts";
import Logout from "./Components/Logout";
import { CartProvider } from "./components/CartContext";
import CartItems from "../../../../cap2/my-app/backup/CartItems";

function App() {
  const [token, setToken] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    console.log(role, 'rolesss');
  }, [role]);

  return (
    <div className="routes">
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={<Home token={token} setToken={setToken} role={role} setRole={setRole} />}
          />
          <Route
            path="/products"
            element={<AllProducts token={token} setToken={setToken} role={role} setRole={setRole} />}
          />
          <Route
            path="/products/:id"
            element={<SingleProduct token={token} setToken={setToken} role={role} setRole={setRole} />}
          />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} role={role} setRole={setRole} />}
          />
          <Route path="/logout" element={<Logout token={token} setToken={setToken} />} />
          <Route
            path="/admin"
            element={<AdminDashboard token={token} setToken={setToken} role={role} setRole={setRole} />}
          />
          <Route path="/register" element={<Register token={token} role={role} setRole={setRole} />} />
          <Route path="/cart" element={<Cart token={token} role={role} />} />
          <Route
            path="/users"
            element={<Users token={token} setToken={setToken} role={role} setRole={setRole} />}
          />
          <Route
            path="/products/:id/edit"
            element={<EditProduct token={token} setToken={setToken} role={role} setRole={setRole} />}
          />
          <Route
            path="/products/addProduct"
            element={<AddProducts token={token} setToken={setToken} role={role} setRole={setRole} />}
          />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
