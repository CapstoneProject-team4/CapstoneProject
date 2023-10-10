#  🚀 Capstone Boilerplate

A template for building web applications using the PERN (PostgreSQL, Express.js, React, Node.js) stack. 

##  🏁 Getting Started

1. **Don't fork or clone this repo!** Instead, create a new, empty directory on your machine and `git init` (or create an _empty_ repo on GitHub and clone it to your local machine)

2. Add this template as a remote and merge it into your own repository

```bash
git remote add boilermaker git@github.com:FullstackAcademy/capstone-app-template.git
git fetch boilermaker
git merge boilermaker/main
```

3. Install packages

```bash
npm i
```

4. Add a `.env` file with your secret value for auth
```
JWT_SECRET='somesecretvalue'
```

5. Create the database

```bash
createdb your-database-name
```

6. Update `src/server/db/client.js` to reflect the name of your database

```js
const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/your-database-name';
```

7. Seed the database
```bash
npm run seed
```

8. Start the server
```bash
npm run dev
```

9. Open your browser at `http://localhost:3000`

10. Build something cool! 😎

const express = require('express'); const jwt = require('jsonwebtoken'); // Add jwt const app = express();

app.use(express.json());

// Dummy database (replace with an actual database connection) let cartItems = [];

// Dummy user data (replace with actual user database) let users = [ { id: 1, username: 'user1', password: 'password1' } ];

// Dummy token secret (replace with a strong, secret key) const tokenSecret = 'your_secret_key';

// Middleware to verify token function verifyToken(req, res, next) { const token = req.headers['authorization']; if (!token) return res.status(401).json({ message: 'Unauthorized' });

jwt.verify(token, tokenSecret, (err, user) => { if (err) return res.status(403).json({ message: 'Forbidden' }); req.user = user; next(); }); }

// Login route app.post('/api/login', (req, res) => { const { username, password } = req.body; const user = users.find(u => u.username === username && u.password === password); if (!user) return res.status(401).json({ message: 'Invalid credentials' });

const token = jwt.sign({ id: user.id }, tokenSecret, { expiresIn: '1h' }); res.json({ token }); });

// Add item to cart route (with authentication) app.post('/api/cart', verifyToken, (req, res) => { const { user_id, product_id, quantity } = req.body; cartItems.push({ user_id, product_id, quantity }); res.json({ message: 'Item added to cart successfully' }); });

// Retrieve cart items route (with authentication) app.get('/api/cart/:user_id', verifyToken, (req, res) => { const user_id = req.params.user_id; const userCart = cartItems.filter(item => item.user_id === user_id); res.json(userCart); });

// Update cart item (with authentication) app.put('/api/cart/:user_id/:product_id', verifyToken, (req, res) => { const { user_id, product_id } = req.params; const { quantity } = req.body; cartItems.forEach(item => { if (item.user_id === user_id && item.product_id === product_id) { item.quantity = quantity; } }); res.json({ message: 'Cart item updated successfully' }); });

// Remove item from cart (with authentication) app.delete('/api/cart/:user_id/:product_id', verifyToken, (req, res) => { const { user_id, product_id } = req.params; cartItems = cartItems.filter(item => !(item.user_id === user_id && item.product_id === product_id)); res.json({ message: 'Item removed from cart successfully' }); });

app.listen(3000, () => { console.log('Server is running on http://localhost:3000'); });