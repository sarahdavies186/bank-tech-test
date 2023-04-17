const BankStatement = require('./bankStatement')

describe('BankStatement class', () => {
  const bankStatement = new BankStatement();
  
  it('starts with an inital balance of 0', () => {
  expect(bankStatement.getBalance()).toBe(0)
  })

})