// const userLogin = true;
// const tem = 20;

// if (userLogin){
//     console.log("tejas");
//     if(!tem){
//         console.log(20);
//     }else{
//         console.log("noting");
//     }
// }else{
//     console.log("parth");
// }

// const score = 100
// if (score > 10) {
//     const power = "fly"
//     console.log(`Power: ${power}`);
// }
// // console.log(`Power: ${power}`);

// if(score) console.log("score: "),console.log("Hi");

// const trushik = 20000;

// if (!trushik) {
//     console.log("Hi");
// }else if(trushik > 18000){
//     console.log("Hello");
// }


// const userUserName = true;
// const userLoginEmail = true;
// const userLoginGoogle = false;

// if (userUserName && userLoginEmail) {
//     console.log("Wellcome our website 😎");
// }

// if(userLoginEmail || userLoginGoogle){
//     console.log("Userlogged");
// }else{
//     console.log("user not logged");
// }


// *******  truthy value  ********

//true , "0", 'false', " " , [] , {} , function () {}

// *******  falsy vlaue  *******

// false , "" , -0 , big int 0n , null , undefined , NaN 

const userName = []

if (userName.lenght === 0) {
    console.log("Array is empty");
}else{
    console.log("Array not a empty ");
}

const emptyobj = {};

if(Object.keys(emptyobj).length === 0){
console.log("object is a empty");
}
if(emptyobj.lenght === 0){
console.log("object is a empty");
}


// nullish coalecing operator (??): null undefined

let val1;
let val2;
let val3;
val1 = null ?? 12;
val2 = undefined ?? 23;
val3 = 12 ?? 23;

console.log(`number : ${val1}`);
console.log(`number : ${val2}`);
console.log(`number : ${val3}`);

// terniary operator

// condition ? true : false

const age = 20;

age > 18 ? console.log("i am adult") : console.log("i am minor");

