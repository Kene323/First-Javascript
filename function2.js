let size = -10

if(size >= 50){
    console.log("LARGE");
}
else if(size >= 20){
    console.log("MEDIUM");
}
else{
    console.log("SMALL");
}

// Anonymous function is a function in javascript that does not have a name

const integer = [1, 2, 3, 4, 5]
const square = integer.map((value) => value ** 2)
console.log(square);

const addFive = integer.map((value) => value + 5)
console.log(addFive);

// double each element in the integer array
const double = integer.map((value) => value * 2)
console.log(double);

// Extracting Propetry values from an array of Objects
const userA = [
    {name: "Alice", age:25},
    {name: "Bob", age:30},
    {name: "Charlie", age: 15}
]

const names = userA.map((value) => value.name)
console.log(names);

const numbers = userA.map((value) => value.age)
console.log(numbers);

// VARIATIONS OF DEFINING ARROW FUNCTIONS: depends on parameters and nature of the function body
// MULTIPLE PARAMETERS AND FUNCTION BODY
const add =  (a, b) => {
    return a+ b
}
console.log(add(3, 7));

const multiply = (x, y, z) => {
    const result = x * y * z
    return result
}
console.log(multiply(2, 3, 4));

const greet = (first_Name, last_Name)=>{
    return `Hello ${first_Name} ${last_Name}`
}
console.log(greet("John", "Paul"));

// single parameter and function body
const singleSquare = x => {
    returnx*x
}

const printMessage = message => {
    console.log(message);
}
printMessage("Hello Children, It's Your Day")

const toUpperCases = str => {
    return str.toUpperCase()
}
console.log(toUpperCases("my name is"));

// Multiple parameter and a single expression
const subtract = (c, d) => c - d
console.log(subtract(10, 4));

const divides = (e, f) => e/f
console.log(subtract(14, 2));

// Single parameter and single expression
const doubling = n => n * 2
console.log(doubling(4));

const isEven = num => num % 2 === 0
console.log(isEven(5));

const getLength = text => text.Length
console.log(getLength("Javascript"));

// Spot the arrow function in the following
const numberList = [1, 2, 3, 4, 5]
const squareList = numberList.map(n => n * n)
console.log(squareList);
// n => n * n

const squareList1 = n => n ** 2
console.log(squareList1, "Square List");

 document.addEventListener(`click`, event => {
     console.log(`Element clicked`, event.target);
 })
//  event => {
    // console.log(`Element clicked`, event.target);
// })

const sum = (a, b) => a + b
// (a, b) => a + b

const  increment = n => n * 1
//n => n * 1