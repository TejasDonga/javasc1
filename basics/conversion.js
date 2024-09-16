let score = "199"
console.log(`score: ${score}`);
console.log(typeof score);

const stringNumber = Number(score);
console.log(typeof stringNumber);
console.log(stringNumber);

// "199" => 199
// "199rt" => NaN
// true => 1; false => 0

const user = "Tejas"

const userLoggin = Boolean(user)
console.log(userLoggin);
console.log(typeof userLoggin);
12
12
12
// 1 => true ; 0 => false
//"Tejas" => true
// "" => false;