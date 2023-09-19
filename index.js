const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt ([
        {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
        },
        {
        type: 'input',
        message: 'Where are you from?',
        name: 'from',
        },
        {
        type: 'input',
        message: 'Please enter a short bio.',
        name: 'bio'
        },
        {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
        },
        {
        type: 'input',
        message: 'What is your linkedin username?',
        name: 'linkedin',
        },
    ])
    .then((response) =>
    response
    ? console.log('Success!')
    : console.log("Dishonor on you, dishonor on your cow.")
  );