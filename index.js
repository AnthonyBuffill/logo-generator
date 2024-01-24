
const inquirer = require('inquirer');
const fs = require('fs');
const { default: ListPrompt } = require('inquirer/lib/prompts/list');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Input up to 3 characters for your logo.',
      name: '',
    },
    {
      type: 'list',
      name: 'chosenShape',
      message: 'Please choose one of the following shapes:',
      choices: [
        "Circle",
        "Square",
        "Triangle"]
    },
   
    {
      type: 'input',
      message: 'What color would you like your logo to be? (hexadecimal numbers are acceptable)',
      name: 'shapecolor',
    },
    {
      type: 'input',
      message: 'What color would you like your text to be? (hexadecimal numbers are acceptable)',
      name: 'textcolor',
    },
  ])
    
  .then((response) => {
    fs.writeFileSync('./examples/logo.svg'
    )
    console.log("Generated logo.svg")
  })
