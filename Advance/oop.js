const user = {
    username: 'tejas',
    age: 20,
    adult: true,
    detail: function () {
        console.log(`my name is ${this.username}`);
    }
}

    // console.log(user.adult);
    // console.log(user.detail());


    const User = function (username , age , adult) {
        this.username = username
        this.age = age
        this.adult = adult

        return this
    }
const userOne = new User('tejas', 20 , true)
const userTwo = new User('parth', 22 , false)
console.log(userOne);
console.log(userTwo);