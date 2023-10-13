import { useState } from 'react'
import { fetchAllProducts } from "../api/ajaxhelper"
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './AllProducts.css';
import Navbar from './Navbar';
import Footer from './Footer';
import News from './News';

export default function AllProducts(){
    const navigate = useNavigate()
     const[products,setProducts]=useState([])
     function renderAllProducts(){
        return products&&products.map((product)=>{
             return (
               
                 <div className='allProducts' key={product.id}>
                     <h4 className='h4'>{product.title}</h4>
                     <h4>{product.brand}</h4>
                     <h4>{product.price}</h4>
                     <h4>{product.description}</h4>
                     <img className='img' src={product.img} alt="img"/>
                     <button className='detail' onClick ={()=> navigate("/products/"+product.id)}>See Details</button>
                    
                 </div >
             )
                 
         })
     }
     useEffect(()=>{
         async function allProductsHandler(){
             const result = await fetchAllProducts()
             setProducts(result)
             console.log("1",result)
 
         }
         allProductsHandler()
 
     },[]
     )
     return (
         <div>
            <Navbar /> {/* Render the Navbar component */}
              {renderAllProducts()}
             <News/>
             <Footer/>
         </div>
        
         )
 }