"use strict";
//Rest parameter
var displayColor = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "Thanh";
displayColor(message, "Red");
displayColor(message, " Red", "Green");
displayColor(message, "Red", "Green", "Blue");
//# sourceMappingURL=lession11.js.map