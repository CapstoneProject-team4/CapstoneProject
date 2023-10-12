

const Products_Api_Url= 'http://localhost:3000/api/products'

export async function fetchAllProducts() {
      try {
        const response = await fetch(
          Products_Api_Url
        );
        const result = await response.json();
        console.log("what",result);
        return result;
        
      
      } catch (error) {
        console.error(error);
        return error;
      }
    }
  
   export async function fetchSingleProduct (id){ 
    console.log(id,"ajax fetch prodcut") 
      try {
        const response = await fetch(
          `${Products_Api_Url}/${id}`
        )
          const product = await response.json();
          console.log ("issue",product)
          return product;
      } catch (err) {
          console.error( err);
      }
  };
  
  /* export async function fetchSingleProduct(id) {  
    try {
      const product = await fetchAllProducts();
      const SingleProduct = product.filter(product => { 
       
        return product._id === id;
  
      })
      return SingleProduct[0];
    } catch (err) {
        console.error( err);
    }
  };
  */



  