// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
import chalk from "chalk";
let array = ["1", "2", "3", "4"];
//           0,  1,   2,  3  
console.log(chalk.yellow(array[5]));
console.log(chalk.bgCyan(array[3]));
