// An Array is a list of elements or an ordered list of items

// ARRAY LITERALS
let arrayName = ["element1", "element2", "element3", "element4"]
console.log(arrayName.length);
console.log(arrayName[1]);

// Simple array of numbers
const arrayNumbers = [1, 2, 3, 4, 5]
console.log(arrayNumbers);

// Array of different datatypes
const mixedArray = [45, "hello", true, {name: "Marvelous"}, [10, 20, 30]]
console.log(mixedArray);

// NESTED ARRAYS
let nestedArray = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9]
]
console.log(nestedArray);

// Accessing Array Elements

console.log(arrayName[0]);
console.log(arrayNumbers[1]);
console.log(mixedArray[2]);
console.log(nestedArray[2]);
console.log(nestedArray[2][1]);

// Modifying array elements
arrayNumbers[4] = 10
console.log(arrayNumbers);

nestedArray[0][2] = 8
console.log(nestedArray);

// ARRAY METHODS
// 1. PUSH adds one or more elements to the end of an array. Returns the new length of th Array
// Example

let fruits = ["apple", "banana"]
fruits.push("Orange")
console.log(fruits);
console.log(fruits.push());

let number = [1, 2, 3]
number.push(5, 6, 7)
console.log(number);

let names = ["alice"]
let newLength = names.push("Emeka", "Daniel")
console.log(names);
console.log(newLength);

// 2. pop(): Removes the last element in an array. Returns the element that is removed
let lastFruit = fruits.pop()
console.log(lastFruit);
console.log(fruits);

let lastnumber = number.pop()
let lastname = names.pop()
console.log(lastnumber);
console.log(lastname);

//3. shift(): Removes the first element from an array and returns that element
let colors = ["red", "green", "blue", "yellow"]
let firstColor = colors.shift()
console.log(firstColor);
console.log(colors);

// Removing elements from an array using shift()
let person = [
    {name: "Johnny", dept: "science"},
    {name: "Debby", dept: "art"},
    {name: "Jude", dept: "commercial"}
]

let firstArrayObject = person.shift()
console.log(firstArrayObject);
console.log(person);

// using shift on an empty array
let emptyArrayShift = []
let removeShift = emptyArrayShift.shift()
console.log(removeShift);
console.log(emptyArrayShift);

// Combining shift() with other methods
let mixedShiftArray = [1, "apple", true, null]
// 1. Remove the first element
const firstElement = mixedShiftArray.shift()
// 2. Iterate through the array and check if it's a string,  convert to uppercase else return the element

let mappedArray= mixedShiftArray.map(item => (typeof item === "string" ? item.toUpperCase() : item))
console.log(mappedArray);
console.log(mixedShiftArray);

// ASSIGNMENT
// Merge the three arrays into a single array called combinedArray

// POSTING ASSIGNMENT
// Start with a summary of what the post is about
// Write a short note on the following methods, list 3 examples for each:
// 1. shift
// 2. map
// 3. filter
// 4. foreach
// 5. reduce
// 6. find
// 7. include
// 8. slice
// 9. splice
// 10. sort
// 11. reverse