// //  for if loop

// const arr = [1,2,3,4,5,6,7,8,9]

// for (const array of arr) {
//     // console.log(array);    
// }

// const myName = "Tejas"

// for (const name of myName) {
//     // console.log(name);
// }

// const map = new Map()
// map.set(1, "Tejas")
// map.set(1, "Tejas")
// map.set(2, "parth")
// map.set(3, "jatin")
// // console.log(map);
// for (const [myName, value] of map) {
//     // console.log( myName, '=>',value);
// }

const myObject = {
        'name': "tejas",
        'age': 20
    }

for (const [key , value] of myObject) {
    console.log(key, value);
}