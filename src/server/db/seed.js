const db = require('./client');
const { createUser } = require('./users');
<<<<<<< Updated upstream
=======
const {createProduct} = require('./products')
>>>>>>> Stashed changes

const users = [
  {
    name: 'Emily Johnson',
    email: 'emily@example.com',
    password: 'securepass',
  },
  {
    name: 'Liu Wei',
    email: 'liu@example.com',
    password: 'strongpass',
  },
  {
    name: 'Isabella García',
    email: 'bella@example.com',
    password: 'pass1234',
  },
  {
    name: 'Mohammed Ahmed',
    email: 'mohammed@example.com',
    password: 'mysecretpassword',
  },
  {
    name: 'John Smith',
    email: 'john@example.com',
    password: 'password123',
  },
  // Add more user objects as needed
];  

const dropTables = async () => {
    try {
        await db.query(`
        DROP TABLE IF EXISTS users;
        `)
    }
    catch(err) {
        throw err;
    }
}

const createTables = async () => {
    try{
        await db.query(`
        CREATE TABLE site_user(
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          phone_number VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL
        );
        CREATE TABLE user_payment_method(
          id SERIAL PRIMARY KEY,
          FOREIGN KEY (user_id) REFERENCES site_user(id),
          FOREIGN KEY (payment_type_id) REFERENCES payment_type(id),
          provider VARCHAR(255) NOT NULL,
          account_number VARCHAR(255) UNIQUE NOT NULL,
          expiry_date VARCHAR(255) NOT NULL,
          is_defualt VARCHAR(255) UNIQUE NOT NULL
        );
        CREATE TABLE payment_type(
          id SERIAL PRIMARY KEY,
          value VARCHAR(255) UNIQUE NOT NULL
        );
        CREATE TABLE shopping_cart(
          id SERIAL PRIMARY KEY,
          FOREIGN KEY (user_id) REFERENCES site_user(id)
        );
        CREATE TABLE shopping_cart_item(
          id SERIAL PRIMARY KEY,
          FOREIGN KEY (cart_id) REFERENCES shopping_cart(id),
          FOREIGN KEY (product_item_id) REFERENCES product_item(id),
          qty VARCHAR(255) NOT NULL
        );
        CREATE TABLE product_item(
          id SERIAL PRIMARY KEY,
          FOREIGN KEY (product_id) REFERENCES product(id),
          SKU VARCHAR(255) NOT NULL,
          qty_in_stock VARCHAR(255) NOT NULL,
          product_image VARCHAR(255) UNIQUE NOT NULL,
          price VARCHAR(255) NOT NULL
        );
        CREATE TABLE product(
          id SERIAL PRIMARY KEY,
          FOREIGN KEY (category_id) REFERENCES product_category(id),
          name VARCHAR(255) UNIQUE NOT NULL,
          description VARCHAR(255) NOT NULL,
          product_image VARCHAR(255) UNIQUE NOT NULL
        );
        CREATE TABLE user_address(
          id SERIAL PRIMARY KEY,
          FOREIGN KEY (user_id) REFERENCES site_user(id),
          FOREIGN KEY (address_id) REFERENCES address(id),
          is_defualt VARCHAR(255) UNIQUE NOT NULL
        );
        CREATE TABLE address(
          id SERIAL PRIMARY KEY,
          unit_number VARCHAR(255) NOT NULL,
          street_number VARCHAR(255) NOT NULL,
          address_line1 VARCHAR(255) NOT NULL,
          address_line2 VARCHAR(255) NOT NULL,
          city VARCHAR(255) NOT NULL,
          region VARCHAR(255) NOT NULL,
          postal_code VARCHAR(255) NOT NULL,
          FOREIGN KEY (country_id) REFERENCES country(id)
        );
        CREATE TABLE country(
          id SERIAL PRIMARY KEY,
          country_name VARCHAR(255) NOT NULL
        )`)
    }
    catch(err) {
        throw err;
    }
}

// CREATE TABLE site_user(
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(255) DEFAULT 'name',
//   email VARCHAR(255) UNIQUE NOT NULL,
//   password VARCHAR(255) NOT NULL

// CREATE TABLE Orders (
//   OrderID int NOT NULL,
//   OrderNumber int NOT NULL,
//   PersonID int,
//   PRIMARY KEY (OrderID),
//   FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
// ); 

const insertUsers = async () => {
  try {
    for (const user of users) {
      await createUser({name: user.name, email: user.email, password: user.password});
    }
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
};

const seedDatabase = async () => {
    try {
        db.connect();
        await dropTables();
        await createTables();
        await insertUsers();
    }
    catch (err) {
        throw err;
    }
    finally {
        db.end()
    }
}

seedDatabase()
