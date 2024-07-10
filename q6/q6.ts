// 6 .Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

import chalk from "chalk";

  
let personName :string = "\n\tNirma qureshi\t\n"; 
//add for spaces \t
//add extra lines \n
console.log(chalk.bgBlueBright(personName)); 
let personName2 = personName.trim();
 console.log(chalk.bgYellow(personName2));