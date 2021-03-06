// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install the project?',
        name: 'install',
    },
    {
        type: 'input', 
        message: 'Describe how to use the app, then upload a screenshot (assets/images/screenshot.png)',
        name: 'usage_instructions',
    },
    {
        type: 'input', 
        message: 'What are the contribution guidelines for this project?',
        name: 'contrib',
    },
    {
        type: 'input', 
        message: 'How do you test the project',
        name: 'test',
    },
    {
        type: 'list', 
        message: 'Which license are you using?',
        choices: ['MIT','APACHE','GPL'],
        name: 'license'
    },
    {
        type: 'input', 
        message: 'GitHub username: ',
        name: 'github_user',
    },
    {
        type: 'input', 
        message: 'What is your email address for this project?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown.generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Wrote README.md!')
);
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README Generator!');

    inquirer
      .prompt(questions)
      .then(answers => {
        writeToFile('README.md',answers);
      })
      .catch(error => {
        console.log('Error');
        console.log(error);
      });
}

// Function call to initialize app
init();
