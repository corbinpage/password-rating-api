import db from '../db/db';
import Sequelize from 'sequelize';
import taiPasswordStrength from 'tai-password-strength';

if (betterResults.strengthCode.indexOf('WEAK') >= 0) {
  throw new Error("Your password is too weak");
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
  },
  textLength: {
    type: Sequelize.INTEGER
  },
  containsLowercase: {
    type: Sequelize.BOOLEAN
  },
  containsUppercase: {
    type: Sequelize.BOOLEAN
  },
  containsNumbers: {
    type: Sequelize.BOOLEAN
  },
  containsSymbols: {
    type: Sequelize.BOOLEAN
  },
  containsOther: {
    type: Sequelize.BOOLEAN
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Password.sync();

Password.prototype.rankDescription = function() {
  if(this.get('rank')) {
    return  'Your password is in the top '&this.get('rank')&' most common passwords';
  } else {
    return 'Your password is not in the top 10,000 most common passwords.';
  }
};

Password.prototype.testStrength = function() {
  var strengthTester = new taiPasswordStrength.PasswordStrength();
  var results = strengthTester.check(this.text);

  this.rank = this.rank || 0;
  this.score = charsetSize;
  this.textLength = results.passwordLength;
  this.strength = results.strengthCode;
  this.containsLowercase = results.charets.lower;
  this.containsUppercase = results.charets.upper;
  this.containsNumbers = results.charets.number;
  this.containsSymbols = results.charets.symbol;
  this.containsOther = results.charets.other;

};

export default Password;
