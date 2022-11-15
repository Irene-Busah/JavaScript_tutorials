// ================ STRICT MODE =======================
"use strict";

// ==================== FUNCTIONS ==================
/*
    A function is a piece of code that can be reused over and over again.
*/

// function logger() {
//     console.log(`This is a function`)
// }
// logger(); // calling, running or invoking the function

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// console.log(fruitProcessor(3, 6));

// calculating age
// function calcAge1(birthYear) {
//     const age = 2022 - birthYear;
//     return age;
// }
// console.log(calcAge1(2000));

// // function expression
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// console.log(calcAge(2000), calcAge1(2000))

// ============== ARROW FUNCTIONS ===================
// const calcAge = birthYear => 2022 - birthYear;
// console.log(calcAge(1991));

// const yearsLeft = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const yearsUntilRetirement = 65 - age;
//     // return yearsUntilRetirement;
//     return `${firstName} retires in ${yearsUntilRetirement} years`;
// }
// console.log(yearsLeft(2000, "Irene"))

// ========== FUNCTIONS CALLING OTHER FUNCTIONS========
// const cutfruitPieces = fruit => {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const orangePieces = cutfruitPieces(oranges);
//     const applePieces = cutfruitPieces(apples);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// ================= ARRAYS ================
// const friends = ['Nelson', 'Stephen', 'Peter'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);

// // replacing
// friends[2] = 'Isaac';
// console.log(friends);

// const Irene = ['Irene', 'Busah', 22, 'ALU', 'Software', friends];
// console.log(Irene);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const years = [1998, 1967, 2002, 2010, 2018];

// console.log(calcAge(years[1]));
// const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];
// console.log(age);

// // adding an element in JavaScript
// friends.push('Grace') // push adds an element to the end of the array
// console.log(friends)

// friends.unshift('John'); // unshift adds element to the beginning of the array
// console.log(friends)

// // removing an element from an array
// friends.pop() // pop removes the last element of an array
// console.log(friends)
// friends.shift()     // shift removes the first element in the array
// console.log(friends)

// // checking the index of an element in an array
// console.log(friends.indexOf('Stephen')); // returns the index of the element 'Stephen'

// console.log(friends.includes('Micheal', 0)) // include() returns a boolean if an array contains a certain element or not.

// ====================== OBJECTS ======================
// const Irene = {
//     firstName: 'Irene',
//     lastName: 'Busah',
//     age: 22,
//     job: 'Software Engineer',
//     friends: ['Nelson', 'Denis', 'Samuel']
// }

// // retrieving data from an object
// console.log(Irene.firstName);
// console.log(Irene['lastName'])

// // adding items to the object
// Irene.location = 'Kigali';
// Irene['Github'] = 'Irene-Busah';

// console.log(Irene);

// // challenge
// console.log(`${Irene.firstName} has ${Irene['friends'].length} friends and her best friend is called ${Irene['friends'][0]}`)

// console.log(`${Irene.firstName} has ${Irene.friends.length} friends and her best friend is called ${Irene.friends[0]}`)

// =================== OBJECT METHODS ==================
/*
    Any function attached to an object is called a method. The function must be an expression, not function declaration. 
*/
// const Irene = {
//   firstName: "Irene",
//   lastName: "Busah",
//   birthYear: 2000,
//   job: "Software Engineer",
//   friends: ["Nelson", "Denis", "Samuel"],
//   hasDriversLicense: true,
//   // calcAge: function (birthYear) {
//   //     return 2022 - birthYear;
//   // }
//   // calcAge: function () {
//   //     return 2022 - this.birthYear;
//   // },
//   calcAge: function () {
//     // console.log(this.birthYear);
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: () => {
//     return `${Irene.firstName} is a ${Irene.calcAge()}-year old ${
//       Irene.job
//     }, and she has ${Irene.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };
// Irene.calcAge();
// console.log(Irene.age);
// // console.log(Irene.calcAge());
// console.log(Irene.getSummary());

// ============ ITERATION: THE FOR LOOP =============
// Note: For loop keeps running while the condition is True
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`)
// }

// const Irene = ['Irene', 'Busah', 22, 'ALU', 'Software', ['Nelson', 'Stephen', 'Peter']];

// for (let i = 0; i < Irene.length; i++) {
//     if (typeof Irene[i] !== 'string') continue;
//     const element = Irene[i];
//     console.log(element, typeof Irene[i])
// }
// for (let i = 0; i < Irene.length; i++) {
//     if (typeof Irene[i] === 'number') break;
//     const element = Irene[i];
//     console.log(element, typeof Irene[i])
// }

// ============= Looping backwards ==============
// for (let i = Irene.length - 1; i >= 0; i--) {
//     const element = Irene[i];
//     console.log(i, element);
// }

// ============= WHILE LOOP =============

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }
