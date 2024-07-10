//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// * Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
import chalk from "chalk";
// * Add one new guest to the beginning of your array.
// * Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = ["nirma", "sonia", "hina"];
let absentGuest = "samra";
let newGuest = "haniya";
guestList[0] = newGuest;
console.log(chalk.bgBlue("Good news , We found a bigger dinner table so we invite 3 more guests"));
guestList.unshift("neha");
guestList.splice(2, 0, "kiran");
guestList.push("daniya");
for (let i = 0; i < guestList.length; i++) {
    console.log(chalk.magenta("Dear Miss\n", guestList[i], "\n It is our pleasure to invited you to dinner,\n Thank You"));
}
