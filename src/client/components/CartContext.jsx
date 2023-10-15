import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialCartState = []; // Initialize your cart with an empty array

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the product is already in the cart
      const existingItem = state.find(item => item.id === action.product.id);

      if (existingItem) {
        // If the product already exists, update its quantity
        return state.map(item => {
          if (item.id === existingItem.id) {
            return { ...item, quantity: item.quantity + action.product.quantity };
          }
          return item;
        });
      } else {
        // If the product is not in the cart, add it
        return [...state, action.product];
      }

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

    case 'CLEAR_CART':
      // Clear the cart by returning an empty array
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