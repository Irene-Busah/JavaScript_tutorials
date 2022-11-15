// let js = 'amazing';
// let firstname = 'Irene';
// console.log(firstname);

// ========================== DATA TYPES =====================
/*
    Value: object or primitive
    There are 7 primitive data types:
        number      Symbol      Bigint
        string      Null
        boolean     Undefined
*/
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// javascriptIsFun = "Yes!"
// console.log(javascriptIsFun);

// let year;
// year = 1990;
// console.log(year);


// ======================== LET, VAR & CONST =================

/*
    ~ Let keyword is used to declare variables that can change later during the execution of our program. That is reassigning variables. We can use to declare empty variables
    ~ Const keyword is used to declare variables that is not supposed to change. Const values cannot change at any point in the program. It cannot be used to declare empty variables.
    ~ Var keyword works almost the same as Let keyword. It is never encouraged to use var in declaring variable.
*/
// let age = 30;
// age = 45;

// const birthday = 1990;
// birthday = 1991;  // this will throw a syntax error


// =================== BASIC OPERATORS ==================

/*
    Arithmetic operators: +, -, *, /, % (operate from left to right)
    Assignment operatos: =, +=, -=, *=, /=, ++, -- (operate from right to left)
    Comparison operators: >, <, >=, <=, ===

*/
// *************** Sample practice *************
// const ageJonas = 2022 - 1998;
// console.log(ageJonas);

// let x = 10 + 5;
// x++; // x = x + 1
// x--; // x = x - 1


// ===================== STRINGS & TEMPLATE LITERALS =========
// const firstName = 'Irene';
// const job = 'Software Engineer';
// const birthYear = 2000;
// const year = 2022;

// const story = "I'm " + firstName + ", a 22 year old " + job + ". I was born in " + birthYear + "!"
// console.log(story);
// // Template literals are written using backticks(``)
// const newStory = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(newStory);


// ================ IF/ELSE STATEMENT =================
// const age = 17;

// if (age >= 18) {
//     console.log(`You can drive`);
// } else {
//     console.log(`You're ineligible to drive`);
// }



// ================ TYPE CONVERSION & COERCION ==============
/*
    Type conversion is when we manually convert from one type to another.
    Type coercion is when JavaScript automatically converts types behind the scenes for us.

    Falsy values are values that are not false but will become false when we try to convert them into a boolean. There are 5 falsy values in JavaScript. They are
    0, "", undefined, null, NaN
*/

// ================= EQUALITY OPERATOR ====================
/*
    The triple equal to(===) is called the strict equality operator. It does not perform type coercion so it only return true when both values are exactly the same

    The double equal to(==) is also called the loose equality. It does type coercion
*/
// const age = 18;
// if (age === 18) {
//     console.log(`You just became an adult`)
// }

// const Num = prompt("What's your favorite number?");
// console.log(Number(Num));


// ========================== BOOLEAN LOGIC =================
// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Eligible to drive')
// } else {
//     console.log('Ineligible to drive')
// }



// ================= SWITCH STATEMENT ===================
// const day = 'Sunday';
// switch (day) {
//     case 'Monday':
//         console.log(`Go to the office`)
//         break;
//     case 'Tuesday':
//         console.log(`Meet mentee`);
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log(`Organise workshops and have weekly meetings`);
//         break;
//     case 'Friday':
//         console.log(`Study my online courses`);
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log(`Rest on the weekends!`);
//         break;
//     default:
//         console.log(`Not a valid day`)
//         break;
// }
// if (day === 'Monday') {
//     console.log(`Go to the office`);
// } else if (day === 'Tuesday') {
//     console.log(`Meet mentees`);
// } else if (day === 'Wednesday' || day === 'Thursday') {
//     console.log(`Study my online courses`);
// } else if (day === 'Friday') {
//     console.log(`Study my online courses`);
// } else if (day === 'Saturday' || day === 'Sunday') {
//     console.log(`Rest on the weekends!`);
// } else {
//     console.log(`Not a valid day`)
// }




// =============== STATEMENTS & EXPRESSIONS ============
/*
    An expression is a piece of code that produces a value. e.g; 3 + 4, 1998, true && false
    A statement is bigger piece of code that is executed and does not produce a value itself.
*/


// ============= CONDITIONAL OPERATION(TERNARY) ==============

// const age = 23;
// age >= 18 ? console.log(`I can drink wine`) : console.log(`can't drink wine`);

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);