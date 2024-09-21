
// while loop

let score = 0

// while (score <= 10) {
//     console.log(`value: ${score}`);
//     score += 1
// }

// do while loop 

do {
    console.log(`value: ${score}`);
    score += 2
} while (score <= 20);

// do while loop in Array

const myArray = [ "Dodge Challenger", "Ford Mustang", "Rolls Royce "]

let arr = 0

while (arr < myArray.length) {
     console.log(`my car ${myArray[arr]}`);
    arr ++
}

let myCar = 0

do {
    console.log(`It's My Car: ${myArray[myCar]}`);
    myCar++
} while (myCar < myArray.length);