//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// * Tests for equality and inequality with strings
console.log("Equality test:", "Nirma Qureshi" === "Nirma Qureshi");
console.log("Inquality test:", "Nirma Qureshi" !== "Samra ali");
// * Tests using the lower case function
console.log("LowerCase test:", "NIRMA QURESHI".toLowerCase() === "nirma qureshi");
// * Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Equality test:", 500 === 500); //Equality
console.log("Inequlity test:", 10 !== 8); //Inequlity 
console.log("Greater than test:", 1000 > 100); //Greater than
console.log("Greater than test:", 10 < 100); //Less than
console.log("Greater than and Equal to teat:", 10 >= 10);
console.log("Less than and Equal to teat:", 5 <= 10);
// * Tests using "and" and "or" operators
console.log("And Operater test", true && true);
console.log("Or Operater test", true || true);
// * Test whether an item is in a array
const array = [1, 2, 3];
console.log("Number test", array.includes(1));
// * Test whether an item is not in a array
const array1 = [1, 2, 3];
console.log("Number test", !array.includes(8));
export {};
