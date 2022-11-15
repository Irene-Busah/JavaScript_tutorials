// =================== CODE CHALLENGE 1 ================
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// ================== SOLUTION ==================

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

// const calcAverage = (firstScore, secondScore, thirdScore) => {
//     return (firstScore + secondScore + thirdScore) / 3;
// }

// const dolphinAverage = calcAverage(44, 23, 71);
// const koalasAverage = calcAverage(65, 54, 49);

// // console.log(dolphinAverage, koalasAverage);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolpins wins (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log(`no team wins!`)
//     }
// }

// checkWinner(dolphinAverage, koalasAverage);

// // TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// const dolphinAve = calcAverage(85, 54, 41);
// const koalasAve = calcAverage(23, 34, 27);

// checkWinner(dolphinAve, koalasAve);

// =================== CODE CHALLENGE 2 ================

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// =================== SOLUTION ===================
// const calcTip = (bill) => {
//     const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
//     return tip;
// }
// // console.log(calcTip(100))

// // TEST DATA: 125, 555 and 44
// const bill = [125, 555, 44];
// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// console.log(tips);
// const totals = [tips[0] + bill[0], tips[1] + bill[1], tips[2] + bill[2]];
// console.log(totals);

// =================== CODE CHALLENGE 2 ================

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// =================== SOLUTION ===================

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmiMark = this.mass / this.height ** 2;
//     return this.bmiMark;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const markbmi = mark.calcBMI();
// const johnbmi = john.calcBMI();
// if (markbmi > johnbmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBMI()})`
//   );
// } else if (johnbmi > markbmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s (${mark.calcBMI()})`
//   );
// }

// mark.calcBMI();
// console.log(mark.bmiMark);

// ================ TRIALS ===================
/*
    Write a function that returns the square of a number
*/

// const findSquare = (number) => {
//     const ans = number ** 2;
//     return ans;
// }
// console.log(findSquare(4)) // returns 16

/*
    Write a function to convert Celsius to Fahrenheit
*/

// const convertCelsius = (degCelsius) => {
//     const degFahrenheit = (degCelsius * 9 / 5) + 32;
//     return degFahrenheit;
// }
// console.log(convertCelsius(0)); // prints 32

/*
    Write a function to find the area if a given rectangle
*/
// const rectangleArea = (rectLength, rectWidth) => {
//     const area = rectLength * rectWidth;
//     return area;
// }
// console.log(rectangleArea(10, 20));     // prints 200

/*
    Write a function to find the area and perimeter of a circle
*/
// const circleValues = function (radius) {
//     return `Perimeter: ${2 * Math.PI * radius}\nArea: ${Math.PI * radius ** 2}`;
// }
// console.log(circleValues(10));

/*
    Write a function to reverse a number
*/
// const reverseNum = (num) => {
//     let reverse = 0;
//     while (num != 0) {
//         reverse = reverse * 10;
//         reverse = reverse + num % 10;
//         num = Math.trunc(num / 10);
//     }
//     return reverse;
// }
// console.log(reverseNum(123));

// ========= CODE CHALLENGE 3 =========

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// =================== SOLUTION ===================

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (billCost) => {
//     const tip = billCost >= 50 && billCost <= 300 ? billCost * 0.15 : billCost * 0.2;
//     return tip;
// }
// for (let i = 0; i < bills.length; i++) {
//     // const element = bills[i];
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(tips);
// console.log(totals);

// // BONUS
// const calcAverage = (arr) => {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     const average = total / arr.length;
//     return average;
// }
// console.log(calcAverage([20, 30, 10]));
// console.log(calcAverage(totals));
