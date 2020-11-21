var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(1100, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  BounceOff(movingRect,fixedRect);
  
  drawSprites();
}

