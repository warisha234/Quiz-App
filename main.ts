#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"; 

console.log(chalk.redBright("****************************************************************"));
console.log(chalk.bold.italic.greenBright("Welcome to Quiz challenge "));
console.log(chalk.redBright("****************************************************************"));


const questions : {
    question_1 : string;
    question_2 : string;
    question_3 : string;
    question_4 : string;
    question_5 : string;
} = await inquirer.prompt([
    {
        type : "list",
        name : "question_1",
        message :"What is TypeScript primarily used for?",
        choices :["A. Memory Management","B. Dynamic Typing" ,"C. Static Typing"]
    },
    {
        type : "list",
        name : "question_2",
        message :"Which TypeScript feature allows for declaring new names for existing types?",
        choices :["A. Aliases","B. Enums","C. Interfaces"]
    },
    {
        
        type : "list",
        name : "question_3",
        message :"Which TypeScript keyword allows for a child class to override a method of its parent class?",
        choices :["A. Override","B. Enums","C. supers"]
    },
    {
        
        type : "list",
        name : "question_4",
        message :" How do you define an array of strings in TypeScript?",
        choices :["A. Array<string>","B. string[]","C. Both A and B"]
    },
    {
        
        type : "list",
        name : "question_5",
        message :" What is the purpose of a constructor in TypeScript classes?",
        choices :["A. To create a static method.","B. To initialize object properties.","C. To destroy an object."]
    }
]);

let score : number = 0;

//using switch case

switch(questions.question_1)
{
    case "C. Static Typing":
        console.log(chalk.greenBright("1. correct Answer"));
        score++;
        break;
        default:
            console.log(chalk.redBright("1. wrong Answer"));
}

switch(questions.question_2)
{
    case "A. Aliases":
        console.log(chalk.greenBright("2. correct Answer"));
        score++;
        break;
        default:
            console.log(chalk.redBright("2. wrong Answer"));
}

switch(questions.question_3)
{
    case "C. supers":
        console.log(chalk.greenBright("3. correct Answer"));
        score++;
        break;
        default:
            console.log(chalk.redBright("3. wrong Answer"));
}
           
        
switch(questions.question_4)
{
    case "C. Both A and B":
        console.log(chalk.greenBright("4. correct Answer"));
        score++;
        break;
        default:
            console.log(chalk.redBright("4. wrong Answer"));
}
           
switch(questions.question_5)
{
    case "B. To initialize object properties.":
        console.log(chalk.greenBright("5. correct Answer"));
        score++;
        break;
        default:
            console.log(chalk.redBright("5. wrong Answer"));
}
           
console.log(chalk.italic.bold.bgCyanBright(`\n Total Score: ${score}`));






