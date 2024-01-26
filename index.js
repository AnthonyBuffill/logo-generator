// index.js
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

const shapeChoices =

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Input up to 3 characters for your logo.',
      name: 'logo',
    },
    {
      type: 'list',
      name: 'chosenShape',
      message: 'Please choose one of the following shapes:',
      choices:  [
        "Circle",
        "Triangle",
        "Square"
      ]
    },
    {
      type: 'input',
      message: 'What color would you like your logo text to be? (hexadecimal numbers are acceptable)',
      name: 'textcolor',
    },
    {
      type: 'input',
      message: 'What color would you like your logo shape to be? (hexadecimal numbers are acceptable)',
      name: 'shapecolor',
    },
  ])
  .then((response) => {
    const logoText = response.logo.slice(0, 3);
    
    let shape;
    switch (response.chosenShape.toLowerCase()) {
      case 'circle':
        shape = new shapes.Circle(logoText, response.textcolor, response.shapecolor);
        break;
      case 'triangle':
        shape = new shapes.Triangle(logoText, response.textcolor, response.shapecolor);
        break;
      case 'square':
        shape = new shapes.Square(logoText, response.textcolor, response.shapecolor);
        break;
      default:
        console.error('Invalid shape chosen');
        return;
    }

    const logoSVG = shape.render();

    fs.writeFileSync('./examples/logo.svg', logoSVG);
    console.log("Generated logo.svg");
  })
  .catch((error) => {
    console.error('Error during prompt:', error);
  });
