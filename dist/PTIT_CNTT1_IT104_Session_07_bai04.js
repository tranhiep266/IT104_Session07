"use strict";
class APerson04 {
    display() {
        console.log(`Person name: ${this.name}`);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student04 extends APerson04 {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    display() {
        console.log(`Student name: ${this.name}, ID: ${this.id}`);
    }
}
class Teacher04 extends APerson04 {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    display() {
        console.log(`Teacher name: ${this.name}, Subject: ${this.subject}`);
    }
}
const student = new Student04("Alice", "S123");
const teacher = new Teacher04("Bob", "Mathematics");
student.display();
teacher.display();
