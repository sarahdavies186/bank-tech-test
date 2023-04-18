class BankAccount{
  constructor() {
    this.balance = 0;
    this.statement = []
  }

  getBalance() {
    return this.balance;
  }

  makeDeposit(amount) {
    this.addTransaction(amount, true)
  }

  makeWithdrawal(amount) { 
    if (typeof isNaN(amount) && isNaN(parseFloat(amount))) {
      throw new Error('Input should be an integer');
    }
    if (amount < this.balance) {
    this.addTransaction(amount, false)
    } else {
      throw new Error('Not enough funds');
    }
  }

  addTransaction(amount, isDeposit) {
    if (typeof isNaN(amount) && isNaN(parseFloat(amount))) {
      throw new Error('Input should be an integer');
    }

    const formattedAmount = parseFloat(amount.toFixed(2));
    const credit = isDeposit ? formattedAmount.toFixed(2) : ""
    const debit = isDeposit ? "" : formattedAmount.toFixed(2)
    this.balance = isDeposit ? this.balance += formattedAmount : this.balance -= formattedAmount;

    const date = new Date().toLocaleDateString('en-gb');

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
