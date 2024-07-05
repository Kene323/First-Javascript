// Datatype Definition: It is a set of values and the operations possible on those values
// Categories are Primitive and Object

// Primitive is the simplest for of data, it is only able to store 1 value type
// There are seven types: Number, String, Boolean, null, undefined, symbol, BigInt

// Object is a complex form of data
// Types of objects are: Array, Function, Object

// Primitive datatypes are immutable and they don't have properties and methods, whereas objects do.
// These properties and methods help us manipulate objects

// 1. NUMBER
let number = 42
console.log(2 + 2);
console.log(2.5 + 2.5);
console.log(2.5 - 20);

// 2. STRING: are a sequence of textual characters.
let language = "Javascript is King"
// Single Quote ''
console.log('Single Quote String');
console.log('according to Mark Azuka "Facebook is one of the safest social media" language')
// Double Quote ""
console.log("Double Qoute String");
console.log("this is John's book");
// Backtick quote or Template Literal
console.log(`I am currently learning ${language} and the course duratiion is ${number} hours`);

// Length and Index
console.log(language.length);
console.log(language[0]);
console.log(language[2]);
console.log(language[-1]);
console.log(language[20]);

// BOOLEAN: is a simple true or false value.
let proceed = true
let stopNow = false
// Example:
// 1. Using Boolean Variables for conditions
if(proceed) {
    console.log("you can proceed")
}else{
    "you cannot proceed"
}
// 
if(stopNow){
    console.log("you can stop now")
}else{
    "you cannot stop now"
}
// 2. Toggling Boolean Values
let isActive = false
isActive = !isActive
console.log(isActive);
console.log(isActive);

// 2. Toggle again to revert to default
isActive = !isActive
console.log(isActive);

// 3. Boolean values for function return
function isAdult(age) {
    return age >= 18
}

console.log(isAdult(20))
console.log(isAdult(35))
console.log(isAdult(15))
console.log(isAdult(10))

// Activity
// Write a function that toggles a boolean value base on button click
let isOnline = false
function toggle() {
    isOnline = !isOnline
    console.log(`The value is now: ${isOnline}`);
    isOnline = !isOnline
    console.log(`The value is now: ${isOnline}`);
    isOnline = !isOnline
    console.log(`The value is now: ${isOnline}`);
}

// OBJECT data type
// 1. Arrays: This is an ordered collection of data.
// It is like a sequence of values or list of items and can store multiple values at once.
// The values in an array are called elements or items.

// 1. Example: Array with numbers, strings and booleans
const mix_Array = [10, "Hello", 20, "World", true]
console.log(mix_Array[0]);
console.log(mix_Array[1]);
console.log(mix_Array[2]);
console.log(mix_Array[3]);
console.log(mix_Array[4]);
console.log(mix_Array.length);

// 2.Array with object and Function
const employee_Data = [
    {name: "John", age: 30, position: "Developer"},
    {name: "Bob", age: 35, position: "Manager"},
    function greet(name) {
        console.log(`Hello ${name} welcome to our backend class`);
    }
]
console.log(employee_Data.length);
employee_Data[2]("Henry")
console.log(employee_Data[1].position)

// SORTING: Arranging elements in an array in alphabetical order.
const firstSort = ["tomato", "watermelon", "apple", "mango", "pineable"]
console.log(firstSort.sort())

// Sorting Array of numbers
const secondSort = [100, 9, 80, 2, -1, 0, -50]
console.log(secondSort.sort(function (a, b){
    return a - b
}));

// FUNCTION: This is a piece of code that is executed when called upon
// Syntax before arrow function
function name(parameterList) {
    // statement/code
 }
// The return keyword is used to return a function to use
// The console allows you to see output

// OBJECTS: An object is a set of Properties and methods
// An object also represent a collection of related data
// Objects can contain primitive data type and also object
// Example of Object
let car = {
    headlight: "2",
    seats: "red",
    mirror: "Broken",
    Tyre: "Flat"
}

const person = {
    name: "John",
    age: 40,
    isStudent: false,
    greet: function (){
        console.log("Hello")
    }
}

// This way of creating objec is by using object literal
// Another way is using construction function or the object.create method to create an object.

// Accessing object Properties: We do this by using the dot notation or square bracket notation
console.log(person.name);
console.log(person["name"]);

// Typeof Operator: This type of operator returns the datatype of a given expression
console.log(typeof 10);
console.log(typeof 3.14);
console.log(typeof "KC");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof [1, 2, 3]);
console.log(typeof {});
console.log(typeof function() {});

// Read on number methods and math objects (Go simple, don't go into complex math objects),
// include examples and prepare to give a 30 minute presentation on Friday.

let fix = 3.27734 
console.log(typeof (fix.toFixed(3)))

// 1. Number()
console.log("integer", Number("58"));
console.log("integer", Number("58a"));
console.log("float", Number("3.142"));
console.log("boolean", Number(true));
console.log("boolean", Number("false"));
console.log("undefined", Number("endefined"));
console.log("null", Number("null"));
console.log("string", Number("yes"));



// Research on random numbers, get a range of numbers and be able to manipulate it.