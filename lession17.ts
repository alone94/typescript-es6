class Person {
    run(){
        console.log("Person is running...");
    }
}
let p1 = new Person();
console.log(typeof(Person));
//moi doi tuong trong js deu co prototype de sung trong cac instance
console.log(p1.run() === Person.prototype.run());
console.log(p1.run === Person.prototype.run);