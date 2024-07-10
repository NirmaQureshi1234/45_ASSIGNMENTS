//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
import chalk from "chalk";
let t = ["Nirma", "Hina", "Samra", "Minal", "Zara"];
// console.log("Miss.", t[0], "are invited for a dinner in my house tonight!");
// console.log("Miss.", t[1], "are invited for a dinner in my house tonight!");
// console.log("Miss.", t[3], "are invited for a dinner in my house tonight!");
// console.log("Miss.", t[4], "are invited for a dinner in my house tonight!");
console.log("Everyone I have found a bigger dinner table!");
t.unshift("Huda");
t.push("Areeba");
t.push("Nida");
for (var i = 0; i < t.length; i++) {
    console.log(chalk.bgCyan("\n Miss. ", t[i], " are invited for a dinner tonight!"));
}
let arraylength = t.length;
console.log(chalk.red("Length of the array is: ", arraylength));
