//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time. 
import chalk from "chalk";
let names = ["Nirma Qureshi", "Nirmal", "Samra"];
//for loop 
//1.initailization,2. condition,3.increament/decreament 
for (let i = 0; i < names.length; i++) {
    console.log(chalk.bgBlue(names[i]));
}
