"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    // public name : string
    // constructor(name : string) {
    //     this.name = name
    // }
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var user = new User('haidar albaqir', 12);
console.log(user);
