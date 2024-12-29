/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new ShellShockStepper(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class ShellShockStepper {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.x1 = 200 * 5 / 8;
    this.x2 = 200 * 3 / 8;
    this.x3 = 200 * 0.43;
    this.x4 = 200 * 0.55;
    this.y1 = 200 * 0.57;
    this.y2 = 200 * 0.74;
    this.y3 = 200 * 3/4
    this.angle = 0;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    this.angle = sin(frameCount * 0.1);
    this.angle = map(this.angle, -1, 1, -PI / 10, PI / 10);
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    push();
  stroke(color(198,221,237));
  strokeWeight(7);
  translate(this.x1, this.y1);
  rotate(this.angle);
  line(0, -5, 25, 0);
  push();
  translate(25, -30);
  rotate(this.angle);
  line(10, 0, 0, 30);
  pop();
  pop();

  // Left side
  push();
  stroke(color(237, 198, 202));
  strokeWeight(7);
  translate(this.x2, this.y1);
  rotate(-this.angle);
  line(0, -5, -25, 0);
  push();
  translate(-25, -30);
  rotate(-this.angle);
  line(-10, 0, 0, 30);
  pop();
  pop();

  push();
  fill(color(198, 202, 237));
  noStroke();
  translate(200/2, this.y2);
  beginShape();
  for (let i = 0; i < 35; i += 10) {
    let v = 2 * i + i * sin(frameCount * 0.1);
    vertex(0, -v);

    // Replace the circle with an ellipse
    if (i === 10) {
      ellipse(0, -v, 75, 55); // First ellipse
    } else if (i === 20) {
      ellipse(0, -v, 65, 40); // Second ellipse
    } else if (i === 30) {
      ellipse(0, -v, 55, 35); // Third ellipse
    }
  }
  endShape();
  pop();

  push();
  translate(this.x3, this.y2);
  stroke(color(237, 198, 202));
  strokeWeight(7);
  beginShape();
  let lineLength = 50;
  for (let i = 0; i <= lineLength; i += lineLength / 5) {
    let v = 5 * sin(frameCount * 0.1 - i);
    vertex(v, i);
  }
  endShape();

  pop();

  push();
  translate(this.x4, this.y2);
  stroke(color(198,221,237));
  strokeWeight(7);
  beginShape();
  let lineLength1 = 50;
  for (let i = 0; i <= lineLength; i += lineLength / 5) {
    let v = 5 * sin(frameCount * 0.1 - i);
    vertex(v, i);
  }
  endShape();

  pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}







/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/