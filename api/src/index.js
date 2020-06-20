/**
 * @fileoverview Main server API
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gamil.com>
*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const config = require('../config');
const PORT = config.port;

// DB connection
db(config.db.dbUri);

// Server initialization
const app = express();

// App extensiones
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Router
app.get('/', (req, res, next) => {
  res.send('Test docker connected!!!');
});

// Expose
app.listen(PORT, () => {
  console.log(`Api run on http://localhost:${PORT}`);
});
