import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeGetal1 = 50

let jeGetal2 = 25

console.log("De som is" + ' '+ (jeGetal1 + jeGetal2) + ' '+ ", het verschil is" + ' '+(jeGetal1 - jeGetal2) + ' '+ ",het product is" + ' '+ (jeGetal1 * jeGetal2) + ' '+"en de deling is" + ' '+ (jeGetal1 / jeGetal2))
