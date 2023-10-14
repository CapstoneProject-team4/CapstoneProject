

const Products_Api_Url= 'http://localhost:3000/api/products'
const Users_Api_Url = 'http://localhost:3000/api/users'

export async function fetchAllProducts() {
      try {
        const response = await fetch(
          Products_Api_Url
        );
        const result = await response.json();
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
  





  