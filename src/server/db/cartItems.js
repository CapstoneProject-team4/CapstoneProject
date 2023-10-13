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

  async function getAllCartItems() {
    try {
      const cartItem = await db.query(`
      SELECT products.*, cartItems.users_id AS cartItems_users_id, cartItems.products_id AS cartItems_products_id
      FROM products
      JOIN cartItems ON products.id = cartItems.products_id
      JOIN users ON cartItems.users_id = users.id
      `);
      console.log(cartItem);
      return cartItem.rows;
    } catch (error) {
        console.log(error)
      
      throw error;
    }
  }
  async function getCartItemsByUserId(id){
    try {
      const cartItem = await db.query(`
      SELECT products.*, cartItems.users_id AS cartItems_users_id, cartItems.products_id AS cartItems_products_id
      FROM products
      JOIN cartItems ON products.id = cartItems.products_id
      JOIN users ON cartItems.users_id = users.id
      WHERE users.id = $1
      `,[id]);
      return cartItem.rows;
    
    } catch (error) {
      throw error;
    }
  }
  async function deletedCartItems(user_id, product_id) {
    try {
        const { rows: [cartItem] } = await db.query(`
        DELETE FROM cartItems
        WHERE users_id = $1 AND products_id =$2
        RETURNING *;
        `, [user_id,product_id]);
        return cartItem;
    } catch (error) {
      console.log(error);
        throw error;
    }
}

async function updateCartItem(userId, productId, quantity) {
    try {
        await db.query(`
        UPDATE cartItems 
        SET quantity = $1
        WHERE users_id = $2 AND products_id = $3
        `, [quantity, userId, productId]);
    } catch (error) {
        throw error;
    }
}










module.exports = {
    createCartItems,
    getAllCartItems,
    getCartItemsByUserId,
    deletedCartItems,
    updateCartItem,

};