const BankStatement = require('./bankStatement')

describe('BankStatement class', () => {
  const bankStatement = new BankStatement();
  
  it('starts with an inital balance of 0', () => {
  expect(bankStatement.getBalance()).toBe(0)
  })

  it('increases the balance when a deposit is made', () => {
    bankStatement.makeDeposit(1000.00);
    expect(bankStatement.getBalance()).toBe(1000.00)
    })

})