class Account05{
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
class userAcc extends Account05 {
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
const user = new userAcc("U001", "john_doe", "password123", false, "user", false);
user.isLoginUser();
const admin = new userAcc("A001", "admin", "adminpass", false, "admin", true);
admin.isLoginUser();