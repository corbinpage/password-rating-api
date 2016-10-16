var Sequelize = require('sequelize');
var fs = require('fs');

if(process.env.NODE_ENV === 'production') {
  var db = new Sequelize(process.env.POSTGRES_DATABASE_URL_COPPER, {
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

  var seedPasswords = fs.readFileSync('src/lib/10_million_password_list_top_10000.txt').toString().split("\n");
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




