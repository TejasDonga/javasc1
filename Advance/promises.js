// const promisesOne = new Promise(function (resolve , reject) {
//     setTimeout(function () {
//         console.log("async task is compelete");
//         resolve()
//     }, 1000);
// });
// promisesOne.then(function () {
//     console.log('Promise is consumed!!');
// })
// const { NumericLogLevel } = require("realm");

// new Promise(function(resolve, reject){
//     setTimeout(function () {
//         console.log('task is complate');
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log('task2 is complate');
// });

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('three complate');
//         resolve({username: 'tejas',age: 20})
//     }, 1000)
// });
// promiseThree.then(function (user){
//     console.log(user.username);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "tejas", age: 20 });
//     } else {
//       reject("ERROR: Something want wrong");
//     }
//   }, 1000);
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => console.log(error)
//   )
//   .finally( () => console.log('The Promise are Done'))

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let error = false;
//       if (!error) {
//         resolve({ username: "tejas", age: 20 });
//       } else {
//         reject("ERROR: Something want wrong");
//       }
//     }, 1000);
//   });

//   async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         const age = response.age
//     console.log(`it's my age:${age}`);
//     } catch (error) {
//         console.log(error);
//     }
//   }
//   consumePromiseFive()

// async function allUser() {
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//     const API = await response.json()
//     console.log(API);
//     } catch (error) {
//         console.log('E:',error)
//     }
// };
// allUser()

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
