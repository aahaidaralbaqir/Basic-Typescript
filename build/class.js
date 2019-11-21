"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(phone, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    return Admin;
}(User));
/**
 * Public = Can be accessed in all classes
 * Protected = Only can be accessed in that class and its children
 * Private = bisa diakses  class tersebut
 */
var admin = new Admin('081290315248', 'ahmad haidar albaqir', 12);
// console.log(admin.getRole())
// console.log(admin.setName('haidar'))
// console.log(admin.getName())
admin.email = "ahmadhrasdasd.22@gmail.com";
console.log(admin.email);
