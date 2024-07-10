import chalk from "chalk";

let names :string[] = ["Nirma Qureshi","Nirmal","Samra"]; 
let message :string= "nothing is impossible when God is own your side"
 
for(let i = 0; i < names.length; i++){
  console.log(chalk.blue(message,names[i]));   
}