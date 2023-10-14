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
     const [cart, SetCart] = useState({}); // keep track of the cart items and quantities

     const addToCart = (product) => {
        SetCart((prevCart) => ({
            ...prevCart,
            [product.id]: (prevCart[product.id] || 0),
        }));
     };

     const cartToUser = async () => {
        const response = await fetch(`http://localhost:3000/`,{
            method: "POST",
            body: JSON.stringify({
                product_id: product.id,
                user_id: user.id,
            }),
        });
        const data = await response.json();
    };

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
                    <div>
                        <input
                            type="number"
                            min="1"
                            value={cart[product.id] || 0}
                            onChange={(e) => {
                                const quantity = parseInt(e.target.value, 10) || 0;
                                SetCart((prevCart) => ({ ...prevCart, [product.id]: quantity }));
                            }}
                            />
                        <button onClick={() => addToCart(product, product.id)}>Add to Cart</button>
                        {/* <button onClick={() => navigate('/cart', { state: { cart } })}>
                            Go to Checkout
                        </button> */}


                    </div>
                 </div >
             )
             
             
         })
     }
     useEffect(()=>{
         async function allProductsHandler(){
             const result = await fetchAllProducts()
             setProducts(result);
 
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