import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialCartState = []; // Initialize your cart with an empty array

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Logic to add a product to the cart
      return [...state, action.product];
    case 'REMOVE_FROM_CART':
      // Logic to remove a product from the cart
      return state.filter(item => item.id !== action.id);
    case 'UPDATE_QUANTITY':
      // Logic to update the quantity of an item in the cart
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, quantity: action.quantity };
        }
        return item;
      });
    case  'CLEAR_CART':
      //clear the cart by returning an empty erray
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};