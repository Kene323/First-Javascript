// 1. Write a function that multiplies any number by 2 and returns the result
function multiplyByTwo (value) {
    return value * 2
}
console.log(multiplyByTwo(9));

// ARROW FUNCTION
const multiplyByTwob = (value) => {
    return value * 2
}

// or a simplified version
const multiplyByTwoa = value => value * 2
console.log(multiplyByTwoa(3));

// 2. Let's write a function that adds any number by three and returns the result.
    function addByThree (value) {
        return value + 3
    }
    console.log(addByThree(5));
//ARROW FUNCTION 
    const addByThreea = (value) => {
        return value + 3
    }
    console.log(addByThree(4));
// SIMPLIFIED ARROW Function
const addByThreeb = value => value + 3

// 3. Let's write a function that returns the square of that number.
    function getSquare(input) {
         return input * input 
        //  return input**3
    }
    console.log(getSquare(12));

    // ARROW FUNCTION
    const getSquareA = (input) => {
            return input**2
    }
    console.log(getSquareA(5));

    // SIMPLIFIED ARROW
    const getSquareB = input => input**2
    console.log(getSquareB(7));

// 4. Let's write a function that divides any number by 4 and returns the result

// 5. Let's write a function that checks for a number and returns value must be a number if a string or other datatype is passed, else multiply the number by 10

function multiplyByTen(value){
    if(isNaN(value)){
        return `${value} must be a number`
    }
    else{
        return value * 10
    }
}
console.log(multiplyByTen(9));

// ARROW FUNCTION
const multiplyByTenA = (value) => {
    if(isNaN(value)){
        return `${value} must be a number`
    }
    else{
        return value * 10
    }
}
console.log(multiplyByTenA(4));


function oddOrEven(value){
    if(value % 2 === 0){
        return `${value} is an even number`
    }
    else{
        return `${value} is an odd number`
    }
}
console.log(oddOrEven(9));

// ARROW FUNCTION
const oddOrEvenA = (value) => {
    if(value % 2 === 0){
        return `${value} is an even number`
    }
    else{
        return `${value} is an odd number`
    }
}
console.log(oddOrEvenA(4));

// CALLBACK FUNCTION: A callback function refers to a function that has been passed into another function as an arguement
// This callbck funtion will run when the function it is passed into is called.
// The callback function usually serves a purpose inside the function and helps it perform the operation it was created for
// This type of function is used when we want to execute code sequentially or after another code runs first

//When passing a function as a callback to another function, we don't include any bracket
/*
function trial1(value){
    return value
}

function inTrial1(){
    return "This string is from inTrial1"
}

console.log(trial1(inTrial1()));

numb1 = 4

function trial2(value, value2){
    return value - value2
}
function inTrial2A(numb1){
    return numb1 * 3
}
function inTrial2B(numb1){
    return numb1 / 2
}

console.log(trial2(inTrial2A(), inTrial2B()));
console.log(trial2(inTrial2A(), inTrial2A()));
console.log(trial2(inTrial2B(), inTrial2A()));
*/

function trial1(value){
    return value
}

function inTrial1(){
    return "This string is from inTrial1"
}
function trial3() {
    return "This is a string of trial 3" 
}

console.log(trial1(inTrial1()));
console.log(trial1(trial3()));


function trial2(value, value2){
    return value - value2
}
function inTrial2A(numb1){
    return  12
}
function inTrial2B(numb1){
    return  2
}

console.log(trial2(inTrial2A(), inTrial2B()));
console.log(trial2(inTrial2A(), inTrial2A()));
console.log(trial2(inTrial2B(), inTrial2A()));