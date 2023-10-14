import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
export default function AdminDashboard(){
   const navigate = useNavigate();
 
    return  <>
    <div>
        <Navbar />
    </div>
    <img src={'https://static.prod01.ue1.p.pcomm.net/blackbaud/user_content/photos/000/006/6783/a6132a5cd55abcae190bc82567ca8a47-original-users.png'}></img>
    <button onClick={()=>navigate('/users')}>Users</button>
    <button>Products</button>
    </>
}