//18. Seeing the World: Think of at least five places in the world you’d like to visit. 
import chalk from "chalk";
// * Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Islamabad", "peshawar", "multan", "lahore", "karachi"];
// * Print your array in its original order.
console.log(chalk.yellow("orignal order", places));
// * Print your array in alphabetical order without modifying the actual list.  
console.log(chalk.underline("alphabetical order", [...places.sort()]));
// * Show that your array is still in its original order by printing it. 
console.log(chalk.yellow("orignal order", places));
// * Print your array in reverse alphabetical order without changing the order of the original list. 
console.log(chalk.red("Reverse alphabetical order", [...places.sort().reverse()]));
// * Show that your array is still in its original order by printing it again.
console.log(chalk.white("orignal order", places));
// * Reverse the order of your list. Print the array to show that its order has changed. 
console.log(chalk.greenBright("Reverse order", places.reverse()));
// * Reverse the order of your list again. Print the list to show it’s back to its original order. 
console.log(chalk.yellow("orignal order", places.reverse()));
// * Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(chalk.red("alphabetical order", places.sort()));
// * Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. 
console.log(chalk.apply("Reverse alphabetical order", places.sort().reverse()));
