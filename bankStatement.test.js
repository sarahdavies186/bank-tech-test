const BankStatement = require("./bankStatement");

describe("BankStatement class", () => {
  let bankStatement 

  beforeEach(() => {
    bankStatement = new BankStatement();
  });
  
  it("starts with an inital balance of 0", () => {
    expect(bankStatement.getBalance()).toBe(0);
  });

  it("increases the balance when a deposit is made", () => {
    bankStatement.makeDeposit(1000.0);
    expect(bankStatement.getBalance()).toBe(1000.0);
  });

  it("increases the balance when 2 deposits are made", () => {
    bankStatement.makeDeposit(1000.0);
    bankStatement.makeDeposit(2000.0);
    expect(bankStatement.getBalance()).toBe(3000.0);
  });
});
