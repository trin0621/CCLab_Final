let img;
let ornament = [];
let song = [];
let newornament = [];

function preload() {
  img = loadImage("img/tree.jpeg");
  ornament[0] = loadImage("ornament/basic.png");
  ornament[1]  = loadImage("ornament/cookie.png");
  ornament[2]  = loadImage("ornament/globe.png");
  ornament[3]  = loadImage("ornament/reindeer.png");
  ornament[4]  = loadImage("ornament/wreath.png");
  song[0] = loadSound("song/look.mp3");
  song[1] = loadSound("song/rockin.mp3");
  song[2] = loadSound("song/santa.mp3");
  song[3] = loadSound("song/snow.mp3");
  song[4] = loadSound("song/you.mp3");
}

function setup() {
    let canvas = createCanvas(1000, 800);
    // canvas.id("p5-filter-canvas");
    canvas.parent("p5-filter-canvas-container");
  imageMode(CENTER)
}

function draw() {
  background(220);
  image(img, width/2, height/2, width, 1.05*height);

 
  for (let i=0;i<newornament.length;i++){
    newornament[i].display();
  }
}

  class Ornament{
  constructor(u, v, cs) {
    this.x = u;
    this.y = v;
    this.o = cs;
  };
    display(){
      image(ornament[this.o],this.x,this.y,30,30);
    }
  }

function mousePressed() {
  if (mouseY > -152/53 * mouseX + 1247.924 && mouseY > 132/53 * mouseX -1167.92 && mouseY < 700) {  newornament.push(new Ornament (mouseX, mouseY, random([0,1,2,3,4]))) }
};
function mouseClicked() {
   if (mouseY > -152/53 * mouseX + 1247.924 && mouseY > 132/53 * mouseX -1167.92 && mouseY < 700) {
    circle(mouseX,mouseY,20)
    for (let i=0;i<5;i++){
      song[i].stop();
    }
    if (mouseY - 40 < 132){song[0].play()}
    else if (mouseY - 40 < 132 * 2){song[1].play()}
    else if (mouseY - 40 < 132 * 3) {song[2].play()}
    else if (mouseY - 40 < 132 * 4) {song[3].play()}
    else if (mouseY - 40 < 132 * 5) {song[4].play()}
  }
}
  