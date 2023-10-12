const express = require('express');
const { getAllCartItems, getCartItemsByUserId, createCartItems, deletedCartItems } = require('../db');
const cartItemsRouter = express.Router();
const {requireUser, requiredNotSent} = require('./utils')


cartItemsRouter.get('/', requireUser,async( req, res, next) => {
    try {
       
        const cartItems = await getAllCartItems();
        res.send(cartItems);
    } catch (error) {
       console.log(error);
        next(error)
    }
});
cartItemsRouter.get('/users/:id', async( req, res, next) => {
    try {
       
        const {id} = req.params;
        console.log('ID:', id, typeof id);
        const cartItems = await getCartItemsByUserId(id);
        res.send(cartItems);
    } catch (error) {
      console.log(error);
        next(error)
    }
}); 



cartItemsRouter.post('/',requireUser,requiredNotSent({requiredParams: [ 'users_id', 'products_id','quantity']}), async (req, res, next) => {
    try {
      const {users_id, products_id,quantity} = req.body;
      const existingCartItems = await getAllCartItems();
      if(!existingCartItems) {
        next({
          name: 'NotFound',
          message: `Cart is empty`
        });
      } else {
        const createdProduct = await createCartItems({users_id, products_id,quantity});
        if(createdProduct) {
          res.send(createdProduct);
        } else {
          next({
            name: 'FailedToCreate',
            message: 'There was an error adding items to your cart'
          })
        }
      }
    } catch (error) {
      console.log(error)
      next(error);
    }
  });
  
  cartItemsRouter.delete('/products/:id', requireUser, async (req, res, next) => {
    try {
      const {id} = req.params;
      const cartItemsToDelete = await getCartItemsByUserId(id);
      if(!cartItemsToDelete) {
        next({
          name: 'NotFound',
          message: `No product by ID ${id}`
        })
      }else {
        const deletedProduct = await deletedCartItems(id)
        res.send({success: true, ...deletedProduct});
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });









module.exports = cartItemsRouter;