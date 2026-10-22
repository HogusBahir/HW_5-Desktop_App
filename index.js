import chalk from 'chalk';
import prompts from 'prompts';
import crypto from 'crypto';
import fs from 'fs';
// console.log(chalk.blue("HELLO WORLD IM BLUE"));
// console.log(chalk.red("HELLO WORLD IM RED"));

console.log(chalk.magenta(" GUESS THE NUMBER!"));
console.log(chalk.cyan.strikethrough("                               "));
console.log("Guess a number between 1 and 10.");
console.log(chalk.yellow("You have 3 attempts!"));

const random_num = crypto.randomInt(1,11);
const max_attempts = 3;
let hasWon = false;
  
const logs = [];
function logPrint(message){
  console.log(message);
  logs.push(message);
}

(async () => {
  for (let i = 0; i < max_attempts; i++){
  const response = await prompts({
    type: 'text',
    name: 'guess',
    message: `Attempt ${i+1}/${max_attempts}: Enter a guess`
  });



try{
  const inputStr = response.guess.trim();

  if(inputStr === ''){
    throw new Error("Sorry! Your response is empty!");
  }

  const num_guess = Number(inputStr);
//  Reject when given non-integer
  if(!Number.isInteger(num_guess)){
    throw new Error("That's not even a number!");
  }
//  Reject when given a negative
  else if(num_guess < 0){
    throw new Error("That's a negative!");
  }
//  Reject when given a zero number
  else if(num_guess == 0){
    throw new Error("That is a zero value!");
//  Reject when given a number above the maximum threshold
  }
  else if(num_guess > 10){
    throw new Error("Sorry! That's above the maximum threshold!");
  }
//  

if(num_guess < random_num){
  logPrint(chalk.yellow("Too low!"));
}
if(num_guess > random_num){
  logPrint(chalk.yellow("Too high!"));
}
if(num_guess === random_num){
  logPrint(chalk.green("\nCongrats! You guessed the correct number!\n"));
  hasWon = true;
  break;
}

}
catch(error){
logPrint(chalk.red((error.message)));
}}

//End of for let loop
if(!hasWon){
  logPrint(chalk.red("\nGAME OVER!"));
  logPrint(`The secret number was ${random_num}.\n`);
}

logPrint(chalk.magenta("Thanks for playing!"));

fs.writeFileSync('game-output.txt', logs.join('\n'));

})();
