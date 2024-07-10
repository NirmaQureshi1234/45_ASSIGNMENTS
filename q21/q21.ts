//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

import chalk from "chalk";

 
interface personalData{
     name : string; 
     age : number; 
     education : string;
} 

let personalData ={
     name :"Nirma Qureshi",
     age : 20, 
     education : "intermediate" 
} 
console.log(personalData);
