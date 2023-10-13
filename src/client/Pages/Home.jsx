import React from "react"
import Navbar from "../Components/Navbar"

import Slide from "../Components/Slider"
import Categories from "../Components/Categories"
import Products from "../Components/Products"
import News from "../Components/News"
import Footer from "../Components/Footer"
import AdminDashboard from "./AdminDashboard"


const Home = ({setToken,setRole}) => {
  return (
    <div>
      <Navbar setToken ={setToken} setRole={setRole}/> 
      <Slide/>
      <Categories/>
      <Products/>
      <AdminDashboard />
      <News/>
      <Footer/>
    </div>
  )
}


export default Home
