
class Shapes {
  constructor(text, textcolor, shapecolor) {
    this.text = text;
    this.textcolor = textcolor;
    this.shapeColor = shapecolor;
  }
}

class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      <text x="150" y="130" font-size="75" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
    </svg>`;
  }

  render() {
    return this.shape;
  }
}

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,30 225,150 75,150" fill="${this.shapeColor}" />
      <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
    </svg>`;
  }

  render() {
    return this.shape;
  }
}

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
      <text x="150" y="165" font-size="75" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
    </svg>`;
  }

  render() {
    return this.shape;
  }
}

module.exports = { Circle, Triangle, Square, Shapes };