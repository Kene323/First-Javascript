let fix = 3.27734 
console.log(typeof (fix.toFixed(3)))

// Converting to a number
// 1. Number()
console.log("integer", Number("58"));
console.log("integer", Number("58a"));
console.log("float", Number("3.142"));
console.log("boolean", Number(true));
console.log("boolean", Number("false"));
console.log("undefined", Number("endefined"));
console.log("null", Number("null"));
console.log("string", Number("yes"));

// ParseInt
console.log("parseInt1", parseInt("50a"));
console.log("parseInt2", parseInt("-50a"));
console.log("parseInt1", parseInt("a55"));
console.log("parseInt1", parseInt("3.142cm"));

// parseFloat
console.log("parseFloat", parseFloat("3.142cm"));

// Unary Operator (+)
console.log("20" + 20);
console.log(+"20" + 20);

// checking for Special Numbers
// isNaN() and isFinite()
const checking = 2
console.log(isNaN(checking));
console.log(isNaN("checking"));

// FLOORING AND CIELING
// floor
console.log(Math.floor(10.5))
console.log(Math.floor(10))
console.log(Math.floor(10.3))
console.log(Math.floor(101.9))
console.log(Math.floor(-5.6))
console.log(Math.floor(-5.1))
console.log(Math.floor(-5))

// ceil
console.log(Math.ceil(10.5))
console.log(Math.ceil(10))
console.log(Math.ceil(10.3))
console.log(Math.ceil(101.9))
console.log(Math.ceil(-5.6))
console.log(Math.ceil(-5.1))
console.log(Math.ceil(-5))

// Javascript Number Method
// toFixed(): rounds a number to a given number of decimal place and returns a string
const LongDecimal = 3.1415926535
const noDecimal = 3

// Javascript Math Object
// 1. Math.round()
// 2. Math.sqrt()
// 3.Math.pow(value, exponent)
// Math.max() and Math.min()

// Research on random numbers, get a range of numbers and be able to manipulate it.
// Read on Searching using indexOf() and lastIndexOf()
// Splitting a string using split()
// Slicing a string using slice() and substring()
// Replacing substrings using replace() and replaceAll()