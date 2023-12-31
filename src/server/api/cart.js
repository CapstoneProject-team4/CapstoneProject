const express = require('express')
const cookieParser = require('cookie-parser')
const cartRouter = express.Router();
cartRouter.use(cookieParser());

const { 
  createCart,
  getAllCarts,
  getCartById,
  getCartByProductId,
  getCartByUserId,
  updateCartById,
  deleteCartById,
} = require('../db');

cartRouter.post('/:productID/:quantity', async( req, res, next) => {
  try {
      // no: set a new cookie
      const {productID} = req.params;
      const {quantity} = req.params;
      res.cookie( productID, quantity);
      res.send(res.cookie);
  } catch (error) {
     console.log(error);
      next(error)
  }
});

cartRouter.get('/', async( req, res, next) => {
  try {
      res.send(req.headers.cookie);
      console.log(req.cookies);
  } catch (error) {
     console.log(error);
      next(error)
  }
});

cartRouter.delete('/', async( req, res, next) => {
  try {
      cartdata = req.headers.cookie.split("; ");
      for (i=0; i<cartdata.length; i++){
        currentcookie=cartdata[i].substring(0, cartdata[i].search("="))
        currentcookie=currentcookie.replace(/\s/g, '');
        res.clearCookie(currentcookie);
        res.send(currentcookie);
      }
  } catch (error) {
     console.log(error);
      next(error)
  }
});

module.exports = cartRouter;