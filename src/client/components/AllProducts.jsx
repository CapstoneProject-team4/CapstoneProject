import React, { useState, useEffect } from 'react';
import { deleteProduct, fetchAllProducts } from '../api/ajaxhelper';
import { useNavigate } from 'react-router-dom';
import './AllProducts.css';
import Navbar from './Navbar';
import Footer from './Footer';
import News from './News';
import { useCart } from './CartContext';

// Display an alert for 3 seconds.
function displayAlert(text) {
    const alert = document.createElement('div');
    alert.style.position = 'fixed';
    alert.style.top = '10%';
    alert.style.left = '50%';
    alert.style.transform = 'translate(-50%, -50%)';
    alert.style.padding = '10px';
    alert.style.backgroundColor = '#fff';
    alert.style.border = '1px solid #ccc';
    alert.style.zIndex = '1000';
    alert.textContent = text;
  
    document.body.appendChild(alert);
  
    setTimeout(() => {
      document.body.removeChild(alert);
    }, 3000);
  }
  

export default function AllProducts({ token, role }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart(); // Get the dispatch function from the CartContext

  const addToCart = (product, title) => {
    // Display an alert when the button is clicked.
    displayAlert(`${title} added to cart!`);
    dispatch({ type: 'ADD_TO_CART', product });
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
        <button onClick={() => addToCart(product, product.title)}>Add to Cart</button>

        {/* Other product actions */}
        <button className='detail' onClick={() => navigate("/products/" + product.id)}>See Details</button>
        {token && role === "Admin" ?
          <div>
            <button className='edit' onClick={() => navigate("/products/" + product.id + "/edit")}>Edit Product</button>
            <button className='delete' onClick={() => deleteProduct({ token }, product.id) && navigate("/admin")}>Delete</button>
            <button className='AddProduct' onClick={() => navigate("/products/addProduct")}>Add Product</button>
          </div> : null}
      </div>
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
      <Navbar token={token} role={role} />
      {renderAllProducts()}
      <News />
      <Footer />
    </div>
  );
}
