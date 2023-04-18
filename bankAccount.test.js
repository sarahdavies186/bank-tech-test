const BankAccount = require("./bankAccount");

describe("BankAccount class", () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  it("starts with an inital balance of 0", () => {
    expect(bankAccount.getBalance()).toBe(0);
  });

  it("increases the balance when a deposit is made", () => {
    bankAccount.makeDeposit(1000.0);
    expect(bankAccount.getBalance()).toBe(1000.0);
  });

  it("increases the balance when 2 deposits are made", () => {
    bankAccount.makeDeposit(1000.0);
    bankAccount.makeDeposit(2000.0);
    expect(bankAccount.getBalance()).toBe(3000.0);
  });

  it("shows the correct blance when deposits and withdrawals are made", () => {
    bankAccount.makeDeposit(1000.0);
    bankAccount.makeDeposit(2000.0);
    bankAccount.makeWithdrawal(500.0);
    expect(bankAccount.getBalance()).toBe(2500.0);
  });

  it("throws an error message when the wrong input is given", () => {
    expect(() => {
      bankAccount.makeDeposit("deposit money");
    }).toThrow("Input should be an integer");
  });

  it("throws an error message when the wrong input is given", () => {
    expect(() => {
      bankAccount.makeWithdrawal("withdraw money");
    }).toThrow("Input should be an integer");
  });

  it("rounds to 2 decimal places", () => {
    bankAccount.makeDeposit(1000.33);
    expect(bankAccount.getBalance()).toBe(1000.33);
  });

  it("rounds to 2 decimal places", () => {
    bankAccount.makeDeposit(1000.67733);
    expect(bankAccount.getBalance()).toBe(1000.68);
  });

  it("shows the statement for a deposit with a date, under the headings", () => {
    const consoleSpy = jest.spyOn(global.console, "log");

    bankAccount.makeDeposit(1000.0, "10/01/2023");
    bankAccount.print();

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy.mock.calls[0]).toEqual([
      "date || credit || debit || balance",
    ]),
      expect(consoleSpy.mock.calls[1]).toEqual([
        "18/04/2023 || 1000.00 ||  || 1000.00",
      ]);

    consoleSpy.mockRestore();
  });

  it("shows the statement for a deposit and withdrawal with a date, under the headings", () => {
    const consoleSpy = jest.spyOn(global.console, "log");

    bankAccount.makeDeposit(1000.0);
    bankAccount.makeWithdrawal(500.0);
    bankAccount.print();

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy.mock.calls[0]).toEqual([
      "date || credit || debit || balance",
    ]),
      expect(consoleSpy.mock.calls[1]).toEqual([
        "18/04/2023 ||  || 500.00 || 500.00",
      ]);
    expect(consoleSpy.mock.calls[2]).toEqual([
      "18/04/2023 || 1000.00 ||  || 1000.00",
    ]);

    consoleSpy.mockRestore();
  });

  it("throws an error if withdrawal amount is higher than the balance", () => {
    expect(() => {
      bankAccount.makeWithdrawal(1000);
    }).toThrow("Not enough funds");
  });
  
});
