//  BMI CALCULATOR HOMEWORK BY SIR MUBASSHIR ALI:-

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.yellow.bold(`
*******************************************************************************************************
                               "BMI CALCULTOR USING INQUIRER"
*******************************************************************************************************`)
);

let input1 = await inquirer.prompt({
  name: "Weight",
  type: "input",
  message: chalk.blueBright("Enter your weight in kilogram:"),
});

let input2 = await inquirer.prompt({
  name: "Height",
  type: "input",
  message: chalk.blueBright("Enter your height in meters:"),
});
let bmi = input1.Weight / (input2.Height * input2.Height);
console.log(chalk.red(`Your BMI is ${bmi}`));
