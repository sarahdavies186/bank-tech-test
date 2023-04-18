# Bank Tech Test

A bank application that runs in the command-line, that lets users make deposits, 
withdrawals, and see bank statements with balance and dates of transactions. 
Built with Javascript.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. 

### Install

To install, clone this repo and enter the following command in the project directory
```
git clone https://github.com/sarahdavies186/bank-tech-test.git  
npm install
```
### Test
```
npm test
```
## Use in Node
```
node
const BankAccount = require('./bankAccount.js')
const bankAccount = new BankAccount();
```
## About the application
The banking application works with the functions of makeDeposit, makeWithdrawal and print the statement. The application throws an error if the input is not an integer, or if a withdrawal is attempted where the amount is larger than the current balance it will throw an error to say not enough funds. The bank application will also round numbers to 2 decimal places. It uses the current date for transaction, in UK time format. 
## Examples: 
```
const BankAccount = require('./bankAccount.js')
const bankAccount = new BankAccount();
bankAccount.makeDeposit(1000)
bankAccount.makeWithdrawal(500)
bankAccount.print();
```
```
const BankAccount = require('./bankAccount.js')
const bankAccount = new BankAccount();
bankAccount.makeDeposit(1000)
bankAccount.makeWithdrawal(1500)
Error: Not enough funds
```
```
const BankAccount = require('./bankAccount.js')
const bankAccount = new BankAccount();
bankAccount.makeDeposit("deposit money")
Error: Input should be an integer
```
```
const BankAccount = require('./bankAccount.js')
const bankAccount = new BankAccount();
bankAccount.makeDeposit(100.11111)
bankAccount.print(); // will show balance as 100.11 
```
## Built With
  - Node JS
  - Jest

