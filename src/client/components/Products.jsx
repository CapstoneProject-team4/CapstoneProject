import styled from "styled-components"


const Container = styled.div`
padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export async function fetchAllProducts() {
  try {
    const response = await fetch(
    'https://localhost:3000/api/products'
    );
    const result = await response.json();
    console.log("what",result.products);
    return result.products;
    
  
  } catch (error) {
    console.error(error);
    return error;
  }
}
function products() {
  return products.map((products) => {
      return (
          <div key={products.id} className="players">
          <h2>{products.title}</h2>
          <h4>{products.price}</h4>
          <h4>{player.description}</h4>
          <img src={products.img}/>
          <button onClick = {() => navigate(`/players/${player.id}`)}>See Details</button>
          
      </div>
      )
  });
}

useEffect(()=>{
  async function allProductsHandler(){
      const result = await fetchAllProducts()
      setPlayers(result)
      console.log("2",result)

  }
  allProductsHandler()

},[]
)
return (
  <div>
       {renderAllProducts()}
  </div>
 
  )

export default products
