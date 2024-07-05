console.log("".length);
console.log(" ".length);
console.log("Hello World!".length);
// Template literal/backtick

// It can be used to log messages with dynamic data

let user = "Godwin";
let action = "Login";
let timestamp = new Date().toLocaleTimeString();

let logMessage = `At ${timestamp} user ${user} performed ${action}`
console.log(logMessage);

// to create configuration files
let port = 8080
let dbHost = "Local Host"
let dbUser = "root"
let dbPassword = "Password"

let config = `
{
    "server": {
        "port": ${port}
    }
    "database": {
        "host": "${dbHost}"
        "user": "${dbUser}"
        "password": "${dbPassword}"
    }
}
`
console.log(config);

// String Methods
// 1. Changing casing using toUpperCase() and toLowerCase()
let userInput = "helLoWoRld"
 let normalInput = userInput.toLowerCase()
 let upperNormalInput = userInput.toUpperCase()
 console.log(normalInput);
 console.log(upperNormalInput);

 let storedInput = "helloworld"
 if(upperNormalInput === storedInput) {
    console.log("Usernames Match");
 }else{
    console.log("Usernames don't match");
 }

//  2. Triming whitespaces using trim(), trimStart() and trimEnd()
// This removes whitespace from an input.
let unTrim = "       Hello world   "
console.log(unTrim.length);
console.log(unTrim.trim().length);