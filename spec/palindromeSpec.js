//describe takes 2 args, 1) name of the testing block, 2) name of the function to run which is the test

describe("Palindrome Unit Tests", () => {
    //the first test takes two args, 1) name of THIS test and 2) function to run which is THIS test
    // we have access to this describe function because we included jasmine.js.

    it(`Palindrome must be defined`, () => {
        //expect takes 1 arg, 1) a JS statement to evaluate
        expect(palindrome).toBeDefined(); //jasmine will go ahead and write something for us like : if (fuzzBuzz) === undefined, then test failed. if we do fizzBuzz() --> this gives us teh return value of the function compared to fizzBuzz that calls the function
    })

    it('Works with a single word', function () {
        expect(palindrome('racecar')).toEqual(true);
    });
    it('Works with an ! or other punctuation', function () {
        expect(palindrome('Racecar!')).toEqual(true);
    });
    it('Works with multiple words', function () {
        expect(palindrome('A car, a man, a maraca.')).toEqual(true);
    });
    it('Works with multiple words (test 2)', function () {
        expect(palindrome('Animal loots foliated detail of stool lamina.')).toEqual(true);
    });
    it('Works when a non-palidrome is passed', function () {
        expect(palindrome('JavaScript and Java make the ultimate developer.')).toEqual(false);
    });

});


//     it(`Should be 1 for passing FizzBuzz 1`, ()=>{
//         expect(fizzBuzz(1)).toBe(1);
//     })

//     it(`Should be 2 for passing FizzBuzz 2`, ()=>{
//         expect(fizzBuzz(2)).toBe(2);
//     });

//     it(`Should be "Fizz" for passing FizzBuzz 3`, ()=>{
//         expect(fizzBuzz(3)).toBe("Fizz");
//     })

//     it(`Should be "Buzz" for passing FizzBuzz 5`, ()=>{
//         expect(fizzBuzz(5)).toBe("Buzz");
//     })

//     it(`Should be 6 for passing FizzBuzz 6`, ()=>{
//         expect(fizzBuzz(6)).toBe("Fizz");
//     })

//     it(`Should be "FizzBuzz" for passing FizzBuzz 15`, ()=>{
//         expect(fizzBuzz(15)).toBe("FizzBuzz");
//     })


//     const random = Math.floor(Math.random() * 1000) * 15 +15
//     it(`Should be "FizzBuzz" for passing FizzBuzz ${random}`, ()=>{
//         expect(fizzBuzz(random)).toBe("FizzBuzz");
//     })
// });