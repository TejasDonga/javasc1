const myArray = ["js", "py","r","java","cpp"]

// myArray.forEach( function (item , index){
//     console.log(index,'=>', item);
// } )

// myArray.forEach( ( index , item) => {
//     console.log( item, '=> ', index);
// } )

myArray.forEach(name)
function name(item , index){
    // console.log(index , '=>', item);
}

const user = [
    {
        firstName:"tejas",
        lastName:"patel"

    },
    {
        firstName:"parth",
        lastName:"patel"

    },
    {
        firstName:"jatin",
        lastName:"patel"

    }
    
]
user.forEach(userName)

function userName(user , index) {
    console.log(index+1, '=>',user.firstName);
}