import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useCart } from '../components/CartContext'
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #e75480;
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
    props.type === "filled" ? "#e75480" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border-radius: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div``;
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
  justify: space-around;
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
  border-radius: 20px;
  border: 1px solid #ccc;
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
  background-color: #e75480;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
  outline: none;
  &:hover {
    background-color: #d24d75;
  }
`;


const Cart = ({ token, role }) => {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  
  // Function to update the cart, remove items, etc.
  const updateQuantity = (id, newQuantity) => {
    console.log('Updating quantity:', id, newQuantity);
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity: newQuantity });
  };

  const removeFromCart = (id) => {
    console.log('Removing from cart:', id);
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };
  
  // Calculate price
  const preTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = (Math.ceil(preTotal * 100)) / 100;
  const preShipping = cart.reduce((acc, item) => acc + 5.99 * item.quantity, 0);
  const shipping = (Math.ceil(preShipping * 100)) / 100;
  const preDiscount = cart.reduce((acc, item) => acc - 1.00 * item.quantity, 0);
  const discount = (Math.ceil(preDiscount * 100)) / 100;
  const preActualTotal = preTotal-preShipping-preDiscount;
  const actualTotal = (Math.ceil(preActualTotal * 100)) / 100;

  const confirmation = (token) => {
    if (confirm("Are you sure you wish to complete your purchase?")) {
      // deleteCart(token, id);
      // await getCart(token, userId);
    //   fetch('http://localhost:3000/api/cart/', {
    //     method: 'DELETE',
    //     credentials: 'include'
    //     //other options
    // })
    // .then(response => console.log("Response status: ", response.status));
    console.log(token,"sjs")
      if(token){
      alert("Purchase completed!");
      dispatch({ type: 'CLEAR_CART'}); // Dispatch the action to clear the cart
      navigate("/");
      } else{
        alert("You need to log in first before you checkout")
      }
    }
  };

  return (
    <Container>

      <Navbar token={token} role={role}/>

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => navigate("/products")}>CONTINUE SHOPPING</TopButton>
          <TopButton onClick={()=> confirmation(token)} type="filled">
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.map((item) => (
              <Product key={item.id}>
                <ProductDetail>
                  <Image src={item.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.name}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {item.id}
                    </ProductId>
                    <ProductColor color={item.color} />
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove onClick={() => updateQuantity(item.id, item.quantity - 1)} />
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <Add onClick={() => updateQuantity(item.id, item.quantity + 1)} />
                  </ProductAmountContainer>
                  <ProductPrice>$ {(item.price * item.quantity)}</ProductPrice>
                  <Button onClick={() => removeFromCart(item.id)}>Remove from Cart </Button>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ {shipping}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ {discount}</SummaryItemPrice>
            </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {actualTotal}</SummaryItemPrice>
              </SummaryItem>
              <Button onClick ={()=> confirmation(token)} >CHECKOUT NOW</Button>
            </Summary>
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;