// EXERCISE
// Use find to retrieve a specific order by ID:
const orders = [
    {orderId: 101, customerName: "Alice", total: 250, items: ["Laptop", "Mouse"]},
    {orderId: 104, customerName: "Bob", total: 150, items: ["Smartphone", "Charger"]},
    {orderId: 103, customerName: "Charlie", total: 300, items: ["Tablet", "Keyboard"]},
    {orderId: 104, customerName: "David", total: 100, items: ["Headphones"]},
];

function fet(val){
    return orders.find(order => order.orderId === val) 
}
console.log(fet(103));

function fet(val){
    return orders.filter(order => order.orderId === val) 
}
console.log(fet(104));

// Use find to get a customer by name

function names(val){
    return orders.find(nam => nam.customerName === val)
}
console.log(names("Alice"));

// Formula for generating a number within a range
function generateRandomNumber(min, max){
    min = Math.ceil(min),
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(generateRandomNumber(5, 28));

const randomN = Math.floor(Math.random() * 90) + 10
console.log(randomN);

// ASSIGNMENT: Generate an array of 10 random integers between 1 and 50

const range = Math.floor(Math.random() * 50) + 100
console.log(range);

function generateRandomArray(length, min, max) {
    let randomArray = [];

    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
    return randomArray;
  }
  
  console.log(generateRandomArray(10, 1, 50))