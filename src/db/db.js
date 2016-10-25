var Sequelize = require('sequelize');
var db;

if(process.env.NODE_ENV === 'production') {
  db = new Sequelize(process.env.POSTGRES_DATABASE_URL_COPPER, {
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });  
} else {
  db = new Sequelize('password-rating-dev', 'corbinpage', 'password', {
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