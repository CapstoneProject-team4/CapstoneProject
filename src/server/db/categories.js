const db = require('./client');
const util = require('./util');
const createCategory= async({ 
    brand
  }) => {
    try {
      const { rows: [ category ] } = await db.query(`
        INSERT INTO categories("brand" )
        VALUES($1)
        RETURNING *
      `, [brand]);
  
      return category;
    } catch (error) {
        console.log(error);
      throw error;
    }
  }

  async function getAllCategories() {
    try {
      const categories = await db.query(`
        SELECT * FROM categories
    
      `);
  
      return categories.rows;
    } catch (error) {
        console.log(error)
      
      throw error;
    }
  }
  async function getProductByCategoriesId(id){
    try {
      const {rows:[product]}= await db.query(`
        SELECT * FROM products
        WHERE categories_id = $1;
      `,[id]);
      return product;
    
    } catch (error) {
      throw error;
    }
  }


  module.exports = {
    createCategory,
    getAllCategories,
    getProductByCategoriesId
};