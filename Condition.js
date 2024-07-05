// Example
const arr = [1, 10, 35, 43]
if(arr.length > 0){
    console.log("Not Empty")
}

const isRaining = true
if(isRaining){
    console.log("Remember the Umbrella");
}

const n = 10
if(n % 2 === 0)(
    console.log("EVEN")
)

const m = 21
if(m % 2 === 0){
    console.log("EVEN");
}else{
    console.log("ODD");
}

const num = 4
if(Math.floor(num) === num){
    if(num % 2 === 0){
        console.log("EVEN");
    }else{
        console.log("ODD");
    }
}else{
    console.log("FRACTION");
}

const testnum = 21.35
if(Math.floor(testnum) === testnum){
    if(testnum % 2 === 0){
        console.log("EVEN");
    }else{
        console.log("ODD");
    }
}else{
    console.log("FRACTION");
}

// The ELSE-IF is used if there are more than two conditions to account for
// Eg Trying to determine the age category that a perso belongs to: children (0-14), youth(15-24)
// adult(25-64) and senior(65 and above)

let ageCategory = -4
if( ageCategory >= 0 && ageCategory <= 14){
    console.log("Children");
}else if(ageCategory >= 15 && ageCategory <= 24){
    console.log("Youth");
}else if(ageCategory >= 25 && ageCategory <= 64){
    console.log("Adult");
}
else if(ageCategory >= 65){
    console.log("Senior");
}
else{
    console.log("The value entered cannot be someones age");
}

// SWITCH STATEMENT
let rating = 4.7
if(rating === 1){
    console.log("Very Bad");
}
else if(rating === 2){
    console.log("Bad");
}
else if(rating === 3){
    console.log("Good");
}
else if(rating === 4){
    console.log("Average");
}
else if(rating === 5){
    console.log("Excellent");
}

// Converting ELSE-IF to SWITCH-CASE
    switch(rating){
        case 1:
            console.log("Very Bad");
            break
        case 2:
            console.log("Bad");
            break
        case 3:
            console.log("Good");
            break
        case 4:
            console.log("Average");
            break
        case 5:
            console.log("Excellent");
            break
        default:
            console.log("Not Available");
        }

        // Finding vowels or consonant
        let char = "a"
        switch(char){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                console.log("VOWEL");
                break
            default:
                console.log("CONSONANT");
        }
        let text = "cars"
        switch(text[3]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                console.log("VOWEL");
                break
            default:
                console.log("CONSONANT");
        }

        // When not to use SWITCH CASE:
        // 1. When there are just two cases--with 1 being the default.
        // 2. If the comparison operator are not comparison identity(If the operator is not strictely "=")
        
        // CONDITIONAL OPERATOR AKA TERNARY OPERATOR
        // syntax:
        // condition ? trueOutcome : falseOutcome

        // Comparing the ternary operator with if-else statement
        let xx = 10
        if (xx % 2 === 0){
            console.log("EVEN");
            }
        else{
            console.log("ODD");
        }

        // ternary operator
        console.log(xx % 2 === 0 ? "Tenary Even" : "Ternary Operator");
        console.log(`The output is ${xx % 2 === 0 ? "Tenary Even" : "Ternary Operator"}`);

        // Chaining Tenary OPerator
         let ages = 13;
         console.log(ages <= 14 ? "Children" : (ages <= 24 ? "Youth" : ( ages <= 45 ?  "Adults" : "seniors")))

        // Check if a number is positive
        let trialNum = 4
        if(trialNum >= 0){
            console.log("Positive Number");
        }

        // check if a string contains a certain character
        const stringCheck = "Laptop"
        const checkedChar = "p"
        if(stringCheck.includes(checkedChar)){
        console.log(`${checkedChar}is found in ${stringCheck}`);
        }

        // 3. Check if an Array is empty
        const emptyArray = []
        if (emptyArray.length == 0){
            console.log(`This is an empty array`);
        }

        // 4.Check if a user is logged in
        const userLoggedIn = true
        if(userLoggedIn){
            console.log("You are logged in");
        }
        else{
            console.log("Please Log in");
        }

        // 5.Check if a temperature is below freezing point
        const temperature = -26
        if(temperature < 0){
            console.log("Temperature is below freezing point");
        }
        else{
            console.log("Temperature is above freezing point");
        }

        // 6. Grade Evaluation
        const givenscore = 23
        if(givenscore >= 90 && givenscore <= 100){
            console.log("A");
        }
        else if(givenscore >= 70 && givenscore <= 890){
            console.log("B");
        }
        else if(givenscore >= 50 && givenscore <= 69){
            console.log("C");
        }
        else if(givenscore >= 40 && givenscore <= 59){
            console.log("D");
        }
        else if(givenscore >= 20 && givenscore <= 39){
            console.log("E");
        }
        else if(givenscore >= 0 && givenscore <= 19){
            console.log("F");
        }
        else{
            console.log("INVALID INPUT!! TRY AGAIN.");
        }


        // Next class you'll take 20 minutes to explain function