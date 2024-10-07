const pi =  Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(pi);

const user = {
    name: 'tejas',
    age: 20,
    detail: function () {
        console.log('Hello');
    }
}
console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user, 'name',{
    writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));


for (const [key , value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}