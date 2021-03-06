import fs from 'fs';
// import db from '/db';
import Password from '../models/password';

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

Password.bulkCreate(passwords.map(p => p.toJSON()));


