"use strict";
class Account08 {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = true; // Active by default
    }
    deposit(amount) {
        if (this.status) {
            this.balance += amount;
            this.history.push(`Deposited: ${amount}`);
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Account is inactive. Cannot deposit.");
        }
    }
    withdraw(amount) {
        if (this.status) {
            this.balance -= amount;
            this.history.push(`Withdrew: ${amount}`);
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Account is inactive. Cannot withdraw.");
        }
    }
    getHistory() {
        return this.history;
    }
}
class SavingsAccount08 extends Account08 {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
}
class CheckingAccount08 extends Account08 {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
}
const savingsAccount08 = new SavingsAccount08(123456, 1000, 0.05);
savingsAccount08.deposit(500);
savingsAccount08.withdraw(200);
savingsAccount08.withdraw(1500);
const checkingAccount08 = new CheckingAccount08(654321, 2000, 500);
checkingAccount08.deposit(300);
checkingAccount08.withdraw(1000);
checkingAccount08.withdraw(2500);
console.log(`History:`);
checkingAccount08.getHistory().forEach(entry => console.log(entry));
