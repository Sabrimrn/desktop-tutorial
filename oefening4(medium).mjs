import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = 2005

let toekomstJaar = 2045

let leeftijd1 = toekomstJaar - geboorteJaar
let leeftijd2 = leeftijd1 - 1

console.log("In" + ' '+ toekomstJaar + ' '+ "zal ik" + ' '+ leeftijd1 + ' '+ "of" + ' '+ leeftijd2 + ' '+ "jaar oud zijn.")
