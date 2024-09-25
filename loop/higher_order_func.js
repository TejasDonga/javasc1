const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let titles = books.filter((bk) => (bk.publish < 2000))

titles = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})
// console.log(titles);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = num.map( (num) => num * 2 )
const result = num
    .map((num) => num * 10)
    .map( (num) => num + 2)
    .filter( (num) => num < 40)
// console.log(result);

// reduce ()

const num1 = [1,2,3,4,5,6,7,8,9]

const result1 = num1.reduce( (acc, curr ) => acc + curr, 0)
// console.log(result1);


const user = [
    {
        itemName: 'phone',
        price: 129999
    },
    {
        itemName: 'cover',
        price: 1299
    },
    {
        itemName: 'charning',
        price: 12999
    }
]

const myTotle = user.reduce(function (acc, curr) {
    return acc + curr.price
},0)
console.log(myTotle);