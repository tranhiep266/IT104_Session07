"use strict";
class Account05 {
    constructor(id, username, password, isLogin, role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    isLoginAccount() {
        return this.isLogin;
    }
    isLogoutAccount() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(`${this.username} has logged out.`);
        }
        else {
            console.log(`${this.username} is already logged out.`);
        }
        return !this.isLogin;
    }
}
class userAcc extends Account05 {
    constructor(id, username, password, isLogin, role, status) {
        super(id, username, password, isLogin, role);
        this.status = status ? "Active" : "Banned";
    }
    isLoginUser() {
        if (this.status === "Active") {
            this.isLogin = true;
            console.log(`${this.username} has logged in.`);
        }
        else {
            console.log(`${this.username} cannot log in because the account is ${this.status}.`);
        }
        return this.isLogin;
    }
}
const user = new userAcc("U001", "john_doe", "password123", false, "user", false);
user.isLoginUser();
const admin = new userAcc("A001", "admin", "adminpass", false, "admin", true);
admin.isLoginUser();
