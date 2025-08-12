class Account06{
    id: string;
    username: string;
    password: string;
    isLogin: boolean;
    role: string;
    constructor(id: string, username: string, password: string,isLogin:boolean, role: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    isLoginAccount(): boolean {
        return this.isLogin;
    }
    isLogoutAccount(): boolean {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(`${this.username} has logged out.`);
        } else {
            console.log(`${this.username} is already logged out.`);
        }
        return !this.isLogin;
    }
}
class userAcc06 extends Account06 {
    status:string;
    constructor(id: string, username: string, password: string,isLogin:boolean, role: string, status: boolean) {
        super(id, username, password,isLogin, role);
        this.status = status ? "Active" : "Banned";
    }
    isLoginUser(): boolean {
        if(this.status === "Active") {
            this.isLogin = true;
            console.log(`${this.username} has logged in.`);
        } else {
            console.log(`${this.username} cannot log in because the account is ${this.status}.`);
        }
        return this.isLogin;
    }
}
class adminAcc06 extends Account06 {
    constructor(id: string, username: string, password: string,isLogin:boolean, role: string) {
        super(id, username, password,isLogin, role);
    }
    banUser(user:userAcc06): void {
        user.isLogin = false;
        user.status = "Banned";
        console.log(`User with ID ${user.id} has been banned.`);
    }
}
const user061= new userAcc06("U001", "john_doe", "password123", false, "user", true);
user061.isLoginUser();
const admin061 = new adminAcc06("A001", "admin", "adminpass", false, "admin");
admin061.isLoginAccount();
admin061.banUser(user061);
user061.isLoginUser();