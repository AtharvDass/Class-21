var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,150,10);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  

}

function draw() {
  background(255,255,255);  
  if(collide(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  }

 drawSprites();
}
function collide(object1,object2){
   bulletRightEdge=object1.x+object1.width;
   wallLeftEdge=object2.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
   return false;
}