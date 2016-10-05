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
    storage: 'dev.sqlite'
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
  strength: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Password.sync({force: true}).then(function () {
  // Table created
  return Password.create({
    text: "123456",
    strength: "Weak",
    score: 1
  });
});