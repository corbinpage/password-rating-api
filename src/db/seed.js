var Sequelize = require('sequelize');
var fs = require('fs');

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
  freezeTableName: true // Model tableName will be the same as the model name
});

Password.sync({force: true}).then( o => {

  var seedPasswords = fs.readFileSync('src/lib/SecLists/Passwords/10_million_password_list_top_10000.txt').toString().split("\n");
  var rank = 1;
  seedPasswords.forEach(p => {
    Password.create({
      text: p,
      rank: rank,
      strength: "Weak",
      score: 1
    })
    rank++;
  })
  
});




