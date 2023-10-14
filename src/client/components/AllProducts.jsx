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
    //  const [cart, SetCart] = useState({}); // keep track of the cart items and quantities

    //  const addToCart = (product) => {
    //     SetCart((prevCart) => ({
    //         ...prevCart,
    //         [product.id]: (prevCart[product.id] || 0) + 1,
    //     }));
    //  };

    function addToCart(product) {
        // var cartIsEmpty = cartWrapper.hasClass('empty');
        //get localstorage cart product list
        // getProductsFromLocalStorage();
        //update cart product list
        addProduct(product);
        //update number of items
        // updateCartCount(cartIsEmpty);
        //show cart
        // cartWrapper.removeClass('empty');
      }

      function addProduct(product){
        let products = [];
        if(localStorage.getItem('products')){
            products = JSON.parse(localStorage.getItem('products'));
        }
        
        products.push({'productId' : product, 'quantity': 1});
        localStorage.setItem('products', JSON.stringify(products));
      }

      

    //   function getProductsFromLocalStorage() {
    //     const cs = localStorage.getItem('products');
    //     if (cs === null) {
    //       addProduct();
    //     } else {
    //       $.each(cs.products, function(key, value) {
    //         cartList.prepend($('<li class="product"><div class="product-image"><a href="#0"><img src="'+ value.image +'" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + value.name + '</a></h3><span class="price">${value.price}</span><div class="actions"><a href="#0" class="delete-item">Delete</a><a class="delete-item">' + value.size + '</a><a class="delete-item">' + value.color + '</a><div class="quantity"><label for="cd-product-' + value.productId + '">Qty</label><span class="select"><select id="cd-product-' + value.productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>'));
    //       });
    //     }
    //   }

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
                    <form>
                        {/* <input
                            type="number"
                            id="number"
                            name="number"
                            min="1"
                            value={cart[product.id] || 0}
                            onChange={(e) => {
                                const quantity = parseInt(e.target.value, 10) || 0;
                                SetCart((prevCart) => ({ ...prevCart, [product.id]: quantity }));
                            }}
                            /> */}
                        <button type="button" onClick={() => addToCart(product.id)/*(document.cookie = product.id+"="+  +"; path=/") */}>Add to Cart</button>
                        {/* <button onClick={() => navigate('/cart', { state: { cart } })}>
                            Go to Checkout
                        </button> */}


                    </form>
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