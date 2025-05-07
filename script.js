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


// //comparison Operators //comparison Operators //comparison Operators
// //comparison Operators //comparison Operators //comparison Operators


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


//write a program that calculates the body mass index (BMI) and categorizes it. The formula for BMI is: weight / (height * height). The categories are as follows: underweight (below 18.5), normal weight (18.5t to 24.9), overweight (25 to 29.9), and obesity (30 or greater).

let weight = parseFloat(prompt("Enter your weight in kg"));
let height = parseFloat(prompt("Enter your height in meters"));

let bmi = weight / (height * height);
alert(`Your BMI is ${bmi}`);

if (bmi < 18.5) { 
    alert(`You are underweight`);
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    alert(`You are normal weight`);
}
else if (bmi >= 25 && bmi <= 29.9) {
    alert(`You are overweight`);
}
else if (bmi >= 30) {
    alert(`You are obese`);
}
else if (isNaN(bmi)) {
    alert(`This is not a number you fucking cunt`);
}
else {
    alert(`Invalid input`);
}

