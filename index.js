// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {
            type: 'input',
            message: "Whats your Project title?",
            name: 'title',
            validate: (value)=>{ if (value){return true} else {return 'I need a title to continue'}}
        },
        {
            type: 'input',
            message: "Give a description of your project",
            name: 'descriptrion',
            validate: (value)=>{ if (value){return true} else {return 'I need a description to continue'}}
        },
        {
            type: 'input',
            message: "List a Table of Contents",
            name: 'tOc',
            validate: (value)=>{ if (value){return true} else {return 'I need a table of contents to continue'}}
        },
        {
            type: 'input',
            message: "What is the installation process for your project?",
            name: 'installation',
            validate: (value)=>{ if (value){return true} else {return 'I need a installation process to continue'}}
        },
        {
            type: 'input',
            message: "What is the usage of your project for?",
            name: 'usage',
            validate: (value)=>{if (value){return true} else {return 'I need a usage to continue'}}
        },
        {
            type: 'input',
            message: "If you are using a license, Which one?",
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{if (value){return true} else {return 'I need a license name or no to continue'}}
        },
        {
            type: 'input',
            message: "Who has contributed to this project?",
            name: 'contribute',
            validate: (value)=>{if (value){return true} else {return 'I need a contributor list to continue'}}
        },
        {
            type: 'input',
            message: "What tests did your run on your project to insure a working product?",
            name: 'test',
            validate: (value)=>{if (value){return true} else {return 'I need a test description to continue'}}
        },
        {
            type: 'input',
            message: "What questions do you have about your project?",
            name: 'questions',
            validate: (value)=>{if (value){return true} else {return 'I need questions to continue'}}
        },
        {
            type: 'input',
            message: "Github username:",
            name: 'git',
            validate: (value)=>{if (value){return true} else {return 'I need a GitHub username to continue'}}
        }
    ]
)
const questions = {

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
