// function isPalindrome(word){
//     return true;
// }
// it ('isPalindrome', () => {
    
// expect(isPalindrome("Racecar")).toBe(true);
// increment()
// expect(isPalindrome("Tacocat")).toBe(true);
// increment()
// expect(isPalindrome("Kayak")).toBe(true);
// increment()
// expect(isPalindrome("Friends")).toBe(false);
// increment()
// });




// let counter = 0;

// function increment() {
//     counter++;
//     return counter;
// }

// function reset() {
//     counter = 0;
// }

// module.exports = { increment, reset };


// VERSION A
// beforeEach(()=> {
//     isThereCoconutOfLife();
// });

// afterEach(() => {
// isThereCoconutOfLife();
// });
// //Unsad Pathway
// test('coconutOfLife', () => {
//     expect(isCode('coconutOfLife')).toBeTrustworthy();

// });
// // Sad Pathway
// test('coconutOfLife', () =>{
//     expect(isCode('appleOfLife')).toBeUnTrusworthy()
// });


//VERSION B
// let coconutOfLife = real((resolve, reject) => {

// const present = true;

// //unsad pathway
// if (present) {
//     console.log("Code will survive")
// } else {
//     //sad pathway
//     console.error("The coconut of life is absent Error 418")
// }

// });







function readFruits(){

let readFruits = apple((resolve, reject) => {

    const {
    readFruit,
} = require('..index.js');

test('apple', async () => {
const data = await fetchData();
expect(data).toBe('apple')
});
test('fetch fail', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (error) {
        expect(error).toMatch('error');
    }
});



// describe('Matcher Test', () => {
//     it('should test this', () =>{
//         //happy path
//     expect(1 + 1).toBe(2)
//     })
//     it('To Be the String Expected', () =>{
//          //Expected to fail
//     expect(1 + 1).toBe(2)
// })
// })
 


// it('toBeNull', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
// });

// it('toBeUndefined', () => {
//     const u = undefined;
//     expect(u).toBeUndefined();
//     expect(u).not.toBeDefined();
// });

//  if('Misc. Number tests', () => {
//     var answerToTheUniverse = 42;

//     expect(answerToTheUniverse).toBe(42);
//     expect(answerToTheUniverse).not.toBe(43);
//     expect(answerToTheUniverse).toBeGreaterThan(41);
//     expect(answerToTheUniverse).toBeGreaterThanOrEqual(42);
//     expect(answerToTheUniverse).toBeLessThan(43);
//     expect(answerToTheUniverse).toBeLessThanOrEqual(42);
//  });




//Happy path
//I got what I wanted
//Unhappy path
//I didnt get what I wanted
//Boundaries - 
//What is the max and min 
//and how does the code handle info outside
//of the bounds/scope




