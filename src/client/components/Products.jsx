import React, { useEffect, useState } from 'react';



const Products = () => {
  const [products, setProducts] = useState([]);

  async function fetchAllProducts() {
    try {
      const response = await fetch(
      'http://localhost:3000/api/products'
      );
      const result = await response.json();
      console.log("what",result.products);
      return result;
  
  
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await fetchAllProducts();
        setProducts(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
          <img src={product.img} alt={product.title} />
          <button onClick={() => navigate(`/products/${product.id}`)}>See Details</button>
        </div>
      ))}
    </div>
  );
};

export default Products;