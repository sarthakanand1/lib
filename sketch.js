var movingrect,fixrect,gameobject1,object1;
function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
 fixrect=createSprite(200,200,50,50);
 object1=createSprite(500,200,50,50);
gameobject1=createSprite(600,200,50,50);
 object1.velocityX=-5;
 fixrect.velocityX=5;
}

function draw() {
  background(255,255,255);  
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;
if(isTouching(movingrect, gameobject1)){
  movingrect.shapeColor = "blue";
  gameobject1.shapeColor = "blue";
}
else {
  movingrect.shapeColor = "green";
  gameoject1.shapeColor = "green";
}
bounceoff(object1,fixrect);
  drawSprites();
}
