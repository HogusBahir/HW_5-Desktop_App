import chalk from 'chalk';
import prompts from 'prompts';
import crypto from 'crypto';

// console.log(chalk.blue("HELLO WORLD IM BLUE"));
// console.log(chalk.red("HELLO WORLD IM RED"));

console.log(chalk.magenta(" GUESS THE NUMBER!"));
console.log(chalk.cyan.strikethrough("                               "));
console.log("Guess a number between 1 and 10.");
console.log(chalk.yellow("You have 3 attempts!"));

const random_num = crypto.randomInt(1,11);
const max_attempts = 3;


(async () => {
  const response = await prompts({
    type: 'number',
    name: 'guess',
    message: 'Attempt: Enter a guess'
  });

  console.log(response.guess);
  console.log('Actual number: ' + random_num);
  
})();