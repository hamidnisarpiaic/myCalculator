// Import the 'inquirer' library for user input
import inquirer from 'inquirer';

// Import functions for arithmetic operations from separate modules
import { add } from './addition.js';
import { subtract } from './subtraction.js';
import { multiply } from './multiplication.js';
import { divide } from './division.js';

// Define an asynchronous function to handle calculator logic
async function main() {
  // Provide choices for user selection
  const choices = ['Addition', 'Subtraction', 'Multiplication', 'Division'];

  // Prompt user to choose an operation using 'inquirer'
  const { operation } = await inquirer.prompt({
    type: 'list',
    name: 'operation',
    message: 'Select an operation:',
    choices,
  });

  // Prompt user to input two numbers using 'inquirer'
  const { num1, num2 } = await inquirer.prompt([
    {
      type: 'input',
      name: 'num1',
      message: 'Enter the first number:',
      validate: (input) => !isNaN(input), // Validate numeric input
    },
    {
      type: 'input',
      name: 'num2',
      message: 'Enter the second number:',
      validate: (input) => !isNaN(input), // Validate numeric input
    },
  ]);

  let result: number;

  // Perform the chosen operation based on user selection
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
      result = NaN; // Set result to NaN if operation is not recognized
  }

  // Display the calculated result
  console.log(`Result of ${operation}: ${result}`);
}

// Call the main function to run the calculator program
main();