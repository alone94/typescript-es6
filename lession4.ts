function greetPerson(name: string) {
    let greet;
    if (name === "Chandler") {
         greet = "Hello Chandler";
    } else {
         greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Chandler");

var a = 1;
let b = 2;
if (a == 1) {
    var a = 10;
    let b = 20;
}
console.log(a);
console.log(b);