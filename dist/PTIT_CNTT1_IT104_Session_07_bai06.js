"use strict";
class Account06 {
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
class userAcc06 extends Account06 {
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
class adminAcc06 extends Account06 {
    constructor(id, username, password, isLogin, role) {
        super(id, username, password, isLogin, role);
    }
    banUser(user) {
        user.isLogin = false;
        user.status = "Banned";
        console.log(`User with ID ${user.id} has been banned.`);
    }
}
const user061 = new userAcc06("U001", "john_doe", "password123", false, "user", true);
user061.isLoginUser();
const admin061 = new adminAcc06("A001", "admin", "adminpass", false, "admin");
admin061.isLoginAccount();
admin061.banUser(user061);
user061.isLoginUser();
