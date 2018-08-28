"use strict";
//Gia tri mac dinh cho tham so (khong ho tro hoisting)
var getPercent = function () { return 2; };
var getBonus = function (value, tax, bonus) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = 20; }
    if (bonus === void 0) { bonus = value * 0.1 * getPercent(); }
    console.log(value + tax + bonus);
    console.log(arguments.length);
};
getBonus();
getBonus(12);
getBonus(undefined, 50);
//# sourceMappingURL=lession10.js.map