class Employee01{
    name:string;
    protected company:string;
    private phone:string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log("Name: " + this.name + ", Company: " + this.company + ", Phone: " + this.phone);
    }
}
class Manager01 extends Employee01 {
    teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log("Team Size: " + this.teamSize);
    }
}