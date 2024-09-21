// for

// for (let i = 1; i <= 10; i++) {
//         const element = i;
//         if (element == 5) { 
//             console.log("it's five");
//         }
//         console.log(element);
// }

// inner forloop

for (let i = 1; i <= 10; i++) {
    // console.log(`outer value: ${i}`);
        for (let j = 0; j <= 10; j++) {
            // console.log(`inner value: ${j}`);
            // console.log(i + '-' + j + ' = ' + i*j);
            // console.log(`${i}-${j}= ${i*j}`);
            
        }
    
}

// Array in foe loop

const myArray = [ "Dodge Challenger", "Ford Mustang", "Rolls Royce "]

for (let i = 0; i < myArray.length; i++) {
        const carName = myArray[i]
        // console.log(carName);
    
}

// break and continue

console.log("Using break");
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log(`it's five: ${element}`);
        break;
    }
    console.log(element);
}

console.log("Using continue");

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log(`it's five: ${element}`);
        continue;
    }
    console.log(element);
}
