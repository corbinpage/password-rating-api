var Sequelize = require('sequelize');
var fs = require('fs');
var db = require('/db');
var Password = require('../models/password');

Password.sync({force: true}).then( o => {

  var seedPasswords = fs.readFileSync('src/lib/10_million_password_list_top_10000.txt').toString().split("\n");
  var rank = 1;
  var passwords = seedPasswords.map(p => {
    var newPassword = Password.build({
      text: p,
      rank: rank
    });
    
    newPassword.testStrength();
    rank++;
    return newPassword
  })
  
});




