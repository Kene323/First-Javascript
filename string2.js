// Replacing substrings using replace() and replaceAll()

const words = "The bag is black. The bag is on the table. My books are inside the bag."
const byWhiteSpace = words.split(" ").join("+")
const byFullStop =words.split(".").join("=")
console.log(byFullStop);
console.log(byWhiteSpace);
// 
let message2 = " When candles are out"
console.log(message2.trim().toUpperCase())

// 
let username1 = "MirAclE5843"
let username2 = username1.toLowerCase()
let username3 = username2.slice(0, 1).toUpperCase() + username2.slice(1)
let greet = `Welcome ${username3}`
console.log(greet);

