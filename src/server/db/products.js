const db = require('./client');
const util = require('./util');
const createProduct= async({ 
    title,
    img,
    brand,
    price,
    description
  }) => {
    try {
      const { rows: [ product ] } = await db.query(`
        INSERT INTO products("title", "img", "brand", "price", "description") 
        VALUES($1, $2, $3, $4, $5)
        RETURNING *
      `, [title, img, brand, price, description]);
  
      return product;
    } catch (error) {
      throw error;
    }
  }
  async function getAllProducts() {
    try {
      const product = await db.query(`
        SELECT * FROM products
    
      `);
  
      return product.rows;
    } catch (error) {
      throw error;
    }
  }

  async function getProductById(id){
    try {
      const {rows:[product]}= await db.query(`
        SELECT * FROM products
        WHERE id = $1;
      `,[id]);
      return product;
    
    } catch (error) {
      throw error;
    }
  }

  async function updateProduct({id, ...fields}) {
    try {
      const toUpdate = {}
      for(let column in fields) {
        if(fields[column] !== undefined) toUpdate[column] = fields[column];
      }
      let product;
      if (util.dbFields(fields).insert.length > 0) {
        const {rows} = await db.query(`
            UPDATE products 
            SET ${ util.dbFields(toUpdate).insert }
            WHERE id=${ id }
            RETURNING *;
        `, Object.values(toUpdate));
        product = rows[0];
        return product;
      }
    } catch (error) {
      throw error;
    }
  }

  async function deleteProduct(id) {
    try {
        const { rows: [product] } = await db.query(`
        DELETE FROM products
        WHERE id = $1
        RETURNING *;
        `, [id]);
        return product;
    } catch (error) {
      console.log(error);
        throw error;
    }
}

  module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
   
    
};