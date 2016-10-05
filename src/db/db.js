var Sequelize = require('sequelize');

var db = new Sequelize(db, 'username', 'password', {
  host: 'localhost',
    dialect: 'sqlite', // 'postgres'

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

    // SQLite only
    storage: 'dev.sqlite'
  });

export default db;