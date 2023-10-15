const BASE_URL = 'http://localhost:3000/api';

export const fetchCarts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cart`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export const fetchCartById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/cart/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}

export const fetchCartByUserId = async (id, token) => {
  try {
      const response = await fetch(`${BASE_URL}/cart/user/${id}`, {
          headers: {
              'Content-Type': 'application/json',
              'Authentication': `Bearer ${token}`
          }
      });
      const result = await response.json();
      console.log(result);
      return result;
  } catch (err) {
      console.error(err);
  }
}

export const postCart = async ({ products, userId }, token) => {
    try {
        const response = await fetch(`${BASE_URL}/cart/newcart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                                   products,
                                   userId
                                  })
        });
        const result = await response.json();
        console.log("post cart response: ", result);
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCart = async (token, cartObj) => {
    try {
      const UPDATE_CART_URL = `${BASE_URL}/cart/${cartObj.id}`;
      console.log("Update post url: ", UPDATE_CART_URL);
      const response = await fetch(UPDATE_CART_URL, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            products: cartObj.products,
            userId: cartObj.userId
        })
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  export const deleteCart = async (token, id) => {
    try {
      const response = await fetch(`${BASE_URL}/cart/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  const Products_Api_Url= 'http://localhost:3000/api/products'
// const Users_Api_Url = 'http://localhost:3000/api/users'
// const CookieURL = 'http://localhost:3000/api/cart'

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
  console.log(id,"ajax fetch product") 
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

// export async function fetchCookie() {
//   try {
//     const response = await fetch(
//       `${CookieURL}/${id}`
//     );
//     const result = await response.json();
//     return result;
    
  
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// }

// export async function addToCookie(id, quantity) {
//   try {
//     const response = await fetch(
//       `${CookieURL}/${id}/${quantity}`, {
//         method: "POST",
//         body: JSON.stringify({
//           post:{
//             productID: postObj.id,
//             quantity: postObj.quantity
//           }
//         })
//       }
//     );
//     const result = await response.json();
//     return result;
    
  

  export async function deleteProduct({token},id)
  {
    try {
      const response = await fetch(`${Products_Api_Url}/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      if(result){
        alert("Delete Successfully!")
      }
      return result
    } catch (err) {
      console.error();
    }
  }  
  
