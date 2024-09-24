import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeGetal1 = parseFloat(await userInput.question("Geef je eerste getal:"))

let jeGetal2 = parseFloat(await userInput.question("Geef je tweede getal:"))

console.log("De som is" + ' '+ jeGetal1 * jeGetal2)

