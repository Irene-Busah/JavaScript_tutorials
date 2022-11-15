'use strict';

// const x = 23;
// const calc = birthyear => console.log(2022 - birthyear);

// // console.log();
// calc(2012);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Enter temperature in Celsius: '),
//   };
//   const kelvin = Number(measurement.value) + 273.15;
//   return kelvin;
// };
// // console.warn, console.error, console.table
// console.log(measureKelvin());

// ================ CODE CHALLENGE: DEBUGGING ==============

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// ================ SOLUTION ===============

// TEST DATA 1: [17, 21, 23]
// const printForecast = arr => {
//   //   let days = 0;
//   let str = ' ';
//   for (let i = 0; i < arr.length; i++) {
//     // const element = arr[i];
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   return str;
// };
// const data = [17, 21, 23];
// console.log('... ' + printForecast(data));
// console.log('... ' + printForecast([12, 5, -5, 0, 4]));
