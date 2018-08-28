//Gia tri mac dinh cho tham so (khong ho tro hoisting)
let getPercent = () => 2;
let getBonus = function (value = 10, tax = 20, bonus = value * 0.1 * getPercent()) {
    console.log(value + tax + bonus);
    console.log(arguments.length);
}

getBonus();
getBonus(12);
getBonus(undefined, 50);