require('dotenv').config();

const express = require('express');
const router = require('vite-express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));

const db = require('./db/client');
db.connect();

const apiRouter = require('./api');
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

router.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`)
);

module.exports = router;