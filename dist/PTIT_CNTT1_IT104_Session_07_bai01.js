"use strict";
class Employee01 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("Name: " + this.name + ", Company: " + this.company + ", Phone: " + this.phone);
    }
}
class Manager01 extends Employee01 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log("Team Size: " + this.teamSize);
    }
}
