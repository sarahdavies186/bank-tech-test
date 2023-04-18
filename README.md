# Bank Tech Test

A bank application that runs in the command-line, that lets users make deposits, 
withdrawals, and see bank statements with balance and dates of transactions. 
Built with Javascript.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. 

### Installing

To install, clone this repo and enter the following command in the project directory
```
git clone https://github.com/sarahdavies186/bank-tech-test.git  
npm install 
```
### Test
```
npm test -- --coverage
```
## Use in Node
```
node
const BankAccount = require('./bankAccount.js')
const bankAccount = new BankAccount();
```
# Examples: 
```
bankAccount.makeDeposit(1000)
bankAccount.makeWithdrawal(500)
bankAccount.print();
```

## About the app



## Built With

  - Node JS
  - Jest

