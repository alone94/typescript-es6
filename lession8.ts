var calculateSalary = function () {
    return 1000000;
}

let cSalaryArrow = (bonus: number, tax: number) => 2000000 + bonus - tax;

console.log(calculateSalary());

console.log(cSalaryArrow(200, 100));