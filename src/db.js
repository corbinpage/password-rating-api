export default callback => {
  var Sequelize = require('sequelize');

  var db = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite', // 'postgres'

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

    // SQLite only
    storage: 'src/db/dev.sqlite'
  });

  var Password = db.define('password', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: Sequelize.STRING
    },
    rank: {
      type: Sequelize.INTEGER
    },
    strength: {
      type: Sequelize.STRING
    },
    score: {
      type: Sequelize.INTEGER
    }
  }, {
    freezeTableName: true
  });

  Password.sync();


  callback(db);
}
