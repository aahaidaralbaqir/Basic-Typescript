"use strict";
var Asus = /** @class */ (function () {
    function Asus(name) {
        this.name = name;
    }
    Asus.prototype.on = function () {
        console.log(this.name, 'nyala');
    };
    Asus.prototype.of = function () {
        console.log(this.name, 'mati');
    };
    return Asus;
}());
var asus = new Asus('kampret');
asus.on();
