// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
import chalk from "chalk";
//method 1
let favoriteNumber = 3;
console.log(chalk.bgYellowBright(`${favoriteNumber} is my favourite number`));
//method2
let message = "Is my favourite number";
console.log(chalk.bgGreen(favoriteNumber, message));
