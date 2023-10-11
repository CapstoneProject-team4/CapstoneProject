const db = require('./client');
const util = require('./util');
const createCatagory= async({ 
    brand
  }) => {
    try {
      const { rows: [ catagory ] } = await db.query(`
        INSERT INTO catagories("brand" )
        VALUES($1)
        RETURNING *
      `, [brand]);
  
      return catagory;
    } catch (error) {
        console.log(error);
      throw error;
    }
  }

  async function getAllCatagories() {
    try {
      const catagories = await db.query(`
        SELECT * FROM catagories
    
      `);
  
      return catagories.rows;
    } catch (error) {
        console.log(error)
      
      throw error;
    }
  }
  async function getProductByCatagoriesId(id){
    try {
      const {rows:[product]}= await db.query(`
        SELECT * FROM products
        WHERE catagories_id = $1;
      `,[id]);
      return product;
    
    } catch (error) {
      throw error;
    }
  }


  module.exports = {
    createCatagory,
    getAllCatagories,
    getProductByCatagoriesId
};