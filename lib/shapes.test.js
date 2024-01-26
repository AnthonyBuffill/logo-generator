
const shapes = require('./shapes');


describe('Circle', () => {
  it('should render svg for a grey circle element', () => {
    const expectedSvg = `<circle cx="150" cy="100" r="80" fill="grey" />`;
   
    const circle = new shapes.Circle('A', 'white', 'grey'); 
    const actualSvg = circle.render();
    
    expect(actualSvg).toContain(expectedSvg);
  });
  
  it('should accept a fillColor param', () => {
    const expectedSvg = `<circle cx="150" cy="100" r="80" fill="blue" />`;
    
    const circle = new shapes.Circle('B', 'white', 'blue'); 
    const actualSvg = circle.render();
    
    expect(actualSvg).toContain(expectedSvg);
  });
});

describe('Triangle', () => {
  it('should render svg for a black polygon element', () => {
    const expectedSvg = `<polygon points="150,30 225,150 75,150" fill="black" />`;
    
    const triangle = new shapes.Triangle('C', 'white', 'black'); 
    const actualSvg = triangle.render();
    
    expect(actualSvg).toContain(expectedSvg);
  });
 
  it('should accept a fillColor param', () => {
    const expectedSvg = `<polygon points="150,30 225,150 75,150" fill="purple" />`;
   
    const triangle = new shapes.Triangle('D', 'white', 'purple'); 
    const actualSvg = triangle.render();
    
    expect(actualSvg).toContain(expectedSvg);
  });
});

describe('Square', () => {
  it('should render svg for a yellow rectangle element', () => {
    const expectedSvg = `<rect x="50" y="50" width="200" height="200" fill="yellow" />`;
    
    const square = new shapes.Square('E', 'white', 'yellow'); 
    const actualSvg = square.render();
    
    expect(actualSvg).toContain(expectedSvg);
  });
  
  it('should accept a fillColor param', () => {
    const expectedSvg = `<rect x="50" y="50" width="200" height="200" fill="red" />`;
   
    const square = new shapes.Square('F', 'white', 'red'); 
    const actualSvg = square.render();
    
    expect(actualSvg).toContain(expectedSvg);
  });
});
