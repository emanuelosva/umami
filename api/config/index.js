require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  enviroment: {
    development: process.env.DEVELOPMENT || false
  },
};

module.exports = config;
