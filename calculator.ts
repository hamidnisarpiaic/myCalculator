// calculate.ts
import inquirer from 'inquirer';
import { add } from './addition.js';
import { subtract } from './subtraction.js';
import { multiply } from './multiplication.js';
import { divide } from './division.js';

async function main() {
  const choices = ['Addition', 'Subtraction', 'Multiplication', 'Division'];

  const { operation } = await inquirer.prompt({
    type: 'list',
    name: 'operation',
    message: 'Select an operation:',
    choices,
  });

  const { num1, num2 } = await inquirer.prompt([
    {
      type: 'input',
      name: 'num1',
      message: 'Enter the first number:',
      validate: (input) => !isNaN(input),
    },
    {
      type: 'input',
      name: 'num2',
      message: 'Enter the second number:',
      validate: (input) => !isNaN(input),
    },
  ]);

  let result: number;

  switch (operation) {
    case 'Addition':
      result = add(Number(num1), Number(num2));
      break;
    case 'Subtraction':
      result = subtract(Number(num1), Number(num2));
      break;
    case 'Multiplication':
      result = multiply(Number(num1), Number(num2));
      break;
    case 'Division':
      result = divide(Number(num1), Number(num2));
      break;
    default:
      result = NaN;
  }

  console.log(`Result of ${operation}: ${result}`);
}

main();
