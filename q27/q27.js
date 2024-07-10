//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// * If the alien is green, print a message that the player earned 5 points.
// * If the alien is yellow, print a message that the player earned 10 points.
// * If the alien is red, print a message that the player earned 15 points.
// * Write three versions of this program, making sure eac h message is printed for the appropriate color alien.
let alianColor = "green";
if (alianColor === "green") {
    console.log(" the player just earned 5 points.");
}
else if (alianColor === "yellow") {
    console.log(" the player just earned 10 points.");
}
else if (alianColor === "red") {
    console.log(" the player just earned 15 points.");
}
else {
    console.log("unknown color");
}
alianColor = "yellow";
if (alianColor === "green") {
    console.log(" the player earned 5 points.");
}
else if (alianColor === "yellow") {
    console.log(" the player earned 10 points.");
}
else if (alianColor === "red") {
    console.log(" the player earned 15 points.");
}
else {
    console.log("unknown color");
}
alianColor = "red";
if (alianColor === "green") {
    console.log(" the player earned 5 points.");
}
else if (alianColor === "yellow") {
    console.log(" the player earned 10 points.");
}
else if (alianColor === "red") {
    console.log(" the player earned 15 points.");
}
else {
    console.log("unknown color");
}
export {};
