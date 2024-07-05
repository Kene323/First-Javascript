// Constant
// Const name = value
const ADMIN_INPUT = "admin"

// Multiple Constant
const name = 1,
name2 = 3,
name3 = 4;

console.log(name2)

function centimeters(inches) {
    const CENTIMETERS_PER_INCH = 2.54
    let centiM = inches * CENTIMETERS_PER_INCH
    console.log(centiM, "Centimeters")
}
centimeters(55)

function areaOfCircle(radius) {
    const PI = 3.14
    let area = PI * radius**2
    console.log(area, "Centimeters Square")
}
areaOfCircle(7)

// Swappimg Boolean Values
let flag1 = true
let flag2 = false
let flag3 = flag1

flag1 = flag2
flag2 = flag3
console.log("flag1", flag1)
console.log("flag2", flag2)

// Swapping Names
let firstname = "John"
let lastname = "Paul"

console.log(firstname, lastname)
// Declare a Temporal Variable
let newname = firstname

firstname = lastname
lastname = newname

console.log( `${firstname} ${lastname}`)


console.log(typeof [])
console.log(typeof null)
