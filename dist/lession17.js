"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log("Person is running...");
    };
    return Person;
}());
var p1 = new Person();
console.log(typeof (Person));
//moi doi tuong trong js deu co prototype de sung trong cac instance
console.log(p1.run() === Person.prototype.run());
console.log(p1.run === Person.prototype.run);
//# sourceMappingURL=lession17.js.map