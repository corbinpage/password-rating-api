export default callback => {
  var Sequelize = require('sequelize');

  var sequelize = new Sequelize('database', 'username', 'password', {
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
