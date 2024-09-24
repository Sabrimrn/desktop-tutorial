import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam = await userInput.question("Wat is je naam?")

let leeftijd = await userInput.question("Wat is je leeftijd?")

let lievelingsGame = await userInput.question("Wat is je lievelingsgame?")

console.log("Hallo" + ' '+ naam + ", ik hoor dat je" + ' '+ leeftijd + ' '+ "jaar oud bent en dat je lievelingsgame" + ' '+ lievelingsGame + ' '+ "is.")
