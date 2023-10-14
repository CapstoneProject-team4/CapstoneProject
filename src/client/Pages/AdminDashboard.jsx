import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./AdminDashboard.css"; 

export default function AdminDashboard({ token }) {
  const navigate = useNavigate();

  return (
    <div className="AdminDashboard"> 
      <Navbar token={token} />
      <img
        src="https://static.prod01.ue1.p.pcomm.net/blackbaud/user_content/photos/000/006/6783/a6132a5cd55abcae190bc82567ca8a47-original-users.png"
        alt="Users"
      ></img>
      <button onClick={() => navigate("/users")}>Users Management</button>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zVK3tqcBHo1CmNNPKHP2I_EV9NGn8kLPsA3VMsgBCTmj8QQWIDUyYIc7mA-cQzaFPlo&usqp=CAU"
        alt="Products"
      ></img>
      <button onClick={() => navigate("/products")}>Products Management</button>
    </div>
  );
}
