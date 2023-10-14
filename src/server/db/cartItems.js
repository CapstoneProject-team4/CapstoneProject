const db = require('./client');

const createCart = async({ products, userId }) => {
    try {
        const { rows: [ cart ] } = await db.query(`
        INSERT INTO cart("products", "userId")
        VALUES($1, $2)
        RETURNING *`, [products, userId]);

        return cart;
    } catch (err) {
        throw err;
    }
}

const getAllCarts = async() => {
    try {
        const { rows: carts } = await db.query(`
        SELECT *
        FROM cart`);

        if(!carts) {
            console.error("No Carts");
            return;
        }
        return carts;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const getCartById = async(id) => {
    try {
        const { rows: [ cart ] } = await db.query(`
        SELECT *
        FROM cart
        WHERE id=$1;`, [ id ]);

        if(!cart) {
            console.error("No Cart");
            return;
        }
        return cart;
    } catch (err) {
        throw err;
    }
}


const getCartByProductId = async(productId) => {
    try {
        const { rows: [ cart ] } = await db.query(`
        SELECT *
        FROM cart
        WHERE "productId"=$1;`, [ productId ]);

        if(!cart) {
            console.error("No Carts match ProductId");
            return;
        }
        return cart;
    } catch (err) {
        throw err;
    }
}

const getCartByUserId = async(userId) => {
    try {
        console.log("getCartByUserId", userId);

        const { rows: [ cart ] } = await db.query(`
        SELECT *
        FROM cart
        WHERE "userId"=$1;`, [ userId ]);

        if(!cart) {
            console.error("No Carts match UserId");
            return;
        }
        console.log("getCartByUserId", cart);
        return cart;
    } catch (err) {
        console.log("getCartByUserId error", err);
        throw err;
    }
}

const updateCartById = async(id, fields = {}) => {
    const setString = Object.keys(fields).map((key, index) => `"${key}"=$${index + 1}`).join(', ');
    console.log("updateCartById", setString);
    if (setString.length === 0) {
        return;
    }
    try {
        const { rows: [cart] } = await db.query(`
            UPDATE cart
            SET ${setString}
            WHERE id=${id}
            RETURNING *;
        `, Object.values(fields));
        return cart;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteCartById = async(id) => {
    try {
        const { rows: [ cart ] } = await db.query(`
        DELETE FROM cart
        WHERE id=$1
        RETURNING *;`, [ id ]);

        if(!cart) {
            return;
        }
        return cart;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createCart,
    getAllCarts,
    getCartById,
    getCartByProductId,
    getCartByUserId,
    updateCartById,
    deleteCartById,
};

// const createCartItems= async({ 
//    users_id,
//    products_id,
//    quantity,
//   }) => {
//     try {
//         const { rows: [ cartItem ] } = await db.query(`
//         INSERT INTO cartItems("users_id", "products_id", "quantity") 
//         VALUES($1, $2, $3)
//         RETURNING *
//       `, [ users_id, products_id, quantity,]);
  
//       return cartItem;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async function getAllCartItems() {
//     try {
//       const cartItem = await db.query(`
//       SELECT products.*, cartItems.users_id AS cartItems_users_id, cartItems.products_id AS cartItems_products_id
//       FROM products
//       JOIN cartItems ON products.id = cartItems.products_id
//       JOIN users ON cartItems.users_id = users.id
//       `);
//       console.log(cartItem);
//       return cartItem.rows;
//     } catch (error) {
//         console.log(error)
      
//       throw error;
//     }
//   }
//   async function getCartItemsByUserId(id){
//     try {
//       const cartItem = await db.query(`
//       SELECT products.*, cartItems.users_id AS cartItems_users_id, cartItems.products_id AS cartItems_products_id
//       FROM products
//       JOIN cartItems ON products.id = cartItems.products_id
//       JOIN users ON cartItems.users_id = users.id
//       WHERE users.id = $1
//       `,[id]);
//       return cartItem.rows;
    
//     } catch (error) {
//       throw error;
//     }
//   }
//   async function deletedCartItems(user_id, product_id) {
//     try {
//         const { rows: [cartItem] } = await db.query(`
//         DELETE FROM cartItems
//         WHERE users_id = $1 AND products_id =$2
//         RETURNING *;
//         `, [user_id,product_id]);
//         return cartItem;
//     } catch (error) {
//       console.log(error);
//         throw error;
//     }
// }

// async function updateCartItem(userId, productId, quantity) {
//     try {
//         await db.query(`
//         UPDATE cartItems 
//         SET quantity = $1
//         WHERE users_id = $2 AND products_id = $3
//         `, [quantity, userId, productId]);
//     } catch (error) {
//         throw error;
//     }
// }

// module.exports = {
//     createCartItems,
//     getAllCartItems,
//     getCartItemsByUserId,
//     deletedCartItems,
//     updateCartItem,

// };