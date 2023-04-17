const { format } = require("prettier");

class BankStatement {
  constructor() {
    this.balance = 0;
    this.statement = []
  }

  getBalance() {
    return this.balance;
  }

  makeDeposit(int, date) {
    if (typeof int === 'number' && !isNaN(int) && !isNaN(parseFloat(int))) {
      const formattedInt = parseFloat(int.toFixed(2));
      this.balance = this.balance + formattedInt;
      const statement = `${date} || ${int} || || ${this.balance}`
      this.statement.push(statement)
    } else {
      throw new Error('Input should be an integer');
    }
  }

  makeWithdrawal(int, date) {
    if (typeof int === 'number' && !isNaN(int) && !isNaN(parseFloat(int))) {
      const formattedInt = parseFloat(int.toFixed(2));
      this.balance = this.balance - formattedInt;
    } else {
      throw new Error('Input should be an integer');
    }
  }

  print() {
    console.log("date || credit || debit || balance")
    console.log(this.statement[0])
  }
}

module.exports = BankStatement;


// const BankStatement = require('./bankStatement.js')
// const bankStatement = new BankStatement();
// bankStatement.makeDeposit(100)
// bankStatement.getBalance();
