//Rest parameter
let displayColor = function (...colors: string[]) {
    for (let i in colors) {
        console.log(colors[i]);
    }
}
let message = "Thanh";
displayColor(message, "Red");
displayColor(message," Red", "Green");
displayColor(message, "Red", "Green", "Blue");