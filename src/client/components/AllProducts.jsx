import React, { useState, useEffect } from 'react';
import { deleteProduct, fetchAllProducts } from '../api/ajaxhelper';
import { useNavigate } from 'react-router-dom';
import './AllProducts.css';
import Navbar from './Navbar';
import Footer from './Footer';
import News from './News';
import {useCart} from "./CartContext";

export default function AllProducts({ token }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
 const {setCart} = useCart(); //get the setCart function from the CartContext
  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: (prevCart[product.id] || 0) + 1,
    }));
  };

  function renderAllProducts() {
    return products.map((product) => (
      <div className="allProducts" key={product.id}>
        {/* Product details */}
        <h4 className="h4">{product.title}</h4>
        <h4>{product.brand}</h4>
        <h4>{product.price}</h4>
        <h4>{product.description}</h4>
        <img className="img" src={product.img} alt="img" />

        {/* Add to Cart button using Cartcontext */}
        <button onClick={() => addToCart(product)}>Add to Cart</button>

        {/* Other product actions */}
       <button className='detail' onClick ={()=> navigate("/products/"+product.id)}>See Details</button>
        {token && role == "Admin"?
          <div>
          <button className= 'edit' onClick={()=> navigate("/products/"+product.id+"/edit")}>Edit Product</button>
          <button className= 'delete' onClick={()=>deleteProduct({token},product.id)&&navigate("/")}>Delete</button>
          <button className= 'AddProduct' onClick={()=>navigate("/products/addProduct")}>Add Product</button>
          </div>:null }
          <div>
    ));
  }


  useEffect(() => {
    async function allProductsHandler() {
      const result = await fetchAllProducts();
      setProducts(result);
    }
    allProductsHandler();
  }, []);

  return (
    <div>
      <Navbar token={token} />
      {renderAllProducts()}
      <News />
      <Footer />
    </div>
  );
}

