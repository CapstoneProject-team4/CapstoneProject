import React from "react"
import Navbar from "../Components/Navbar"
import Slide from "../Components/Slider"
import Categories from "../Components/Categories"
import Products from "../components/Products"
import News from "../Components/News"
import Footer from "../Components/Footer"




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

