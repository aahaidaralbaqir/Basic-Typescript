"use strict";
// function getName() : string {
//     return "hello, my name is ahmad haidar"
// }
// function printName() : void{
//     console.log('print name')
// }
// console.log(getName())
// argument types
function multiply(a, b) {
    return a * b;
}
var Add = function (val1, val2) {
    return val1 * val2;
};
// optional paramater in function
var getUmur = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getUmur("haidar"));
// optional paramater in function
var getNumber = function (val1, val2) {
    if (val2 === void 0) { val2 = 2; }
    return val1 + val2;
};
console.log(getNumber(1));
// printName()git
