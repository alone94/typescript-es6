"use strict";
//method in class
var Person1 = /** @class */ (function () {
    function Person1(namec) {
        this.namec = namec;
        console.log(this.namec + " Contructor");
    }
    Person1.talk = function () {
        console.log("Thsi static method is talk");
    };
    Person1.prototype.run = function () {
        console.log("Persion is running");
    };
    return Person1;
}());
var p = new Person1("Thanh");
console.log(p);
Person1.talk();
p.run();
//# sourceMappingURL=lession18.js.map