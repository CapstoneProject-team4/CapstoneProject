import React from "react"
import Navbar from "../components/Navbar"
import Slide from "../components/Slider"
import Categories from "../components/Categories"
import Products from "../components/Products"
import News from "../components/News"
import Footer from "../components/Footer"





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

