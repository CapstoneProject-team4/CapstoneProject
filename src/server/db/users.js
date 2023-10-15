const db = require('./client')
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

const createUser = async({ role, name='first last', email, password, billingaddress, phonenumber}) => {
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    try {
        const { rows: [user ] } = await db.query(`
        INSERT INTO users(role, name, email, password,billingaddress,phonenumber)
        VALUES($1, $2, $3, $4,$5,$6)
        ON CONFLICT (email) DO NOTHING
        RETURNING *`, [role, name, email, hashedPassword,billingaddress,phonenumber]);

        return user;
    } catch (err) {
        throw err;
    }
}

async function getAllUser() {
    try {
      const users = await db.query(`
        SELECT * FROM users
    
      `);
  
      return users.rows;
    } catch (error) {
        console.log(error);
      throw error;
    }
  }

  async function getUserById(id){
    try {
      const {rows:[user]}= await db.query(`
        SELECT * FROM users
        WHERE id = $1;
      `,[id]);
      return user;
    
    } catch (error) {
      throw error;
    }
  }

const getUser = async({email, password}) => {
    if(!email || !password) {
        return;
    }
    try {
        const user = await getUserByEmail(email);
        if(!user) return;
        const hashedPassword = user.password;
        const passwordsMatch = await bcrypt.compare(password, hashedPassword);
        if(!passwordsMatch) return;
        delete user.password;
        return user;
    } catch (err) {
        throw err;
    }
}

const getUserByEmail = async(email) => {
    try {
        const { rows: [ user ] } = await db.query(`
        SELECT * 
        FROM users
        WHERE email=$1;`, [ email ]);

        if(!user) {
            return;
        }
        return user;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUser,
    getUser,
    getUserByEmail,
    getAllUser,
    getUserById
};