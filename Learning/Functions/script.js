// ============ JAVASCRIPT OOP =============
const cat = {
  age: 2,
  name: 'Bailey',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  },
};

// Modifying the properties of the object
cat.age += 1;
// console.log(cat['age']);

cat['name'] = 'Sheldon';
// console.log(cat.name);
// console.log(cat);

// Adding properties to Objects
const printer = {};
printer.on = true;
printer.mode = 'black and white';
printer['remainingSheets'] = 168;

printer.print = function () {
  console.log(`The printer is printing sheets`);
};

// console.log(printer);
// printer.print();

// Removing Properties from an object
// delete printer.mode;
// console.log(printer);

// Passing Primitive Arguments
function changeToEight(n) {
  n = 8;
}

var n = 7;
changeToEight(n);
// console.log(n);

let string = 'orange';

function changeToApple(string) {
  string = 'apple';
  return string;
}

changeToApple(string);

// console.log(string);

const myArray = [
  function alerter() {
    alert('Hello!');
  },
];
// console.log(myArray[0]());

function whoThis() {
  this.trickyish = true;
}
console.log(whoThis());

const car = {
  numberOfDoors: 4,
  drive: function () {
    // debugger;
    console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  },
};

/*
  Even though car.drive is a method, we're storing the function itself in the a variable letsRoll. Because letsRoll() is invoked as a regular function, this will refer to the window object inside of it.
*/

const letsRoll = car.drive;

// letsRoll();

// Using the keys() and values() method on objects

const dictionary = {
  car: 'Automobile',
  apple: 'healthy snack',
  cat: 'cute furry animal',
  dog: 'best friend',
  mango: 3,
  2: 'Two',
};

// console.log(Object.keys(dictionary));
// console.log(Object.values(dictionary));
