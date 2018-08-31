//method in class
class Person1 {
    constructor(namec){
        this.namec = namec;
        console.log(this.namec+" Contructor");
    }
    static talk() {
        console.log("Thsi static method is talk");
    }
    
    run(){
        console.log("Persion is running");
    }
}
let p = new Person1("Thanh");
console.log(p);
Person1.talk();
p.run();