import React from "react"
import Navbar from "../components/Navbar"
import Slide from "../Components/Slider"
import Categories from "../Components/Categories"
import Products from "../components/Products"
import News from "../components/News"
import Footer from "../components/Footer"
import AdminDashboard from "./AdminDashboard"



const Home = ({token,role}) => {
  return (
    <div>
      <Navbar token ={token} role={role}/> 
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

