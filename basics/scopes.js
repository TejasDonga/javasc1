// var a = 10;
// let b = 220;
// {
//     var a = 100;
//     let b = 20
//     console.log('inner',a);
//     console.log('inner', b);
// }

// console.log('outer', a);
// console.log('outer',b);

function one() {
    const username = "parth"
    function two() {
        const website = "tejas.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

// if(true){
//     const country = "India"
//     console.log(country);
//     if(country === "India"){
//         const state = "Gujrat"
//         console.log(state);
//         if(state === "Gujrat"){
//             const city = "ahemdabad"
//             console.log(city);
//             if(city === "ahemdabad"){
//                 console.log("vastrapur")
//             }
//         }
//     }
// }

// *****************************  Interesting **************************************

//================ it's before declaration executed (console)===========


console.log(addone(2));
function addone (num){
    return num + 1
}

//=============== it's expression function ===============


const addtwo = function (num){
    return num +3
}
console.log(addtwo(2));