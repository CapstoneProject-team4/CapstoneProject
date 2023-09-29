import React from 'react'
import Product from './product'; 


export const Shop = () => {
    return (
      <div className="shop">
        <div className="shopTitle">
          <h1>2305-FTB-PT-WEB-PT's Marketplace</h1>
        </div>
  
        <div className="products">
          {Product.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    );
  };
  