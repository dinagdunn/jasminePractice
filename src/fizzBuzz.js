function fizzBuzz(num) { //writing function fizzBuzz(){} is enough for the first test to pass, that the function fizzBuzz has been defined
    // return 1;  //remember we want the test to fail first, and then write the miminum amoutn of code needed to get that to pass. 

    if (num % 15 === 0) {
        return `FizzBuzz`
    }

    if (num % 3 === 0) {
        return `Fizz`;

    }

    else if (num % 5 === 0) {
        return `Buzz`;

    }
    return num;
}


// for (var i = 0; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0 ){
//         console.log("FizzBuzz");

//     }
//     else if (i % 3 === 0 ){
//         console.log("Fizz");

//     }
//     else if (i % 5 === 0 ){
//         console.log("Buzz");
// }

// else {
//     console.log(i);
// }

// }