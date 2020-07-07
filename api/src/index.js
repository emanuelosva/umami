/**
 * @fileoverview Main server API
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gamil.com>
*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const recipeNetwork = require('./components/recipe/network');
const userNetwork = require('./components/user/network');
const shopNetwork = require('./components/shop/network');
const swaggerUi = require('swagger-ui-express');
// const adminNetwork = require('./components/admin/network');
// const adminPanel = require('./components/admin/panel');

const swaggerDoc = require('../swagger.json');
const errors = require('./network/errors');
const db = require('./db');
const config = require('../config');
const PORT = config.port;

// DB connection
db(config.db.dbUri);

// Server initialization
const app = express();

// App extensiones
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Router
app.get('/', (req, res, next) => {
  res.send('Test docker connected!!!');
});

app.use('/api/recipe', recipeNetwork);
app.use('/api/user', userNetwork);
app.use('/api/shop', shopNetwork);
app.use('/api/documentation', swaggerUi.serve);
app.get('/api/documentation', swaggerUi.setup(swaggerDoc, {
  customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css',
}));
// app.use('/api/admin', adminNetwork);
// app.use('/api/admin/panel', adminPanel);
app.use(errors);

// Expose
app.listen(PORT, () => {
  console.log(`Api run on http://localhost:${PORT}`);
});
