
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    j: "java"
}

for (const key in myObject) {
    // console.log(`${key} => ${myObject[key]}`);
}

const myArray = ["js", "py","r","java","cpp"]

for (const key in myArray) {
    // console.log( key , '=>',myArray[key]);
} const map = new Map()
map.set(1, "Tejas")
map.set(1, "Tejas")
map.set(2, "parth")
map.set(3, "jatin")
// console.log(map);

//********* map is not iterator can't use in loop *********

for (const key in map) {
    console.log(map[key]);
}
