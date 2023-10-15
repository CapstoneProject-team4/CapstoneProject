import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialCartState = []; // Initialize your cart with an empty array

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.id === action.product.id);

      if (existingItem) {
        // If the product already exists in the cart, increment its quantity
        return state.map(item => {
          if (item.id === action.product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        // If the product is not in the cart, add it as a new item
        return [...state, { ...action.product, quantity: 1 }];
      }
    // ... Other cases for updating and removing items
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