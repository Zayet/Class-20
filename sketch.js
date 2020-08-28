var fixRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 50);
  fixRect.shapeColor = "red";
  movingRect = createSprite(300,100,50,50);
  movingRect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(fixRect.x - movingRect.x < movingRect.width/2 + fixRect.width/2
    && movingRect.x - fixRect.x < fixRect.width/2 + movingRect.width/2
    && fixRect.y - movingRect.y < movingRect.height/2 + fixRect.height/2
    && movingRect.y - fixRect.y < fixRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "blue";
    fixRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "red";
    fixRect.shapeColor = "red";
  }
  drawSprites();
}