abstract class APerson04 {
    name:string;
    display(): void {
        console.log(`Person name: ${this.name}`);
    }
    constructor(name: string) {
        this.name = name;
    }
}
class Student04 extends APerson04 {
    id: string;
    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }
    display(): void {
        console.log(`Student name: ${this.name}, ID: ${this.id}`);
    }
}
class Teacher04 extends APerson04 {
    subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    display(): void {
        console.log(`Teacher name: ${this.name}, Subject: ${this.subject}`);
    }
}
const student = new Student04("Alice", "S123");
const teacher = new Teacher04("Bob", "Mathematics");
student.display();
teacher.display();