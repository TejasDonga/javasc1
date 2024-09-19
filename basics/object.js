//object literals

const mySym = Symbol()

const user = {
    name: "tejas",
    "age": 20,
    email: "tejas@google.com",
    [mySym]: "R"

}
 const user1 = {
    name: "jatin",
    age: 23
 }


// console.log(user.age);
// console.log(user["email"]);
// console.log(user.age = 10);
// console.log(user);
// console.log(user.mySym);

// Object.freeze(user1)
//  console.log(user1.age = 10);
// delete user1.age;
// console.log(user1);

// user.funs = function(){
//     console.log("add");
// }
// console.log( 'this is',user);

user1.fun = function () {
    console.log(`hi i am ${user1.name}`);
}

// console.log(user1);


// Single turn Object 

const myUser1 = new Object()

// non Single turn object

const myUser = {}

myUser.id = "123abc"
myUser.name = "tejas"
myUser.login = true

// console.log(myUser);

const regularUser = {
    email: "tejas@gmail.com",
    fullname: {
        firstname: "tejas",
        lastname: "patel"
    },
    age: 20
}
// console.log(regularUser.fullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4);
const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj5);

const users = [
    {
        id:1,
        name: "tejas",
        age: 20
    },
    {
        id:2,
        name: "parth",
        age:23
    },
    {
        id:3,
        name:"jatin",
        age:22
    }
]
// console.log(users[0].id)
// console.log(Object.keys(users[1]));
// console.log(Object.values(users[1]));
// console.log(Object.entries(users[1]));

// console.log(users[1].hasOwnProperty("age"));



         // de-structures keys

const data = {
    name:"tejas",
    age: 20,
    study:"JS"
}

const {name: myName} = data;

console.log(myName);