// What are booleans.
// Boolean are true or false values that sits at the heart of conditional programming
// It executes code based on given conditions.

let isRainyDay = true
const isBatteryLow = false
let hasAuthority = true
const collapsed = false 
let isLate = false
let isIsolated = false

// 1.Comparison Operators: Equality(==, ===)
let x = 5
let y = "5"
console.log(x == y);
console.log(x === y);
console.log(x !== y);

// 2. relational operator(<, >, <=, >=)
console.log(3 < 5);
console.log(7 < 10);
console.log(8 <= 8);

// 3. Logical Operators (and(&&), or(||), not(!))
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log("a", false && 1);
console.log("b", true && 1);

// OR(||)
console.log("b", true || true);
console.log("b", true || false);
console.log("b", false || false);

// NOT(!)
console.log("NOT");
console.log(!true);
console.log(!true);
console.log(!false);
console.log("isRainyDay", !isRainyDay);
console.log(!(5>3));

// 4. IN
// check property in object
console.log("in");
let car = {
    make: "Toyota",
    model: "Camry"

}
console.log("make:" in car);
console.log("color:" in car);

// Check the existence of an index in an array
console.log("index");
let fruits = ["apple", "banana", "cherry"]
console.log(1 in fruits);
console.log(4 in fruits);

if(3 in fruits){
    console.log("Banana exists in fruit");
}else{
    console.log("that index position doesn't exist");
}

// The topic for next class is if else condition, switch-case, and conditional Operator
// Read upon these three
// Assignment may be sent through WhatsApp

