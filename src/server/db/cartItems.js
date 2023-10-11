const db = require('./client');


const createCartItems= async({ 
   users_id,
   products_id,
   quantity,
  }) => {
    try {
      const { rows: [ cartItem ] } = await db.query(`
        INSERT INTO cartItems("users_id", "products_id", "quantity") 
        VALUES($1, $2, $3)
        RETURNING *
      `, [ users_id, products_id, quantity,]);
  
      return cartItem;
    } catch (error) {
      throw error;
    }
  }













module.exports = {
    createCartItems
};