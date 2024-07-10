// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
import chalk from "chalk";
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
// Testing the function
console.log(chalk.bgCyan(city_country("Lahore", "Pakistan")));
console.log(chalk.bgMagenta(city_country("Tokyo", "Japan")));
console.log(chalk.bgYellow(city_country("Paris", "France")));
