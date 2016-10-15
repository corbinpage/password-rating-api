var Sequelize = require('sequelize');

var db = new Sequelize('password-rating', 'corbinpage', 'password', {
  host: 'localhost',
    dialect: 'postgres', // 'sqlite'

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

    // SQLite only
    // storage: 'src/db/dev.sqlite'
  });

export default db;