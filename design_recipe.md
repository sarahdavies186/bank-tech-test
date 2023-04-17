# Design Recipe - Bank Statement (Javascript)

## 1. User Stories

As a client I want to be able to make a deposit and update my balance

As a client I want to be able to make a withdrawal and update my balance

As a client I want to be able to print my bank statement, and see the dates of the withdrawal and deposits, along with current balance.

## 2. Define the class

```javascript 
class BankStatement {
constructor {
 // this.balance = 0 
}

getBalance(integer) {
 // returns an integer
}

makeWithdrawal(integer) {
 // returns an integer

}

makeDeposit(integer) {
 // returns an integer
}

}
```

## 3. Test examples
```javascript
describe('BankStatement class', () => {
const bankStatement = new BankStatement();

it('starts with an inital balance of 0', () => {
expect(bankStatement.getBalance()).toBe(0)
})

it('increases the balance when a deposit is made', () => {
bankStatement.makeDeposit(1000.00);
expect(bankStatement.getBalance()).toBe(1000.00)
})

it('increases the balance when 2 deposits are made', () => {
bankStatement.makeDeposit(1000.00);
bankStatement.makeDeposit(2000.00);
expect(bankStatement.getBalance()).toBe(3000.00)
})

it('shows the correct blance when deposits and withdrawals are made', () => {
bankStatement.makeDeposit(1000.00);
bankStatement.makeDeposit(2000.00);
bankStatement.makeWithdraawal(500.00);
expect(bankStatement.getBalance()).toBe(2500.00)
})

it('shows an error message when the wrong input is given', () => {
bankStatement.makeDeposit("deposit money");
expect(bankStatement.getBalance()).toBe("input should be an integer")
})

it('shows an error message when the wrong input is given', () => {
bankStatement.makeWithdrawal("withdraw money");
expect(bankStatement.getBalance()).toBe("input should be an integer")
})

it('rounds to 2 decimal places', () => {
bankStatement.makeDeposit("1000");
expect(bankStatement.getBalance()).toBe(1000.00)
})

it('rounds to 2 decimal places', () => {
bankStatement.makeDeposit("1000.1111");
expect(bankStatement.getBalance()).toBe(1000.11)
})

it('shows the date deposits are made', () => {
bankStatement.makeDeposit(1000.00); // made on the 10/01/2023
expect(outcome()).to include (date || credit || debit || balance)
expect(outcome()).to include (10/01/2023 || 1000.00 || || 1000.00)
})

it('shows the dates deposits and withdrawals are made', () => {
bankStatement.makeDeposit(1000.00); // made on the 10/01/2023
bankStatement.makeDeposit(2000.00); // made on the 13/01/2023
bankStatement.makeWithdrawal(500.00); // made on the 14/01/2023
expect(outcome()).to include (date || credit || debit || balance)
expect(outcome()).to include (14/01/2023 || || 500.00 || 2500.00)
expect(outcome()).to include (13/01/2023 || 2000.00 || || 3000.00)
expect(outcome()).to include (10/01/2023 || 1000.00 || || 1000.00)
})

it('prints the statement with most recent transaction at the top', () => {
bankStatement.makeDeposit(1000.00); // made on the 10/01/2023
bankStatement.makeDeposit(2000.00); // made on the 13/01/2023
bankStatement.makeWithdrawal(500.00); // made on the 14/01/2023
expect(outcome()).to include (date || credit || debit || balance)
expect(outcome()).to include (14/01/2023 || || 500.00 || 2500.00)
expect(outcome()).to include (13/01/2023 || 2000.00 || || 3000.00)
expect(outcome()).to include (10/01/2023 || 1000.00 || || 1000.00)
})
})
```

