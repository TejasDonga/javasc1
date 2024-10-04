function setUserName(username) {
    this.username = username
    console.log("called");
}

function creataUser(username , email, password ){
    setUserName.call(this,username)
    this.email = email
    this.password =password

}
const newUser = new creataUser('tejas','tejas@gmail.com', '123')
console.log(newUser);