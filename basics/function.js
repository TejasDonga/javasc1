// function sum(num1 , num2) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 + num2
//     }else {
//         return "enter a valid number"
//     }
// }
// const result = sum(1,4);

// console.log(result);


// function user(username){
//     if(!username){
//         return " enter a UserName"
//     }
//     return `my name is a ${username}`
// }

// console.log(user("tejas"));



function carditem(...item){
    return item
};
console.log(carditem(100,200,3300));

const user = {
    product: "iphone",
    price: 100000
}
const user1 ={
    product: "redmi",
    price: 50000
}

function hendelUser(anyobject){
        console.log(`Your mobile is a ${anyobject.product} and price ${anyobject.price}$`);

}
hendelUser(user1);

const arr = [100,200000000,300,400,500]

function hendelarr(arry){
    console.log(` ${arry[1]}$`);
}
hendelarr(arr);