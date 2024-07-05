// A loop is merely a block of code together with some sort of of instruction on how long to keep the code running

// syntax
// for(initialization; condition; upadte){
    // 
// }
// Note: The semicolumns are imporant, a for loop must have exactly 2

for ( let i = 0; i < 5; i++ ){
    console.log(i);
}

// example: simple counting up to 50
for( let i = 0; i <= 50; i++ ){
    console.log(i);
}

// create a multiplication take using for loop
const multipleTwo = 2
for (let i = 1; i <= 12; i++){
    console.log(`${multipleTwo} X ${i} = ${multipleTwo * i}`);
}

const multipleThree = 3
for (let i = 1; i <= 12; i++){
    console.log(`${multipleThree} X ${i} = ${multipleThree * i}`);
}

// ITERATING OVER AN ARRAY
let forNumber = [1, 10, 5, 9, 11]
for(let i = 0; i < forNumber.length; i++){
    console.log(forNumber[i]);
}

// example X
let str = "the boy is good"
const words = str.split(" ")
console.log(words);

for (let i = 0; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
}
console.log(words);
console.log(words.join());

// h/w: join the array back to a string
// Repeat what was done in example X for str1, str2, str3.

let str1 = "The sun descends"
const strWords = str1.split(" ")
console.log(strWords);

for (let i = 0; i < strWords.length; i++){
    strWords[i] = strWords[i].charAt(0).toUpperCase() + strWords[i].slice(1)
}
console.log(strWords);
console.log(strWords.join());

let str2 = "painting the sky in hues of gold and pink"
const strWords2 = str2.split(" ")
console.log(strWords2);

for (let i = 0; i < strWords2.length; i++){
    strWords2[i] = strWords2[i].charAt(0).toUpperCase() + strWords2[i].slice(1)
}
console.log(strWords2);
console.log(strWords2.join());

let str3 = "as shadows dance upon the earth"
const strWords3 = str3.split(" ")
console.log(strWords3);

for (let i = 0; i < strWords3.length; i++){
    strWords3[i] = strWords3[i].charAt(0).toUpperCase() + strWords3[i].slice(1)
}
console.log(strWords3);
console.log(strWords3.join());

// Leave the first letters in uppercase and turn the rest to lowercase
let str4 = "WHISPERING SECRETS TO THE NIGHT"
const strWords4 = str4.split(" ")
console.log(strWords4);

for (let i = 0; i < strWords4.length; i++){
    strWords4[i] = strWords4[i].charAt(0) + strWords4[i].slice(1).toLowerCase()
}
console.log(strWords4);
console.log(strWords4.join());

// Create an array and initialize it with html, css, javascript

const dev = ["HTML", "CSS", "Javascript", "React"]
console.log(dev[0]);
console.log(dev[1]);
console.log(dev[2]);
console.log(dev[3]);

// Accessing the last element with .length
console.log(dev[dev.length - 1]);

// Modify the second element, change CSS into Bootstrap
dev[1] = "Bootstrap"
console.log(dev);

// Add nodejs at the end of the array
dev.push("node.js")
console.log(dev);

// Add an element to the begining
dev.unshift("Web Development")
console.log(dev);

// Remove and return the last element
console.log(dev.pop());

// Removes the first
console.log(dev.shift());
console.log(dev);

dev.splice(1, 2)
console.log(dev);
dev.push("Typescript", "React-redux")
console.log(dev);

// Iterate through the array and add a sentence

for(let i = 0; i < dev.length; i++){
    console.log(`${dev[i]} is a Programming tool`);
}

// Create an array and filter for values more than 10
const integers = [0, 10, 15, 20]
console.log(integers.filter(val => val > 10));

// Filter out elements not at the index 0

function stc(curr, ind){
    return  ind === 0
}
console.log(integers.filter(stc));

const number = [1, 2, 3, 4, 5, 6]
// function evenKeep(val){
//     return val % 2 === 0
// }

function sqr(val){
    return val**2
}
console.log(number.filter(val=>{return val % 2 === 0}).map(val=>{return val**2}))

// Create an array from a-m
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"]
const isEvenIndex = alphabet.filter(evn)

function evn(curr, ind){
    return ind % 2 === 0
}
console.log(isEvenIndex);

// Filter the active users
const activeUsers = [
    {id:1, name: "Tosin", isActive: true},
    {id:2, name: "Babatunde", isActive: false},
    {id:3, name: "Vera", isActive: true},
    {id:4, name: "Patience", isActive: false}
] 

console.log(activeUsers.filter(curr=>curr.isActive));

// Filtering orders above a certain number (100)
const orders = [
    {orderId: 1, total: 50},
    {orderId: 2, total: 150},
    {orderId: 3, total: 200},
    {orderId: 4, total: 75}
]

console.log(orders.filter(val => val.total > 100));

const list = ["January", "March", "April", "June"]

list.splice(1, 0, "Febuary")
console.log(list);

list.splice(4, 1, "May")
console.log(list);

// Swapping Elements

const integ = [1, 2, 3, 4, 5];
[integ[1], integ[4]] = [integ[4], integ[1]];
console.log(integ);

const arrAlphabet = ["e", "b", "c", "d", "a"];
[arrAlphabet[0], arrAlphabet[4]] = [arrAlphabet[4], arrAlphabet[0]];
console.log(arrAlphabet);

console.log(arrAlphabet.slice(0, -1));

// How to remove falsy values from an array
// false, 0, empty string, null, undefined, NaN

const arrayWithFalsyValues = [0, 1, false, 2, "", -12, 3, "a", null, "b", undefined, "c", NaN]

console.log(arrayWithFalsyValues.filter(Boolean));

console.log(arrayWithFalsyValues.filter(val => {
    if(val){
        return val}
}));

console.log(arrayWithFalsyValues.filter(val => val));


if([]){
    console.log("true");
}else{
    console.log("false");
}

if(0){
    console.log("true");
}else{
    console.log("false");
}

if({}){
    console.log("true");
}else{
    console.log("false");
}

if(null){
    console.log("true");
}else{
    console.log("false");
}

const emptArr = []

for (i = 0; i < arrayWithFalsyValues.length; i++){
    if(arrayWithFalsyValues[i]){
        emptArr.push(arrayWithFalsyValues[i])
    }
}
console.log(emptArr);

// Remove a  character from a string
const strRemove = "House"
const newStrRemove = strRemove.replace("K", "C")
console.log(newStrRemove);

const removeStr = strRemove.slice(1)
console.log(removeStr);

console.log(strRemove.slice(0, -1));

function removeFistLast (val) {
    const removeFirst = val.slice(1)
    const removeLast = removeFirst.slice(0, -1)
    return removeLast
}

console.log(removeFistLast(strRemove));

// Perform the example above for split, splice and join

console.log(strRemove);
const remove = strRemove.split("")
remove.splice(2, 1, "r")
console.log(remove.join(""));

// Using Co-ersion (Turning string to number by multiplying by 1)
const strNumber = "100"
const strNumberOne = strNumber * 1
console.log(strNumberOne);
console.log(typeof strNumberOne);

// Using Number Function
const strNumberFunction = Number(strNumber)
console.log(strNumberFunction);
console.log(typeof strNumberFunction);

// Using Unary(+) Operator
const strNumberUnary = +(strNumber)
console.log(strNumberUnary);
console.log(typeof strNumberUnary);

// Using Math Method
const strNumberFloor = Math.floor(strNumber)
console.log(strNumberFloor);
console.log(typeof strNumberFloor);

const spreadArray = ["Javascript", "CSS", "HTML"]

const newSpreadArray = [...spreadArray, "Typescript"]

console.log(newSpreadArray);

const spliceArray = ["Javascript", "CSS", "HTML"]
spliceArray.splice(2, 0, "React", "Angular")
console.log(spliceArray);

// One minor difference is what they convert of undefined or null,

// Number() Or Number(null) Or Number('') // returns 0
// while

// parseInt() Or parseInt(null) // returns NaN

console.log(parseInt(null));
console.log(Number(null));

console.log(parseInt());
console.log(Number());

console.log(parseInt(''));
console.log(Number(''));

console.log(parseInt(undefined));
console.log(Number(undefined));

const cut = "PrOGramMING"
const mid = Math.floor(cut.length / 2)
const firstHalf = cut.slice(0, mid)
const secondHalf = cut.slice(mid)
const result = firstHalf.toUpperCase() + secondHalf.toLowerCase()
console.log(result);

const emp = []
for (let i = 0; i < cut.length; i++){
    if (i < mid){
        emp.push(cut[i].toUpperCase());
    }
    else{
        emp.push(cut[i].toLowerCase());
    }
}console.log(emp.join(""));

