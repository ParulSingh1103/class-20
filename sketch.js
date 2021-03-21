var movingRect,fixRect;

function setup() {
  createCanvas(1200,800);
  fixRect=createSprite(400, 200, 50, 80);
  fixRect.shapeColor='green';
  movingRect=createSprite(200,200,80,30);
  movingRect.shapeColor='green';
}

function draw() {
  background('black'); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x-fixRect.x < movingRect.width/2 + fixRect.width/2 && 
    fixRect.x - movingRect.x < fixRect.width/2 + movingRect.width/2 && 
    fixRect.y - movingRect.y < fixRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixRect.y < movingRect.height/2 + fixRect.height/2){

            movingRect.shapeColor = "red";
            fixRect.shapeColor = "red";         
           }

else {
  movingRect.shapeColor = 'green';
  fixRect.shapeColor = 'green';
}

  drawSprites();
}
