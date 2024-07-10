// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

import chalk from "chalk";

// * Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// * Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// * Print a second set of invitation messages, one for each person who is still in your list. 

let guestList :string[] = ["nirma","sonia","hina"];


let absentGuest = "samra";
 
let newGuest = "haniya";
 
guestList[0] =newGuest;
 
for(let i = 0; i < guestList.length; i++){ 
    console.log(chalk.bgYellow("Dear Miss\n",guestList[i],"\n It is our pleasure to invited you to dinner,\n Thank You"));
    }
  
    console.log(chalk.green(absentGuest,"Is not comming to the dinner"));
 
