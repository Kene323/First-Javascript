//COMMENTING
//(forward slash) or control + /

//VARIABLE DECLARATION AND ASSIGNMENT
//Variable keyword(var, let and const)

/*
//1. Var
var name = "John"
console.log("12", name)
var age = 30
//reassign these variables
var name = "Jane"
age = 28
console.log("16" ,name)


//HOISTING
//1.
console.log(gender)
var gender = "name"
console.log(gender)

//2.
console.log(city);
var city = "Lagos"
console.log(city)

//3.
function greet(){
    console.log(message)
    var message = "computer"
    console.log(message)
}
greet()


// Let and const
let message = "Hi!"
let count = 20
//reassigning
message =  "hello John"
count = 30
console.log(message)
console.log(count)

//
const PI = 3.14
console.log(PI)
//Reassigning a constant
// PI = 5
console.log(PI)

//Reassigning a string and a number
let greeting = "Good Morning"
let temperature = 28
console.log(greeting);
console.log(temperature);

//  Reassigning Boolean Values
let islogged = false
let isAdmin = true

//Reassigning thhe Values
islogged = true
isAdmin = false
console.log(islogged);
console.log(isAdmin);

//Reassigning Arrays
let fruits = ["apple", "banana", "orange"]
let numbers = [1, 2, 3, 4]

//Reassigning the value
fruits = ["pear", "grape", "mango"]
numbers = [15, 26, 32, 45]

console.log(fruits);
console.log(numbers);

//Reassigning Objects
let person = {
    name: "Godwin",
    city: "Lagos",
    isStudent: false,
    isMarried: false,
    religion: "Christainity"
}

person.name = "KC"
person.isStudent = true

console.log(person);
*/

//ASSIGNMENT
//1. Reassign the properties of the keys in this object to the current book you are reading

let book = {
    title: "To Kill a MockingBird",
    author: "Harper Lee",
    pages: 281
}
console.log(book)

book.title = "Eat That Frog!"
book.author = "Brian Tracy"
book.pages = 128
console.log(book)

//2. Declare a variable (favouritefood); first assign it the value of your favourite food, then reassign the value to four least favouriteFood

let favouritefood = "Fried Egg"
console.log(favouritefood);

favouritefood = "brocalli, Okro soup, Macaronie and "
console.log(favouritefood);

//3. Declare an object variable (myfamily and assign it this properties like: (name, age and state); then reassign the values to that of another member of your family

let myfamily = {
name: "Emeka",
age: 17,
state: "Lagos"
}
console.log(myfamily);

myfamily.name = "Chioma"
myfamily.age = 8
console.log(myfamily);
