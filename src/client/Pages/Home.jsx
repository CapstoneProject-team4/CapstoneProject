import React from "react"
import Navbar from "../Components/Navbar"

import Slide from "../Components/Slider"
import Categories from "../Components/Categories"
import Products from "../Components/Products"
import News from "../Components/News"
import Footer from "../Components/Footer"


const Home = () => {
  return (
    <div>
      <Navbar/> 
      <Slide/>
      <Categories/>
      <Products/>
    
      <News/>
      <Footer/>
    </div>
  )
}

export default Home
