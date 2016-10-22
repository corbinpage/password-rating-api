import Sequelize from 'sequelize';
import db from '../db/db';
import taiPasswordStrength from 'tai-password-strength';

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
  }
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  instanceMethods: {
    prettyStrength: function () {
      var pretty = '';
      if(this.strength === 'VERY_WEAK') {
        pretty = 'Very Weak';
      } else if (this.strength === 'WEAK') {
        pretty = 'Weak';
      } else if (this.strength === 'REASONABLE') {
        pretty = 'Ok';
      } else if (this.strength === 'STRONG') {
        pretty = 'Strong';
      } else if (this.strength === 'VERY_STRONG') {
        pretty = 'Very Strong';
      }
      return pretty;
    },
    rankDescription: function() {
      if(this.get('rank')) {
        return  'Your password is in the top '&this.get('rank')&' most common passwords';
      } else {
        return 'Your password is not in the top 10,000 most common passwords.';
      }
    },
    testStrength: function() {
      if(this.text) {
        var strengthTester = new taiPasswordStrength.PasswordStrength();
        var results = strengthTester.check(this.text);

        this.rank = this.rank || 0;
        this.score = results.charsetSize;
        this.textLength = results.passwordLength;
        this.strength = results.strengthCode;
        this.containsLowercase = results.charsets.lower;
        this.containsUppercase = results.charsets.upper;
        this.containsNumbers = results.charsets.number;
        this.containsSymbols = results.charsets.symbol;
      }
    }
  }
});

export default Password;
