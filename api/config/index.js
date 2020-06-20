require('dotenv').config()

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME;

const config = {
  port: process.env.PORT || 3000,
  db: {
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
  },
  enviroment: {
    development: process.env.DEVELOPMENT || false
  },
};

module.exports = config;
