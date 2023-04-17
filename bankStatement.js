const { format } = require("prettier");

class BankStatement {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  makeDeposit(int) {
    if (typeof int === 'number' && !isNaN(int) && !isNaN(parseFloat(int))) {
      const formattedInt = parseFloat(int.toFixed(2));
      this.balance = this.balance + formattedInt;
    } else {
      throw new Error('Input should be an integer');
    }
  }

  makeWithdrawal(int) {
    if (typeof int === 'number' && !isNaN(int) && !isNaN(parseFloat(int))) {
      const formattedInt = parseFloat(int.toFixed(2));
      this.balance = this.balance - formattedInt;
    } else {
      throw new Error('Input should be an integer');
    }
  }
}

module.exports = BankStatement;


// const BankStatement = require('./bankStatement.js')
// const bankStatement = new BankStatement();
// bankStatement.makeDeposit(100)
// bankStatement.getBalance();
