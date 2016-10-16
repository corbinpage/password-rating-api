export default callback => {
  var Sequelize = require('sequelize');

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
    freezeTableName: true
  });

  Password.sync();


  callback(db);
}
