"use strict";
//Spread paramter doi nghich voi Rest 
//Tu 1 mang, Spread bốc tách ra từng phần tử  từ list.
var displayColorSpread = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var messageSpread = "Thanh";
var colors = ["Red", "Green", "Blue"];
displayColorSpread.apply(void 0, [messageSpread].concat(colors));
//# sourceMappingURL=lession12.js.map