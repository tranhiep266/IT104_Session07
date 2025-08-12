"use strict";
class IVehicle02 {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, ID: ${this.id}`);
    }
    speedUp() {
        this.speed += 10;
        console.log(`${this.name} is ${this.speed} km/h now.`);
    }
    speedDown() {
        this.speed -= 10;
        console.log(`${this.name} is ${this.speed} km/h now.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} has stopped.`);
    }
}
class Bicycle02 extends IVehicle02 {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    printInfo() {
        console.log("Bicycle Info:");
        super.printInfo();
    }
    speedUp() {
        super.speedUp();
    }
    speedDown() {
        super.speedDown();
    }
    stop() {
        super.stop();
    }
}
const bicycle = new Bicycle02("Mountain Bike", 15, "B123", 21);
bicycle.printInfo();
bicycle.speedUp();
bicycle.speedDown();
bicycle.stop();
