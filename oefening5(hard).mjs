import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let secondenInEenDag = 86400
let secondenInEenUur = 3600
let secondenInEenMinuut = 60
let seconden;


let aantalDagen = parseFloat(await userInput.question("Geef het aantal dagen:"))
let aantalUren = parseFloat(await userInput.question("Geef het aantal uren:"))
let aantalMinuten = parseFloat(await userInput.question("Geef het aantal minuten:"))
let aantalSeconden = parseFloat(await userInput.question("Geef het aantal seconden:"))

 let uitkomst = (aantalDagen * secondenInEenDag) + (aantalUren * secondenInEenUur) + (aantalMinuten * secondenInEenMinuut) + aantalSeconden
console.log(uitkomst)