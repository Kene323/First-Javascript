let sentence1 = "An apple a day keeps the doctor"
let sentence2 = "She reached for the juicy red apple on the kitchen counter"

let find = "APPLE"
const search2 = sentence1.toUpperCase().split(" ")
const selectElement = search2.slice(search2.indexOf(find), search2.indexOf(find)+1)
console.log(selectElement.toString());

let phoneNumberDashed = "123-456-7890"
let trimNumber = phoneNumberDashed.replaceAll("-", "")
console.log(trimNumber);

