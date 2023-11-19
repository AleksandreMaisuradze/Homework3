console.log("///1");
function positiveSum() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}

let array = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];
let result = positiveSum();

console.log(result);

console.log("///2");

function numberSum() {
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        sum += array1[i];
    }

    return sum;
}

let array1 = [10, 50, 6, 7, 8, 11, 6, 3, 9];
let result1 = numberSum();

console.log(result1);



console.log("///3");

function userProperties() {
    let user = {
        firstname: 'tom',
        lastname: 'tobias',
        age: 32,
        isloggedin: true
    }

    if (user.isloggedin === true) {
        return user.firstname + ' ' + user.lastname;
    }
    else if (user.isloggedin === false) {
        return false;
    }



}
let result2 = userProperties();

console.log(result2);



console.log("///5");

function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log('this number is even');
    }
    else {
        console.log("this number is odd");
    }
}

evenOrOdd(5)

console.log("/////6");

let array2 = ['html', 'css', 'python', 'javascript', 'bootstrap'];

for (let i = 0; i < array2.length; i++) {
    if (array2[i].length > 4) {
        console.log(array2[i]);
    }
}

console.log("///8");

age = () => {
    let user = {
        firstname: 'tom',
        lastname: 'tobias',
        age: 32,
        isloggedin: true
    }
    if (user.age >= 18) {
        console.log("სრულწლოვანი");
    }
    else {
        console.log("არასრულწლოვანი");
    }
}

age()

console.log("///9");


twoNumber = (num1, num2) => {
    if(num1 > num2){
        console.log("num1 is largest");
    }
    else if(num1 < num2){
        console.log("num2 is largest");
    }
    else {
        console.log("error");
    }
}


twoNumber(14, 5)