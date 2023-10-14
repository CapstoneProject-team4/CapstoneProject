import React from "react"
import Navbar from "../components/Navbar"
<<<<<<< HEAD
import Slide from "../Components/Slider"
import Categories from "../Components/Categories"
import Products from "../components/Products"
import News from "../components/News"
import Footer from "../components/Footer"
import AdminDashboard from "./AdminDashboard"
=======
import Slide from "../components/Slider"
import Categories from "../components/Categories"
import Products from "../components/Products"
import News from "../Components/News"
import Footer from "../Components/Footer"


>>>>>>> 5c19a91def886b29788f06cec82c7f65456ba55e



const Home = ({token,role}) => {
  return (
    <div>
      <Navbar token ={token} role={role}/> 
      <Slide/>
      <Categories/>
      <Products/>
      <News/>
      <Footer/>
    </div>
  )
}


export default Home

