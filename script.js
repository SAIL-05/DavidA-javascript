// console.log(200)

// let myAge = 34;
// myAge = 65;



// console.log(myAge);







// //  primitive data types
// //  primitive data types
 
// // string '' ""
// let kezaya = "today is kezaya's birthday"
// console.log(kezaya);

// // number 
// let mynum = 63
// console.log(mynum);

// // boolean
// const me = true
// const you = false
// console.log(me);

// //undefined
// let test;
// console.log(test);

// //null
// const test2 = null

// //  primitive data types
// //  primitive data types



// //non primitive data types
// //non primitive data types

// //object

// const student = {
//     name: "kezaya",
//     age: 21,
//     ispregnant: true,

// };
// console.log(student);
// console.log(student.name);

// //arrays

// const myArray = ["Amaka", "James", 354, true,
//      {name: "John" }, [2,4,6]];
// console.log(myArray[5]);
// console.log(myArray[5][2]);

// //functions



// // Operators
// // Operators


// //Arithmetic Operators //Arithmetic Operators //Arithmetic Operators
// //Arithmetic Operators //Arithmetic Operators //Arithmetic Operators

// let a = 34;
// let b = 56;

// //Addition
// const sum = a + b;
// console.log(sum);

// //Subtraction
// const sub = a - b;
// console.log(sub);

// //Multiplication
// const mul = a * b;  
// console.log(mul);

// //Division
// const div = a / b;
// console.log(div);

// //Modulus
// const mod = a % b;
// console.log(mod);


// //Assignment Operators
// //Assignment Operators

// let c = 39;
// // +=
// // -=


 //comparison Operators //comparison Operators //comparison Operators
 //comparison Operators //comparison Operators //comparison Operators


// const d = 45
// const e = 67;
// const f = "mary";
// const g = 23;
// const h = 47;
// const i = 23;

// //equals to
// console.log(d == e); 
// console.log(a == b); 

// //Greater than
// console.log(g > h); 

// //Less than
// console.log(g < h);

// //Greater than or equals to
// console.log(g >= i);

// //Less than or equals to
// console.log(g <= i);

// //not equals to
// console.log(g != i);

// //strict equals to
// console.log(g === i);


//logical Operators //logical Operators //logical Operators
//logical Operators //logical Operators //logical Operators

// Logical OR  ||
// Logical NOT !
// Logical AND &&

// const fee = true;
// const uniform = false;
// const textbooks = true;
// const idcard = false;

// const checkOR = fee || uniform || textbooks || idcard;
// const checkAND = fee && uniform && textbooks && idcard;
// const checkAyo = fee && textbooks;
// const checkAyoAgain = (fee && idcard) || (fee && uniform);
// console.log(checkAyoAgain);
// console.log(checkOR);


// Unary Operators //Unary Operators //Unary Operators
// Unary Operators //Unary Operators //Unary Operators

// Increament ++
// Decreament --

// let k = 3;
// k++;
// console.log(k);
// k--;
// console.log(k);

// Ternary Operators //Ternary Operators //Ternary Operators
// // Ternary Operators //Ternary Operators //Ternary Operators

// const age = 19;

// const Age = age >= 18 && age < 100 ? "You can vote" : "You cannot vote";

// console.log(Age);





// Conditional Statements //Conditional Statements 
// Conditional Statements //Conditional Statements 

// if statement
// if else statement
// if else if statement

// let a = 20;
// let b = 56;

// if (a > b) {
//     console.log("a is greater than b");
// }


// //if else condition
// if (a > b) {
//     console.log("a is greater than b");
// }
// else {
//     console.log("b is greater than a");
// }

// let DBpass = "1234";
// let password = "12345";
// if (password === DBpass) {
//     console.log("Welcome back, user!");
// }
// else {
//     console.log("Incorrect password, please try again.");
// }


// prompt("Enter your age");
// const myage = prompt("Enter your age");
// console.log(myage);

// alert (myAge);

// const test =78;
// console.log(`your lucky number is ${test}`);


// let valueOne = prompt("Enter first number");
// let valueTwo = prompt("Enter second number");
// let ans = valueOne + valueTwo;
// alert(ans);

// let valueOne = parseInt(prompt("Enter first number"));
// let valueTwo = parseInt(prompt("Enter second number"));
// let ans = valueOne + valueTwo;
// alert(ans);



//ACTIVITIES //ACTIVITIES //ACTIVITIES
//ACTIVITIES //ACTIVITIES //ACTIVITIES

//a program that checks if a number is positive or negative

// let number = parseInt(prompt("Enter a number"));
// if (number > 0) {
//     alert(`${number} is positive`);
// }
// else {
//     alert(`${number} is negative`);
// }

// cont.d // cont.d // cont.d // cont.d
// cont.d // cont.d // cont.d // cont.d


// const usernumber = parseInt(prompt("Enter a number"));
// if (usernumber > 0) {
//     alert(`${usernumber} is positive`);
// }
// else if (usernumber === 0) {
//     alert(`${usernumber} is invalid`);
// }
// else if (isNaN(usernumber)) {
//     alert(`This is not a number`);
// }
// else{
//     alert(`${usernumber} is negative`);
// }


//a program that checks if a number is even or odd

// let number = parseInt(prompt("Enter a number"));
// if (number % 2 === 0) {
//     alert(`${number} is an even number  `);
// }
// else {
//     alert(`${number} is an odd number`);
// }


// a program that determines the greatest of two numbers

// let num1 = parseInt(prompt("Enter first number"));
// let num2 = parseInt(prompt("Enter second number"));

// if (num1 > num2) {
//     alert(`${num1} is greater than ${num2}`);
// }
// else if (num1 < num2) {
//     alert(`${num2} is greater than ${num1}`);
// }
// else if (num1 === num2) {
//     alert(`${num1} is equal to ${num2}`);
// }
// else if (isNaN(num1) || isNaN(num2)) {
//     alert(`This is not a number you fucking cunt`);
// }
// else {
//     alert(`Invalid input`);
// }

//write a program that transforms a numerical grade to a letter grade

//  let grade = parseInt(prompt("Enter your grade"));
// if (grade >= 70 && grade <= 100) {
//     alert(`Your grade is A`);       
// }
// else if (grade >= 60 && grade <= 69) {
//     alert(`Your grade is B`); 
// }
// else if (grade >= 50 && grade <= 59) {
//     alert(`Your grade is C`); 
// }
// else if (grade >= 40 && grade <= 49) {
//     alert(`Your grade is D`); 
// }
// else if (grade >= 0 && grade <= 39) {
//     alert(`Your grade is F`); 
// }
// else if (grade < 0 || grade > 100) {
//     alert(`This is not a valid grade`);
// }
// else if (isNaN(grade)) {
//     alert(`This is not a number you fucking cunt`);
// }
// else {
//     alert(`Invalid input`);
// }


// //write a program that calculates the body mass index (BMI) and categorizes it. The formula for BMI is: weight / (height * height). The categories are as follows: underweight (below 18.5), normal weight (18.5t to 24.9), overweight (25 to 29.9), and obesity (30 or greater).

// let weight = parseFloat(prompt("Enter your weight in kg"));
// let height = parseFloat(prompt("Enter your height in meters"));

// let bmi = weight / (height * height);
// alert(`Your BMI is ${bmi}`);

// if (bmi < 18.5) { 
//     alert(`You are underweight`);
// }
// else if (bmi >= 18.5 && bmi <= 24.9) {
//     alert(`You are normal weight`);
// }
// else if (bmi >= 25 && bmi <= 29.9) {
//     alert(`You are overweight`);
// }
// else if (bmi >= 30) {
//     alert(`You are obese`);
// }
// else if (isNaN(bmi)) {
//     alert(`This is not a number you fucking cunt`);
// }
// else {
//     alert(`Invalid input`);
// }

//08/05/2025
// 08/05/2025
// 08/05/2025



//properties and methods

//object dta types
//arrays

// let scores = [3,4,5,6,7,8,9,10]

// let nameBox = ["Mary", "John", "Kezaya", "Amaka", "James", "Tolu", "Ayo"];

//to remove  the last element of an array
// nameBox.pop();
//to remove the first element of an array
// nameBox.shift();
//to add an element to the end of an array
// nameBox.push("Tolu");
//to add an element to the beginning of an array
// nameBox.unshift("Tolu");
//to find the length of an array
// nameBox.length;
//to find the index of an element in an array
// nameBox.indexOf("Mary");
//to find the last index of an element in an array
// nameBox.lastIndexOf("Mary");
//to know if an element is in an array
// nameBox.includes("Amaka");
//to sepearte elements in an array
// nameBox.join(" "); or nameBox.join(", "); or nameBox.join(" - "); 
//to slice an array
// nameBox.slice(0, 3); //this will return the first three elements of the array
// nameBox.slice(2, 5); //this will return the elements from index 2 to index 5
//to splice an array
// nameBox.splice(0, 2); //this will remove the first two elements of the array
// nameBox.splice(2, 3); //this will remove the elements from index 2 to index 5
//splice does 3 things, it removes, adds and replaces elements in an array
// nameBox.splice(2, 3, "Mary", "John", "Kezaya"); //this will remove the elements from index 2 to index 5 and add the new elements.
//splice first parameter is the index to start removing, second parameter is the number of elements to remove, third parameter is the element to add


///odjects

// // let scores = [1,2,3,4,5]
// let studentData = {
//     name: 'ife',
//     score: 100,
//     // ife is the key and 100 is the value
// }

//to get all the values in an odject
// Object.values(studentData);
//to get all the keys in an odject
// Object.keys(studentData);

//you can put an object in an array
// let scoreboard = [1,2,3,4,5, {name: 'ife', score: 100}]
//to get 'ife' in the array

// scoreboard[5].name;

// let newscore = [3,4,5,6,7,8, {name: 'ife', score: 100}]

//ASSIGNMENT //ASSIGNMENT //ASSIGNMENT
//ASSIGNMENT //ASSIGNMENT //ASSIGNMENT

// // Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// let age = parseInt(prompt("Enter your age"));
// if (age < 12) {
//     alert(`Your ticket price is $5`);
// }
// else if (age < 18) {
//     alert(`Your ticket price is $10`);
// }
// else if (age < 60) {
//     alert(`Your ticket price is $20`);
// }
// else if (age >= 60) {       
//     alert(`Your ticket price is $15`);
// }
// else if (isNaN(age)) {
//     alert(`This is not a number`);
// }
// else {
//     alert(`Invalid input`);
// }


// Write a program that determines if a year is a leap year.
// A year is a leap year if it is divisible by 4, but not divisible by 100, unless it is also divisible by 400.
// For example, 2000 is a leap year, but 1900 is not. 2004 is a leap year, but 2003 is not.

// let year = parseInt(prompt("Enter a year"));
// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     alert(`${year} is a leap year`);
// }
// else if (year % 4 !== 0) {
//     alert(`${year} is not a leap year`);
// }
// else if (isNaN(year)) {
//     alert(`This is not a number`);
// }
// else {
//     alert(`Invalid input`);
//  }

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// let purchaseAmount = parseFloat(prompt("Enter your purchase amount"));
// if (purchaseAmount >= 100) {
//     alert(`Your discount is 20%`);
// }
// else if (purchaseAmount >= 50) {
//     alert(`Your discount is 10%`);
// }
// else if (purchaseAmount < 50) {
//     alert(`Your discount is 0%`);
// }
// else if (isNaN(purchaseAmount)) {
//     alert(`This is not a number`);
// }
// else {
//     alert(`Invalid input`);
// }

// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.
// The time of day is determined by the following conditions: 12am to 11am is morning, 12pm to 5pm is afternoon, and 6pm to 11:59pm is evening.
// The time is in 24 hour format.

let time = parseInt(prompt("Enter the time in 24 hour format"));
if (time >= 0 && time < 12) {
    alert(`Good morning`);
}
else if (time >= 12 && time < 17) {
    alert(`Good afternoon`);
}
else if (time >= 17 && time < 24) {
    alert(`Good evening`);
}
else if (isNaN(time)) {
    alert(`This is not a number`);
}
else {
    alert(`Invalid input`);
}

