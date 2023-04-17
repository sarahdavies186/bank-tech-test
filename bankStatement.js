class BankStatement {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  makeDeposit(int) {
    if (!Number.isInteger(int)) {
      throw new Error("input should be an integer");
    }
    this.balance = this.balance + int;
  }

  makeWithdrawal(int) {
    if (!Number.isInteger(int)) {
      throw new Error("input should be an integer");
    }
    this.balance = this.balance - int;
  }
}

module.exports = BankStatement;

