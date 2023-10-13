import React, { useEffect, useState } from 'react';


const Container = styled.div`
padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
   <Container>
   {popularProducts.map((item) => (
    <Product item={item} key={item.id} />
   ))}
   </Container>
  )
}

export default Products
