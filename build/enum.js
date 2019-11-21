"use strict";
// enum
// numeric enum
// enum Month {
//     JAN,
//     FAB,
//     MEI,
//     APR
// }
// string enum
var Month;
(function (Month) {
    Month["JAN"] = "januari";
    Month["FEB"] = "februari";
    Month["MAR"] = "Maret";
})(Month || (Month = {}));
console.log(Month.JAN);
