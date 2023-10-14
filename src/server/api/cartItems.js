const express = require('express');
const { getAllCartItems, getCartItemsByUserId, createCartItems, deletedCartItems ,updateCartItem, getCartItemsByTwoId} = require('../db');
const cartItemsRouter = express.Router();
const {requireUser, requiredNotSent} = require('./utils')



cartItemsRouter.get('/',async( req, res, next) => {
    try {
        
        const cartItems = await getAllCartItems();
        res.send(cartItems);
    } catch (error) {
       console.log(error);
        next(error)
    }
});
// GET /api/users/:user_id   This is for user to check the items in the cart
cartItemsRouter.get('/users/:id',requireUser,async( req, res, next) => {
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

//  POST  /api/users/:userId/products This api uses for adding products to cart
cartItemsRouter.post('/users/:id',requireUser,requiredNotSent({requiredParams: ['products_id','quantityincart']}), async (req, res, next) => {
    try {
      const usersId = req.params;
      const {products_id, quantityincart} = req.body;
      const existingProduct = await getCartItemsByTwoId(usersId.id,products_id);
      console.log()
      if(existingProduct) {
        next({
          name: 'Error',
          message: `An product already exists`
        });
      } else {
        const users_id = usersId.id;
        const createdProduct = await createCartItems({users_id,products_id,quantityincart});
       
        if(createdProduct) {
          res.send(createdProduct);
        } else {
          next({
            name: 'FailedToCreate',
            message: 'There was an error creating your product'
          })
        }
      }
    } catch (error) {
      console.log(error)
      next(error);
    }
  });

cartItemsRouter.patch('/users/:id/products', requireUser, async (req, res, next) => {
    try {
        const usersId = req.params;
        const users_id = usersId.id;
        console.log(users_id,"idd")
        const {products_id,quantityincart} = req.body;
        await updateCartItem(users_id, products_id, quantityincart);
        
    } catch (error) {
        console.error(error);
        next(error);
    }
});


//DELETE /api/users/:users_id/products/:products_id This apis uses for removing the item from cart.
cartItemsRouter.delete('/users/:users_id/products/:products_id',requireUser, async (req, res, next) => {
    try {
        const user_id = req.params.users_id;
        const product_id = req.params.products_id;
        await deletedCartItems(user_id, product_id);
        res.send({ message: 'Item removed from cart successfully' });
    } catch (error) {
        console.error(error);
        next(error);
    }
});


module.exports = cartItemsRouter;