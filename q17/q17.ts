//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// * Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

import chalk from "chalk";

// * Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// * Print a message to each of the two people still on your list, letting them know they’re still invited.

// * Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. 

 
let guestList: string[] = ["nirma", "sonia", "hina"];

let absentGuest = "samra";

let newGuest = "haniya";

guestList[0] = newGuest;
 
guestList.unshift("neha");
guestList.splice(2, 0, "kiran");
guestList.push("daniya");


  
console.log(chalk.underline("sorry we cant arrange a bigger dinner table so only 2 guest are invited"));
while (guestList.length > 2){
    
  let removeGuest =  guestList.pop();
console.log(chalk.bgBlue(removeGuest,"\nSorry you are not invited to dinner"));
};
   
for (let i = 0; i < guestList.length; i++) {
    console.log(chalk.bgGray(
      "Dear Miss\n",
      guestList[i],
      "\n you are still invited to dinner,\n Thank You"
    ));
  };
   
  guestList.splice(0,2);
   
  console.log(guestList);