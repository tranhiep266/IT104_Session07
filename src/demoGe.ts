// const studentNames:Array<string> = ["A","B","C"];
// const user:Record<string,string|number>={
//     id: "1",
//     name: "A",
//     age: 20
// }
// interface CreateUserDto {
//     id?: string;
//     name?: string;
//     age?: number;
// }
// const partialCreateUserDto: Partial<CreateUserDto> = {
//     name: "B"
// }
// interface Point{
//     x:number;
//     y:number;
// }
// const point:Readonly<Point> = {
//     x: 1,
//     y: 2
// }
// interface User{
//     id:number;
//     name:string;
//     age:number;
//     email:string;
//     dateOfBirth:Date;
//     address:string;
// }
// const cloneUser:Pick<User,"id" | "name" | "age"> = {
//     id: 1,
//     name: "A",
//     age: 20
// }
// const omitUser:Omit<User,"id"> = {
//     name: "A",
//     age: 20,
//     email: "a@example.com",
//     dateOfBirth: new Date("2000-01-01"),
//     address: "123 Main St"
// }
