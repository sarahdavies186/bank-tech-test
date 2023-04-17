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
      const statement = `${date} || ${formattedInt.toFixed(2)} || || ${this.balance.toFixed(2)}`
      this.statement.push(statement)
    } else {
      throw new Error('Input should be an integer');
    }
  }

  makeWithdrawal(int, date) {
    if (typeof int === 'number' && !isNaN(int) && !isNaN(parseFloat(int))) {
      const formattedInt = parseFloat(int.toFixed(2));
      this.balance = this.balance - formattedInt;
      const statement = `${date} || || ${formattedInt.toFixed(2)} || ${this.balance.toFixed(2)}`
      this.statement.push(statement)
    } else {
      throw new Error('Input should be an integer');
    }
  }

  print() {
    console.log("date || credit || debit || balance")
    this.statement.forEach((transaction => {
      console.log(transaction)
    }))
  }
}

module.exports = BankStatement;


// const BankStatement = require('./bankStatement.js')
// const bankStatement = new BankStatement();
// bankStatement.makeDeposit(100)
// bankStatement.getBalance();
