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
Testing has been carried out with jest, and test coverage is 100%
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
I have structed my program by using a class BankAccount, which has different functions within it, including makeDeposit, makeWithdrawal and print the statement. I refactored my code during the building process to make sure that I was repeating as little as needed. To do this I added a function called addTransaction, which uses conditional ternary operators, on whether it is making a deposit or withdrawal, and adds the transaction correctly to the statement following this. 
The program throws an error if the input is not an integer, or if a withdrawal is attempted where the amount is larger than the current balance it will throw an error to say not enough funds. The bank application will also round numbers to 2 decimal places. It uses the current date for transaction, in UK time format. 
## Examples: 

<img width="561" alt="Screenshot 2023-04-18 at 15 13 49" src="https://user-images.githubusercontent.com/99144401/232804946-39418cb3-758c-4eae-95a9-7f2e32cb35fa.png">

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

