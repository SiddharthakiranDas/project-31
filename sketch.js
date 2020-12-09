var particles;
var ground;
var obstacles;

function setup() {
  createCanvas(800,400);
var particles = createSprite(400, 50, 10, 10);

var ground = createSprite(400,400,800,10);

var obstacles = createSprite(400,300,10,200);
}

function draw() {
  background("green");  
  drawSprites();
}

function KeyPressed() {
  if(KeyPressed(32)){
    particles.isStatic(false);
  }
}