//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

import chalk from "chalk";

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// * Look closely at your results, and make sure you understand why each line evaluates to True or False.

// * Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 
 
let car = `subaru`; 
//1
console.log("Is car == `subaru`? I preduct True.");
 
console.log(car == `subaru`);
 //2
console.log("Is car == `subaru`? I preduct false.");
 
console.log(car !== `subaru`); 
//3
console.log("Is car == `subaru`? I preduct True.");
 
console.log(car == `subaru`);
//4
console.log("Is car == `cherry bomb`? I preduct false.");
 
console.log(car !== `subaru`); 
//5
console.log("Is car == `Ruby`? I preduct True.");
 
console.log(car !== `Ruby`); 
//6
console.log("Is car == `Spitfire`? I preduct false.");
 
console.log(car !== `subaru`); 
//7
console.log("Is car == `Camry`? I preduct True.");
 
console.log(car !== `Camry`); 
//8
console.log("Is car == `Camrio`? I preduct false.");
 
console.log(car !== `subaru`); 
//9
console.log("Is car == `ford`? I preduct True.");
 
console.log(car !== `ford`);
//
console.log("Is car == `shadow`? I preduct false.");
 
console.log(car !== `subaru`) ;
