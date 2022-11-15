'use strict';

// =============== ARRAY DESTRUCTURING ===============
/* 
    Destructuring is an ES6 feature. It's a way of unpacking values from an array or object into separate variables. In other words, destructuring is to break a complex data structure down into a smaller data structure like variable.
*/

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// // console.log(x, y, z);

// const restaurant = {
// 	name: 'Classico Italiaro',
// 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// 	starterMenu: ['Focaccie', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// };

// let [first, second] = restaurant.categories;
// console.log(first, second);

// // switching using destructuring
// [second, first] = [first, second];
// console.log(first, second);

// console.log(restaurant.order(2, 0));

// const [starter, mainCon] = restaurant.order(2, 0);
// console.log(starter, mainCon);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 0] = [8, 9];
// console.log(p, q, r);

// =============== DESTRUCTURING OBJECT ===============

// const restaurant = {
// 	nameS: 'Classico Italiaro',
// 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// 	starterMenu: ['Focaccie', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// 	openHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0,
// 			close: 24,
// 		},
// 	},
// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// 	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},
// };
// restaurant.orderDelivery({
// 	time: '22:38',
// 	address: 'Kigali',
// 	starterIndex: 2,
// 	mainIndex: 2,
// });
// // To destructure objects, we use the curly brackets
// const { nameS, categories, openHours } = restaurant;
// console.log(nameS, categories, openHours);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// console.log(a, b);

// // Nested objects
// const {
// 	fri: { open },
// } = openHours;
// console.log(open, close);

// ============ SPREAD OPERATOR =============

/*
	The spread operator is used to expand an array into all its elements.
*/

// const arr = [2, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const restaurant = {
// 	nameS: 'Classico Italiaro',
// 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// 	starterMenu: ['Focaccie', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// 	openHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0,
// 			close: 24,
// 		},
// 	},
// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// 	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},
// 	orderPasta: function (ing1, ing2, ing3) {
// 		console.log(
// 			`Hence is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
// 		);
// 	},
// };

// const ingredients = [
// 	// prompt("Let's make pasta! Ingredient 1"),
// 	// prompt("Let's make pasta! Ingredient 2"),
// 	// prompt("Let's make pasta! Ingredient 3"),
// ];
// restaurant.orderPasta(...ingredients);

// Copying an array using spread
// const mainMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(mainMenu);
// console.log(restaurant.mainMenu);

// Joining 2 two arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables are arrays, strings, Maps, sets. Objects are not iterable. Spread operator cannot be used in template literals

// Spread operator on String
// const str = 'Irene';
// const letters = [...str, ' ', 'B'];
// console.log(letters);
// console.log(...str);

// Spread operator on Objects

// const newRestaurant = {
// 	...restaurant,
// 	Founder: 'Irene Busah',
// 	Year: '2022',
// };
// console.log(newRestaurant);
// console.log(restaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.nameS = "Irene's Bakery";
// console.log(restaurantCopy.nameS);
// console.log(restaurant.nameS);

// =========== REST PATTERN & PARAMETER =============

/*
	Rest Pattern is used to pack elements into an array. Rest pattern is done on the left side of the equal sign while spread operator is done on the right side of the equal sign
*/

// const arr = [1, 2, ...[3, 4, 5]]; // spread operator

// // Destructuring using rest pattern
// const [a, b, ...other] = [1, 2, 3, 4, 5]; // rest pattern
// console.log(a, b, other);

// // Rest pattern on Object
// const restaurant = {
// 	nameS: 'Classico Italiaro',
// 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// 	starterMenu: ['Focaccie', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// 	openHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0,
// 			close: 24,
// 		},
// 	},
// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// 	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},
// 	orderPasta: function (ing1, ing2, ing3) {
// 		console.log(
// 			`Hence is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
// 		);
// 	},
// };

// const { sat, ...weekdays } = restaurant.openHours;
// console.log(weekdays);

// // Function arguments using rest pattern

// const add = function (...argument) {
// 	let sum = 0;
// 	for (let i = 0; i < argument.length; i++) {
// 		sum = sum + argument[i];
// 	}
// 	return sum;
// 	// console.log(argument);
// };
// console.log(add(2, 3));
// console.log(add(4, 6, 7, 8));

// =========== SHORT CIRCUITING ==================
/*
	Properties of the logical operators
	1. They can use any data type
	2. They can return any data type
	3. They can do short circuiting.

	OR operator: short circuiting implies that if the first value is a truthy value, the operation will return the first value. This means if both operands are truthy values, the second operand will not be evaluated at all.

	AND: the AND operator short circuits when the first value is a falsy value and immediately return the falsy value without evaluating the second operand

	Nullish Coalescing Operator(??) returns nullish values instead of falsy values. Nullish values are Null and Indefined.
*/

// const restaurant = {
// 	nameS: 'Classico Italiaro',
// 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// 	starterMenu: ['Focaccie', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// 	openHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0,
// 			close: 24,
// 		},
// 	},
// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// 	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},
// 	orderPasta: function (ing1, ing2, ing3) {
// 		console.log(
// 			`Hence is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
// 		);
// 	},
// };

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); // returns 10 instead of 0 because the 0 assigned to numGuest is falsy value and hence, the operator will move to the second operand 10

// ============= LOGICAL ASSIGNMENT OPERATOR =========

// const rest1 = {
// 	name: 'Capri',
// 	// numGuests: 20,
// 	numGuests: 0, // the assignment operator will return 10 instead of 0
// };
// const rest2 = {
// 	name: 'La Piazza',
// 	owner: 'Irene',
// };

// OR assignment operator. It assigns a value to a variable if that variable is currently falsy. However, it does not work when the variable is already assigned to 0. This problem can be resolved using the nullish coalescing operator

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Coalescing assignment operator. It assigns a value to a variable if that variable is currently nullish value(null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10; // rest.numGuests is undefined so the nullish assignment operator will assign 10 to that variable.

// AND assignment operator. It assigns a value to a variable if that variable is currently truthy.
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// ======== Looping Arrays: The for-of Loop =========
// const restaurant = {
// 	nameS: 'Classico Italiaro',
// 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// 	starterMenu: ['Focaccie', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// 	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// 	openHours: {
// 		thu: {
// 			open: 12,
// 			close: 22,
// 		},
// 		fri: {
// 			open: 11,
// 			close: 23,
// 		},
// 		sat: {
// 			open: 0,
// 			close: 24,
// 		},
// 	},
// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},
// 	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},
// 	orderPasta: function (ing1, ing2, ing3) {
// 		console.log(
// 			`Hence is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
// 		);
// 	},
// };

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) {
// 	// console.log(item);
// }
// // printing the items together with the idex, we use the entries method
// for (const [i, ele] of menu.entries()) {
// 	console.log(`${i + 1}: ${ele}`);
// }

// Advanced Object Literal

const openHours = {
	thu: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	sat: {
		open: 0,
		close: 24,
	},
};

const restaurant = {
	nameS: 'Classico Italiaro',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccie', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	// ES6 enhanced object literals
	openHours,

	// ES6 enhanced method writing
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},
	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Hence is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
		);
	},
};

// Optional Chaining(?.)
// console.log(restaurant.openHours.mon?.open); // undefined instead of Error

// console.log(restaurant.openHours.fri?.close); // returns 23 because friday is present in the

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
	// console.log(day);
	const opens = restaurant.openHours[day]?.open ?? 'closed';
	// console.log(`On ${day}, we open at ${opens}`);
}

// Optional chaining on Methods
// console.log(restaurant.order?.(0, 1) ?? 'Food unavailable');
// console.log(restaurant.orders?.(0, 1) ?? 'Method does not exist');

// Optional chaining on Arrays
const users = [{ name: 'Irene', email: 'i.busah@gmail.com' }];
// console.log(users[0]?.email ?? 'User does not exist');
// console.log(users?.[1] ?? 'There is no other user');

// Looping Objects: Object keys, Values and entries
// Property name: Keys
for (const day of Object.keys(openHours)) {
	// console.log(day);
}
const properties = Object.keys(openHours);
let openStr = `We are open on ${properties.length}: `;

for (const day of Object.keys(openHours)) {
	openStr += `${day}, `;
}
// console.log(openStr);

// Property values: Values
const value = Object.values(openHours);
// console.log(value);

// Entries Object
const entries = Object.entries(openHours);
for (const [key, { open, close }] of entries) {
	// console.log(`On ${key}, we open at ${open} and close ${close}`);
}

// ==================== SET ====================
