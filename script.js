// 1
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

// 2

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



// 3

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

// 4


//5

function evenOrOdd(number){
    if(number % 2 == 0){
        console.log('this number is even');
    }
    else{
        console.log("this number is odd");
    }
}

evenOrOdd(5)

//6