class BankStatement {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  makeDeposit(int) {
    this.balance = this.balance + int;
  }

  makeWithdrawal(int) {
    this.balance = this.balance - int;
  }
}

module.exports = BankStatement;

