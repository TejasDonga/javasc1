const  Array = 'tejas    ' 
let another = 'parth   '
// console.log(typeof Array);

Object.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`Length :${this.trim().length}`);
}
// Array.truelength()
// another.truelength()

let num = [1,2,3,4,5]
let nums = [1,2,3,4,5,6,7,8,9,10]


Object.prototype.sum = function () {
    const total = this.reduce( (acc, curr) => acc + curr, 0);
    console.log(total);
}
num.sum()
nums.sum()

Object.prototype.mul = function () {
    const mul = this
                .map( (mul)=> mul *10)
                .filter((mul) => mul < 100 );
    console.log(mul);
}
num.mul()
nums.mul()
