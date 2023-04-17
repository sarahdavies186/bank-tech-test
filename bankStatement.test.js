const BankStatement = require("./bankStatement");

describe("BankStatement class", () => {
  let bankStatement;

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

  it("shows the correct blance when deposits and withdrawals are made", () => {
    bankStatement.makeDeposit(1000.0);
    bankStatement.makeDeposit(2000.0);
    bankStatement.makeWithdrawal(500.0);
    expect(bankStatement.getBalance()).toBe(2500.0);
  });

  it("throws an error message when the wrong input is given", () => {
    expect(() => {
      bankStatement.makeDeposit("deposit money");
    }).toThrow("Input should be an integer");
  });

  it("throws an error message when the wrong input is given", () => {
    expect(() => {
      bankStatement.makeWithdrawal("withdraw money");
    }).toThrow("Input should be an integer");
  });

  it('rounds to 2 decimal places', () => {
    bankStatement.makeDeposit(1000.33);
    expect(bankStatement.getBalance()).toBe(1000.33)
    })

  it('rounds to 2 decimal places', () => {
    bankStatement.makeDeposit(1000.67733); 
    expect(bankStatement.getBalance()).toBe(1000.68)
    })

  it('shows the headings in the console log', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    bankStatement.print();
    expect(consoleSpy).toHaveBeenCalledWith('date || credit || debit || balance');
  });
});
