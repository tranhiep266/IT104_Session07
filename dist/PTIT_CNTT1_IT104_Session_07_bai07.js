"use strict";
class Account07 {
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
            if (amount <= this.balance) {
                this.balance -= amount;
                this.history.push(`Withdrew: ${amount}`);
                console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
            }
            else {
                console.log("Insufficient funds.");
            }
        }
        else {
            console.log("Account is inactive. Cannot withdraw.");
        }
    }
    getHistory() {
        return this.history;
    }
}
class SavingsAccount07 extends Account07 {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
}
const savingsAccount = new SavingsAccount07(123456, 1000, 0.05);
savingsAccount.deposit(500);
savingsAccount.withdraw(200);
savingsAccount.withdraw(1500);
console.log(`History:`);
savingsAccount.getHistory().forEach(entry => console.log(entry));
