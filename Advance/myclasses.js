class user {
    constructor(username){
        this.username = username

    }
    logMe(){
            console.log(`USERNAME is a: ${this.username}`);
    }
     createId(){
        return `123`
    }

}
class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}

const student = new teacher('tejas', 't@gmail.com', '123')
// console.log(student);
// student.logMe()
const student1 = new teacher('parth', 'p@gmail.com', '3311')
// console.log(student1);
// console.log(student instanceof user);
console.log(student.createId());