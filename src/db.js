export default callback => {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('src/db/dev.sqlite');
  var Sequelize = require('sequelize');

  var sequelize = new Sequelize(db, 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite', // 'postgres'

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

    // SQLite only
    storage: 'db/dev.sqlite'
  });
  
callback(sequelize);
}
