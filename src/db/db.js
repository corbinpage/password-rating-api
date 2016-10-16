var Sequelize = require('sequelize');

if(process.env.NODE_ENV === 'production') {
  var db = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USERNAME, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });  
} else {
  var db = new Sequelize('password-rating', 'corbinpage', 'password', {
    host: 'localhost',
    dialect: 'postgres', // 'sqlite'

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
}

export default db;