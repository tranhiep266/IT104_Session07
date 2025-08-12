 class IVehicle02 {
    protected name: string;
    protected speed: number;
    protected id: string;
    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    printInfo(): void{
        console.log(`Name: ${this.name}, Speed: ${this.speed}, ID: ${this.id}`);
    }
    speedUp():void {
        this.speed += 10;
        console.log(`${this.name} is ${this.speed} km/h now.`);
    }
    speedDown():void {
        this.speed -= 10;
        console.log(`${this.name} is ${this.speed} km/h now.`);
    }
    stop(): void {
        this.speed = 0;
        console.log(`${this.name} has stopped.`);
    }
}
class Bicycle02 extends IVehicle02 {
    private gear: number;
    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    printInfo(): void {
        console.log("Bicycle Info:");
        super.printInfo();
    }
    speedUp(): void {
        super.speedUp();
    }
    speedDown(): void {
        super.speedDown();
    }
    stop(): void {
        super.stop();
    }
}
const bicycle = new Bicycle02("Mountain Bike", 15, "B123", 21);
bicycle.printInfo();
bicycle.speedUp();
bicycle.speedDown();
bicycle.stop();