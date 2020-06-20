/**
 * @fileoverview DB connection manage.
 *
 * @version 1.0
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const db = require('mongoose');

db.Promise = global.Promise;

const connect = async (dbURI) => {
  try {
    await db.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('[db] Successfully connected');
  } catch (err) {
    console.error(`[db] Connection failed ${err}`);
  }
};

module.exports = connect;
