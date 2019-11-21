"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    // public name : string
    // constructor(name : string) {
    //     this.name = name
    // }
    // di javascript tidak ada class ada nya prototype
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
    }
    return User;
}());
exports.User = User;
/**
 * Public = bisa diakses disemua class / di luar class
 * Protected = bisa diakses  class tersebut atau kelas turunannya
 * Private = bisa diakses  class tersebut
 */
var user = new User('haidar albaqir', 12);
console.log(user);
