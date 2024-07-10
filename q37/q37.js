// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
import chalk from "chalk";
class Shirt {
    size;
    message;
    constructor(size = "large", message = "I love TypeScript") {
        this.size = size;
        this.message = message;
    }
    display() {
        console.log(chalk.bgCyan(`\n Size: ${this.size}, Message: ${this.message}\n `));
    }
}
function make_shirt(size = "large", message = "I love TypeScript") {
    return new Shirt(size, message);
}
// Making a large shirt with the default message
const largeShirtDefault = make_shirt();
largeShirtDefault.display();
// Making a medium shirt with the default message
const mediumShirtDefault = make_shirt("medium");
mediumShirtDefault.display();
// Making a shirt of any size with a different message
const customShirt = make_shirt("small", "Custom message here");
customShirt.display();
