const express = require('express')
const productsRouter = express.Router();

const {
    getAllProducts, getProductById,updateProduct, createProduct, deleteProduct, getProductByTitle,
} = require('../db');
const { requireUser, requiredNotSent, requireAdmin } = require('./utils');

productsRouter.get('/', async( req, res, next) => {
  try {
     
      const products = await getAllProducts();
      res.send(products);
  } catch (error) {
     console.log(error);
      next(error)
  }
});


productsRouter.get('/:id', async( req, res, next) => {
console.log(req.params)
  try {
     
      const {id} = req.params;
      console.log('ID:', id, typeof id);
      const products = await getProductById(id);
      res.send(products);
  } catch (error) {
    console.log(error);
      next(error)
  }
}); 


productsRouter.post('/',requireAdmin,requiredNotSent({requiredParams: ['title', 'img','brand', 'price','quantity','color','size','description','categories_id']}), async (req, res, next) => {
  try {
    const {title, img, brand, price, quantity,color,size,description,categories_id} = req.body;
    const existingProduct = await getProductByTitle(title);
    if(existingProduct) {
      next({
        name: 'NotFound',
        message: `An product with title ${title} already exists`
      });
    } else {
      const createdProduct = await createProduct({title, img, brand, price,quantity,color,size, description, categories_id});
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




productsRouter.patch('/:id',requireAdmin,requiredNotSent({requiredParams: ['title', 'img','brand', 'price','quantity','color','size','description','categories_id']}), async (req, res, next) => {
    try {
      const {id} = req.params;
      const existingProduct = await getProductById(id);
      if(!existingProduct) {
        next({
          name: 'NotFound',
          message: `No Product by ID ${id}`
        });
      } else {
        const {title, img,brand,price,quantity,color,size,description,categories_id} = req.body;
        const updateProd = await updateProduct({id: id, title, img,brand,price,quantity,color,size,description,categories_id})
        if(updateProd) {
          res.send(updateProd);
        } else {
          next({
            name: 'FailedToUpdate',
            message: 'There was an error updating your product'
          })
        }
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
  
  productsRouter.delete('/:id', requireAdmin, async (req, res, next) => {
    try {
      const {id} = req.params;
      const productToDelete = await getProductById(id);
      if(!productToDelete) {
        next({
          name: 'NotFound',
          message: `No product by ID ${id}`
        })
      }else {
        const deletedProduct = await deleteProduct(id)
        res.send({success: true, ...deletedProduct});
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });











module.exports = productsRouter;