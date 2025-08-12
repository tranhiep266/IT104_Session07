"use strict";
class Aanimal03 {
    printName() {
        console.log(`Animal name: ${this.name}`);
    }
    constructor(name) {
        this.name = name;
    }
}
class Dog03 extends Aanimal03 {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`${this.name} says: Woof Woof!`);
    }
}
class Cat03 extends Aanimal03 {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`${this.name} says: Meow Meow!`);
    }
}
const dog = new Dog03("Buddy");
const cat = new Cat03("Whiskers");
dog.printName();
dog.makeNoise();
cat.printName();
cat.makeNoise();
