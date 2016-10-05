import db from '../db/db';
var Sequelize = require('sequelize');

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

export default Password;
