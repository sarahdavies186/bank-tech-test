const { format } = require("prettier");

class BankAccount{
  constructor() {
    this.balance = 0;
    this.statement = []
  }

  getBalance() {
    return this.balance;
  }

  makeDeposit(amount, date) { //date has to be a string
    this.addTransaction(amount, date, true)
  }

  makeWithdrawal(amount, date) { //date has to be a string
    this.addTransaction(amount, date, false)
  }

  addTransaction(amount, date, isDeposit) {
    if (typeof int !== 'number' && isNaN(amount) && isNaN(parseFloat(amount))) {
      throw new Error('Input should be an integer');
    }
    const formattedAmount = parseFloat(amount.toFixed(2));

    let credit;
    if(isDeposit === true) {
      credit = formattedAmount.toFixed(2)
    } else {
      credit = ""
    }

    let debit; 
    if(isDeposit === false) {
      debit = formattedAmount.toFixed(2)
    } else {
      debit = ""
    }

    if(isDeposit === true) {
      this.balance += formattedAmount;
    } else {
      this.balance -= formattedAmount;
    }

    const statement = `${date} || ${credit} || ${debit} || ${this.balance.toFixed(2)}`

    this.statement.push(statement)

  }

  print() {
    console.log("date || credit || debit || balance")
    this.statement.reverse().forEach((transaction => {
      console.log(transaction)
    }))
  }
}

module.exports = BankAccount;


// const BankAccount = require('./bankAccount.js')
// const bankAccount = new BankAccount();
// bankAccount.makeDeposit(100, "10/01/23")
// bankAccount.print();
