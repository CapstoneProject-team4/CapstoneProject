
const db = require('./client');
const util = require('./util');

const createCartItems= async({users_id,products_id,quantityincart}) => {
    try {
        const { rows: [ cartItem ] } = await db.query(`
        INSERT INTO cartItems ("users_id", "products_id","quantityincart") 
        VALUES($1, $2, $3)
        RETURNING *
      `, [users_id,products_id,quantityincart]);
  
      return cartItem;
    } catch (error) {
      throw error;
    }
  }

  async function getAllCartItems() {
    try {
      const cartItem = await db.query(`
      SELECT products.*, cartItems.users_id AS cartItems_users_id,cartItems.quantityincart AS cartItems_quantityincart, cartItems.products_id AS cartItems_products_id
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
  async function getCartItemsByTwoId(id,product_id){
    try {
      const {rows:[product]}= await db.query(`
      SELECT products.*,cartItems.quantityincart AS cartItems_quantityincart,cartItems.users_id AS cartItems_users_id, cartItems.products_id AS cartItems_products_id
      FROM products
      JOIN cartItems ON products.id = cartItems.products_id
      JOIN users ON cartItems.users_id = users.id
      WHERE users.id = $1 AND products_id = $2
      `,[id,product_id]);
      return product;
    
    } catch (error) {
      throw error;
    }
  }
  async function getCartItemsByUserId(id){
    try {
      const cartItem = await db.query(`
      SELECT products.*,cartItems.quantityincart AS cartItems_quantityincart, cartItems.id AS cartItems_id,cartItems.users_id AS cartItems_users_id, cartItems.products_id AS cartItems_products_id
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


async function updateCartItem({id, ...fields}) {
  try {
    const toUpdate = {}
    for(let column in fields) {
      if(fields[column] !== undefined) toUpdate[column] = fields[column];
    }
    let product;
    if (util.dbFields(fields).insert.length > 0) {
      const {rows} = await db.query(`
          UPDATE cartItems 
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









module.exports = {
    createCartItems,
    getAllCartItems,
    getCartItemsByUserId,
    deletedCartItems,
    updateCartItem,
    getCartItemsByTwoId

};