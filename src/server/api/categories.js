const express = require('express');
const {getAllCategories} = require('../db/categories')
const{getProductByCategoriesId} = require('../db/categories')
const categoriesRouter = express.Router();

categoriesRouter.get('/', async( req, res, next) => {
    try {
       
        const categories = await getAllCategories();
        res.send(categories);
    } catch (error) {
       console.log(error);
        next(error)
    }
});

categoriesRouter.get('/:id', async( req, res, next) => {
    try {
       
        const {id} = req.params;
        const products = await getProductByCategoriesId(id);
        res.send(products);
    } catch (error) {
      console.log(error);
        next(error)
    }
}); 









module.exports = categoriesRouter;