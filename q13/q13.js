// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
import chalk from "chalk";
let names = ["car", "bike", "bus"];
let message = "i would like to travell on a";
for (let i = 0; i < names.length; i++) {
    console.log(chalk.red(message, names[i]));
}
