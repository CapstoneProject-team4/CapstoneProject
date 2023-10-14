import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import React, { useState, useEffect } from "react"; 
import {useNavigate} from 'react-router-dom'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { updateCart } from '../api/CartsAjaxHelper';
import { postCart } from '../api/CartsAjaxHelper';
import { fetchCartByUserId, deleteCart } from '../api/CartsAjaxHelper';

const Container = styled.div``;


const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #e75480; /* Pink color */
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#e75480" : "transparent"}; /* Pink color for filled button */
  color: ${(props) => props.type === "filled" && "white"};
  border-radius: 20px; /* Rounded corners */
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px; /* Rounded corners */
  border: 1px solid #ccc; /* Add border for visual appeal */
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #e75480; /* Pink color */
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 20px; /* Rounded corners */
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
  outline: none; /* Remove default button outline */

  &:hover {
    background-color: #d24d75; /* Darker pink on hover */
  }
`;

// function productMatch(product, quantity) {
//   // return true if any of the fields you want to check against include the text
//   // strings have an .includes() method
//   if (product.id != null) {
//     return true;
//   } 
//   return false;
// }

// const filteredProducts = products.filter((product) => productMatch(product, quantity));
// const productsToDisplay = searchTerm.length ? filteredProducts : products;
// const[products,setProducts]=useState([])



function Cart({ cart, setCart, token, handleAmountChange, userId }) {
  const [price, setPrice] = useState(0);

  const navigate = useNavigate()

  function addToCart(product) {
    // var cartIsEmpty = cartWrapper.hasClass('empty');
    //get localstorage cart product list
    getProductsFromLocalStorage();
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

  

  function getProductsFromLocalStorage() {
    const cs = localStorage.getItem('products');
    if (cs === null) {
      addProduct();
    } else {
      $.each(cs.products, function(key, value) {
        cartList.prepend($('<li class="product"><div class="product-image"><a href="#0"><img src="'+ value.image +'" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + value.name + '</a></h3><span class="price">${value.price}</span><div class="actions"><a href="#0" class="delete-item">Delete</a><a class="delete-item">' + value.size + '</a><a class="delete-item">' + value.color + '</a><div class="quantity"><label for="cd-product-' + value.productId + '">Qty</label><span class="select"><select id="cd-product-' + value.productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>'));
      });
    }
  }

  // function renderAllProducts(){
  //   return productsToDisplay.map((product)=>{
  
  //        return (
  //            <div className='allProducts' key={product.id}>
  //                <h4 className='h4'>{product.title}</h4>
  //                <h4>{product.brand}</h4>
  //                <h4>{product.price}</h4>
  //                <h4>{product.description}</h4>
  //                <img className='img' src={product.img} alt="img"/>
  //             </div>
  //        )
  // })};

  const handleRemove = async (id) => {
      const arr = cart.products.filter((item) => item.id !== id);
      const cartObj = {
          id: cart.id,
          products: arr,
          userId: cart.userId
      }
      setCart(cartObj);

      await updateCart(token, cartObj);

      handlePrice();
  };

  const handlePrice = () => {
      if (cart && cart.products) {
          let ans = 0;
          cart.products.map((item) => (ans += item.amount * item.price));
          setPrice(ans);
      }

  };

  const getCart = async (token, userId) => {
      const _cart = await postCart({products: [], userId: userId}, token);
      setCart(_cart);
    }

  const showCart = async () => {
    fetch('http://localhost:3000/cart/', {
      method: 'GET'
    }).then(response => console.log("Response status: ", response.status));
    };
  


  const handleCheckout = async () => {
      // Confirm purchase
      console.log(showCart());
    if (confirm("Are you sure you wish to complete your purchase?")) {
      // deleteCart(token, id);
      // await getCart(token, userId);
      fetch('http://localhost:3000/api/cart/', {
        method: 'DELETE',
        credentials: 'include'
        //other options
    }).then(response => console.log("Response status: ", response.status));
      alert("Purchase completed!");
      navigate("/");

    } else {
      
    }
  }
  
  useEffect(() => {
      handlePrice();
  });

  return (
      <div className="cart">
          {cart && cart.products ? cart.products.map((item) => (
              <div className="cart_box" key={item.id}>
                  <div className="cart_img">
                      <img className="cart-img" height="300px" src={item.imgUrl} alt="" />
                      <p>{item.title}</p>
                  </div>

                  <div className="cart-btns">
                      <button onClick={() => handleAmountChange(item, 1)}>+</button>
                      <button>{item.amount}</button>
                      <button onClick={() => handleAmountChange(item, -1)}>-</button>

                      <br></br>
                      <span>Item Price: ${item.price}</span>
                      <br></br>
                     
                      <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
              </div>
          )) : null}
          <div className="total">
              <span>Total Price of your Cart </span>
              <span>${price.toFixed(2)}</span>
          </div>
          <br></br>
          <div className="cart-buttons">
              <button
                  className="cart-shopping-button"
                  onClick={() => { navigate("/products") }}>Continue Shopping</button>
              <button
                  className="cart-checkout-button"
                  onClick ={()=> {handleCheckout()}}>Checkout</button>
          </div>
      </div>
  );
};

export default Cart;

// const Cart = () => {
//   const navigate = useNavigate();

//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Headphones",
//       price: 30,
//       quantity: 2,
//       color: "black",
//       img:"https://i.pinimg.com/736x/d9/c6/97/d9c697e5d3fc891bd3e01cb6d1be5821.jpg"
//     },
//     {
//       id: 2,
//       name: "Headphones",
//       price: 20,
//       quantity: 1,
//       color: "gray",
//       img:" https://i.pinimg.com/736x/d9/c6/97/d9c697e5d3fc891bd3e01cb6d1be5821.jpg"
//     },
//   ]);

//   // Define function to update quantity
//   const updateQuantity = (id, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   // Define function to remove item
//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   // Calculate total price
//   const total = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   // Confirm purchase
//   const confirmation = () => {
//     if (confirm("Are you sure you wish to complete your purchase?")) {
//       alert("Purchase completed!");
//       navigate("/");
//     } else {
      
//     }
//   }

//   return (
//     <Container>
//       <Navbar />
//       <Wrapper>
//         <Title>YOUR BAG</Title>
//         <Top>
//           <TopButton>CONTINUE SHOPPING</TopButton>
//           <TopButton onClick={() => confirmation()} type="filled">CHECKOUT NOW</TopButton>
//         </Top>
//         <Bottom>
//           <Info>
//             {/* {cartItems.map((item) => ( */}
//             {cartItems.map((item) => (
//                 <Product key={item.id}>
//                 <ProductDetail>
//                   <Image src={item.img} />
//                   <Details>
//                     <ProductName>
//                       <b>Product:</b> {item.name}
//                     </ProductName>
//                     <ProductId>
//                       <b>ID:</b> {item.id}
//                     </ProductId>
//                     <ProductColor color={item.color} />
//                   </Details>
//                 </ProductDetail>
//                 <PriceDetail>
//                   <ProductAmountContainer>
//                     <Remove
//                       onClick={() =>
//                         updateQuantity(item.id, item.quantity - 1)
//                       }
//                     />
//                     <ProductAmount>{item.quantity}</ProductAmount>
//                     <Add
//                       onClick={() =>
//                         updateQuantity(item.id, item.quantity + 1)

//                       }
//                     />
//                   </ProductAmountContainer>
//                   <ProductPrice>
//                     $ {item.price * item.quantity}
//                   </ProductPrice>
//                   <Remove onClick={() => removeFromCart(item.id)} />
//                 </PriceDetail>
//               </Product>
//             ))}
//             <Hr />
//             <Summary>
//               <SummaryTitle>ORDER SUMMARY</SummaryTitle>
//               <SummaryItem>
//                 <SummaryItemText>Subtotal</SummaryItemText>
//                 <SummaryItemPrice>$ 80</SummaryItemPrice>
//               </SummaryItem>
//               <SummaryItem>
//               <SummaryItemText>Estimated Shipping</SummaryItemText>
//               <SummaryItemPrice>$ 5.90</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Shipping Discount</SummaryItemText>
//               <SummaryItemPrice>$ -5.90</SummaryItemPrice>
//             </SummaryItem>
//               <SummaryItem type="total">
//                 <SummaryItemText>Total</SummaryItemText>
//                 <SummaryItemPrice>$ {total}</SummaryItemPrice>
//               </SummaryItem>
//               <Button onClick ={()=> confirmation()} >CHECKOUT NOW</Button>
//             </Summary>
//           </Info>
//         </Bottom>
//       </Wrapper>
//       <Footer />
//     </Container>
//   );
// };

// export default Cart;