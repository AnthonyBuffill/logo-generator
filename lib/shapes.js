
class Shapes {
  constructor(text, textcolor, shapecolor) {
    this.text = text;
    this.textcolor = textcolor;
    this.shapeColor = shapecolor;
  }
  }

class Circle extends Shapes{
  constructor(text, textColor, shape, shapeColor ) {
    super(text, textColor, shapeColor);
    this.shape = <svg height="300" width="200">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill= "green"/>
  </svg>;
    
  }

  render() {
    return ``
  }
};

class Square extends Shapes {
  constructor(text, textColor, shape, shapeColor ) {
    super(text, textColor, shapeColor);
    this.shape = <svg width="300" height="200">
    <rect width="250" height="250" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    </svg>;
  }
 
  render() {
    return ``
  }
};

class Triangle extends Shapes {
  constructor(text, textColor, shape, shapeColor ) {
    super(text, textColor, shapeColor);
    this.shape = <svg height="300" width="300">
    <polygon points="150, 18 244, 182 56, 182" style="fill:lime;stroke:purple;stroke-width:1" />
  </svg>;
   
  }
  
  render() {
    return ``
  }
}