// get current day

const day = new  Date().getDay();

switch (day) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;

    default:
        console.log("can't find ");
        break;
}

// get current month

const month = new Date().getMonth();

switch (month) {
    case 0:
        console.log("January");
        break;
    case 1:
        console.log("February");
        break;
    case 2:
        console.log("March");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break;
    case 7:
        console.log("August");
        break;
    case 8:
        console.log("September");
        break;
    case 9:
        console.log("October");
        break;
    case 10:
        console.log("November");
        break;
    case 11:
        console.log("December");
        break;

    default:
        console.log("Can't find");
        break;
}


// get current date

const date = new Date().getDate();

console.log(`today's date is : ${date}`);