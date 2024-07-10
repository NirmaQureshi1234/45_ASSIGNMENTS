//. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

import chalk from "chalk";

 
 
 let personName:string = "nirma qureshi";
 
console.log(chalk.bgCyan("lowercase",personName.toLowerCase())); 
console.log(chalk.bgGreen("uppercase",personName.toUpperCase())); 
//titlecase methed 1
console.log(chalk.bgRed("titlecase",personName.charAt(0).toUpperCase() + personName.slice(1)));
//titlecase method 2
console.log(chalk.bgMagenta("titlecase" ,personName.replace(/\b\w/g,c => c.toUpperCase())));

