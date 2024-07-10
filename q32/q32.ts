// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
import chalk from "chalk";
let current_users: string[] = ["nirma", "Sania", "Kiran", "Nehal", "Dania"];
let new_users: string[] = ["nirma","Sana","Hani","Nehal","Dania"];
 
for(let new_Users of new_users){
     const lowercase_new_users = new_Users.toLowerCase();
       
if(current_users.map(user => user.toLowerCase()).includes(lowercase_new_users)){
      console.log(chalk.yellow(`the username ${new_Users} is not available`));
}else{ 
     console.log(chalk.red(`the user ${new_Users} is available`));
}
}