/*
// 1. shift()
// The shift() method is used to remove the first element from an array and return that element.
let arrayOfColors = ["red", "blue", "green", "yellow", "purple"];
let mixedShiftArray1 = arrayOfColors.shift()
console.log(arrayOfColors); // Expected Output: ['blue', 'green', 'yellow', 'purple']
console.log(mixedShiftArray1); // Expected Output: red

let arrayOfAnimals = ["dog", "cat", "gorilla", "bird", "cow"];
let mixedShiftArray2 = arrayOfAnimals.shift()
console.log(arrayOfAnimals); // Expected Output: ['cat', 'gorilla', 'bird', 'cow']
console.log(mixedShiftArray2); // Expected Output: dog

let arrayOfNames = ["John", "Paul", "Henry", "Jane", "Mary"];
let mixedShiftArray3 = arrayOfNames.shift()
console.log(arrayOfNames); // Expected Output: ['Paul', 'Henry', 'Jane', 'Mary']
console.log(mixedShiftArray3); // Expected Output: John


// 2. map()
// The map() method iterates over an array and changes it's elements according 
// to the callback function in the map method, then creates a new array to hold the changed elements.
let arrayOfNumbers = [10, 20, 30, 40 ,50]
let increaseByFive = arrayOfNumbers.map(addTo)
function addTo (value) {
    return value + 5
}
console.log(arrayOfNumbers); // Expected Output: [10, 20, 30, 40, 50]
console.log(increaseByFive); // Expected Output: [15, 25, 35, 45, 55]

// It is alos possible to create the function inside the map() method
let arrayOfEvenNumbers = [2, 4, 6, 8, 10, 12]
let multiplyByFour = arrayOfEvenNumbers.map(mul => mul * 4)
console.log(arrayOfEvenNumbers); // Expected Output: [ 2, 4, 6, 8, 10, 12 ]
console.log(multiplyByFour); // Expected Output: [ 8, 16, 24, 32, 40, 48 ]

// It is also possible to place other methods in the map() method
let arrayOfFloats = [1.68, 35.224, 5.67, 7.5, 9.82, 17.11]
let roundDown = arrayOfFloats.map(Math.floor)
console.log(arrayOfFloats); // Expected Output: [ 1.68, 35.224, 5.67, 7.5, 9.82, 17.11 ]
console.log(roundDown); // Expected Output: [ 1, 35, 5, 7, 9, 17 ]

// 3. filter()
// The filter() method iterates over an array and creates a new array containing elements from 
// the original array that met the conditions of the callback function in the method
let arrayOfNumbers = [12, 37, 29, 3, 15, 62]
let arrayOfEvenNumbers = arrayOfNumbers.filter(evenCheck)
function evenCheck(value) {
    return value % 2 === 0
}
console.log(arrayOfNumbers.filter(evenCheck));
console.log(arrayOfNumbers); // Expected Output: [ 12, 37, 58, 3, 15, 62 ]
console.log(arrayOfEvenNumbers); // Expected Output: [ 12, 62 ]

//Filter for numbers over 20
let NumbersOverTwenty = arrayOfNumbers.filter(val => val > 20)
console.log(NumbersOverTwenty); // Expected Output: [ 37, 29, 62 ]

let arrayX = [32,"book", 78, "frog", true, "tree"]
let noNumbers = arrayX.filter(checkFor)
function checkFor(value){
    if (isNaN(value)){
        return value
    }
}
console.log(arrayX); // Expected Output: [ 32, 'book', 78, 'frog', true, 'tree' ]
console.log(noNumbers); // Expected Output: [ 'book', 'frog', 'tree' ]

// Filter strings longer than 3 chararcters
const words = ["apple", "cat", "banana", "dog", "elephant"]
filterWords = words.filter(val => val.length > 3)
console.log(filterWords);

let changeWord = words.map(val => val.length)
console.log(changeWord);

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 17},
    {name: "Charlie", age: 30},
    {name: "David", age: 15}
]
let voteAge = people.filter(value => value.age >= 18)
console.log(voteAge);

// join all elements in an array into a string
const myColor = ["Red", "Green", "White", "Black"]
let combo = myColor.toString()
console.log(combo);

let combo2 = myColor.join()
console.log(combo2);

// 4. reduce()
// The reduce() method iterates over an array, accumulating a single value as it passes each element.
// The final value depends on the elements in the array and the callback function in the reduce() method.
let numbers = [17, 43, 6, 95, 28];

let maxNumber = numbers.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}, 0);
console.log(maxNumber); // Expected Output: 95

let minNumber = numbers.reduce(function(accumulator, currentValue) {
    return Math.min(accumulator, currentValue);
}, Infinity);
console.log(minNumber); // Expected Output: 6

let numberSum = numbers.reduce(sum)
function sum(accumulator, currentValue) {
    return accumulator + currentValue
}
console.log(numberSum); // Expected Output: 189

*/
// 5. find()
// The find() methods searches through an array and returns the first element that meets the condition
// of the callback function in the method.
let array = [1, 5, 3, 8, 6, 2, 7, 5, 4, 7, 8]

let findEvenNumber = array.find(val => val % 2 === 0)
console.log(findEvenNumber); // Expected Output: 8

let findSpecific = array.find(val => val === 7) 
console.log(findSpecific); // Expected Output: 7

// find the first number in the array that is greater than 10
const findNum = [4, 9, 16, 25, 2]
const findSpecificNum = findNum.find(val => val > 10)
console.log(findSpecificNum);
// find the first string in the array that has more than 4 characters
const findString = ["cat", "dog", "elephant", "tiger", "fish"]
const findSpecificString = findString.find(val => val.length > 4)
console.log(findSpecificString);

// forEach()
// The forEach() iterates an array.
// It executes the function once for each element and modifies the original array.
// The method doesn't return anything therefore we cannot chain it with another array method.
const forEachNumber = [1, 2, 3, 4, 5]
const result = forEachNumber.forEach(num => num * 3)
console.log(result);

// example: use forEach to log element
forEachNumber.forEach(num => console.log(num))

// Using forEach to modify the Original array
forEachNumber.forEach((element, index, array) =>{
    array[index] = element * 3
})
console.log(forEachNumber);

// Using foreach to modify the elements in the array to upperCase
const forEachString = ["hello", "world", "backend", "javascript"]
forEachString.forEach((string, ind, arr) => {
    arr[ind] = string.toUpperCase()
}) 
console.log(forEachString);

// adding prefix to strings using the forEach
const prefixForEach = ["cat", "dog", "bird"]
const prefix = "My"
prefixForEach.forEach((string, index, array) => {
    array[index] = `${prefix} ${string}`
})
console.log(prefixForEach);

/*
// 6. includes()
// This method is used to check whether a specific value is included among it's elements.
// It returns a boolean, that is if the element is included it returns true and if not it returns false.
let arrayOfInsects = ["Beetle", "Bee", "Ant", "Cockroach", "Fly", "Mosquito"]
let searchFor = "Spider"
let searchFor2 = "Ant"
console.log(arrayOfInsects.includes(searchFor)); // Expected Output: false
console.log(arrayOfInsects.includes(searchFor2)); // Expected Output: true

let numberArray = [43, 67, 93, 7, 62]
let searchfor3 = numberArray.includes(67)
let searchfor4 = numberArray.includes(60)
console.log(searchfor3); // Expected Output: true
console.log(searchfor4); // Expected Output: false

// 7. slice()
// This methods creates a new array containing copies of elements from the original array,
// taken fom a specified starting and ending index but the value at the ending indexis excluded.

let sequence = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sequence.slice(3, 7)) // Expected Output: [ 3, 4, 5, 6 ]

// If the ending index isn't specified the new array will take from the 
// element of the starting index to the last element of the array.

console.log(sequence.slice(5)) // Expected Output: [ 5, 6, 7, 8, 9, 10 ]

let arrayOfColors = ["brown", "pink", "gold", "black", "cyan"]
console.log(arrayOfColors.slice(0,3)); // Expected Output: [ 'brown', 'pink', 'gold' ]
console.log(arrayOfColors.slice(1,5)); // Expected Output: [ 'pink', 'gold', 'black', 'cyan' ]

// 8. splice()
// The splice() method changes an array by either removing or replacing an existing element in 
// the array or adding new elements to the array.
// If an element is removed it returns the removed element and the array will return with the changes made to it

//Removing elements
let animals = ["horse", "bear", "goat", "owl", "bat", "eagle"]
flyingAnimals = animals.splice(3, 3) // (starting from index 2, remove 3 element)
console.log(animals); // Expected Output: [ 'horse', 'bear', 'goat' ]
console.log(flyingAnimals); // Expected Output: [ 'owl', 'bat', 'eagle' ]

// Replacing Elements
replacedAnimals = animals.splice(0, 2, "cow", "kangaroo") // Replace elements at index 0 and 2 with "cow" and "kangarro" respectively
console.log(animals); // Expected Output:  [ 'cow', 'kangaroo', 'goat' ]
console.log(replacedAnimals); // Expected Output: [ 'horse', 'bear' ]

// Adding Elements
addedAnimals = animals.splice(2, 0, "wolf", "bull") // Before index 2 add "wolf" and "bull"
console.log(animals); // Expected Output: [ 'cow', 'kangaroo', 'wolf', 'bull', 'goat' ]

// 9. sort()
// The sort() methods takes an array and will arrange it's elements, if it is an array of strings it'll
// sort it alphabetically and if it is an array of numbers it will sort it from smallest to largest
let charArray = ['v', 'k', 'w', 'a', 'r', 'h', 'f', 'j']
let stringArray = ["Jessica", "Paul", "Emmanuel", "Franklin", "Jennifer", "Abiola"]
let numberArray = [75, 43.213, 87.5, 31.8, 25.72, 43.445, 89]
console.log(charArray.sort()); // Expected Output: ['a', 'f', 'h', 'j', 'k', 'r', 'v', 'w']
console.log(stringArray.sort()); // Expected Output: ['Abiola', 'Emmanuel', 'Franklin', 'Jennifer', 'Jessica', 'Paul' ]
console.log(numberArray.sort()); // Expected Output: [ 25.72, 31.8, 43.213, 43.445, 75, 87.5, 89 ]
// 10. reverse()
// The reverse() method is used to reverse the order of elements in an array.
let numbers = [1, 2, 3, 4]
let alphabets = ['a', 'b', 'c', 'd']
let strings = ["red", "blue", "yellow", "green"]
console.log(numbers.reverse()); // Expected Output: [ 4, 3, 2, 1 ]
console.log(alphabets.reverse()); // Expected Output: [ 'd', 'c', 'b', 'a' ]
console.log(strings.reverse()); // Expected Output: [ 'green', 'yellow', 'blue', 'red' ]
*/