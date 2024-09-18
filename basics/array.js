

const arr = [1,2,3,4,5];
const arr1 = [6,7,8,9]

// console.log(arr[1]);

            //Array method

        //push & pop

console.log(arr.push());
console.log(arr);

console.log(arr.pop());
console.log(arr);

        //shift & unshift

console.log(arr.unshift(3));
console.log(arr);

console.log(arr.shift());
console.log(arr);

        // slice & splice

console.log(arr.slice(1, 3));
console.log(arr);

console.log(arr.splice(0,3));
console.log(arr);

        // conect two array

const fullarr = arr1.concat(arr);
console.log(fullarr);

        // combine Array

let num1 = [1,2,3,4]
let num2 = [5,6,7]
let num3 = [8,9]

const all = [...num1,...num2,...num3]
console.log(all);


console.log(Array.from("12345")); 


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


const numArray = [1,2,[3,4,[5,6,[7,8,[9]]]]]
const fullArray = numArray.flat(Infinity)
console.log(fullArray);