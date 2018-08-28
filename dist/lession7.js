"use strict";
var isDone = false;
console.log(isDone);
var decimal = 12;
console.log(decimal);
var color = "Red";
console.log(color);
var fullname = "Thanh";
var age = 10;
var sentence = "\n    Hello, \n    My name is " + fullname + "\n    Age is " + (age + 11);
console.log(sentence);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//# sourceMappingURL=lession7.js.map