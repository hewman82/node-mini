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
        message: 'What is your favorite hobby?',
        name: 'hobby',
        },
        {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'food'
        },
        {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
        },
    ])
    .then((response) =>
    response
    ? console.log('Success!')
    : console.log("Dishonor on you, dishonor on your cow")
  );