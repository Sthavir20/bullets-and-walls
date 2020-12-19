var bullet,wall
var speed,weight,thickness
function setup() {

  createCanvas(1000,400);
  bullet=createSprite(50, 100, 50, 50);
  thickness=random(22,83)
  wall=createSprite(900,100,thickness,100)
  speed=random(55,90)
  weight=random(400,1500)
  bullet.velocityX=speed
  bullet.shapeColor="white"

}

function draw() {
  background(0); 
  if(wall.x-bullet.x<bullet.width/2+wall.width/2) {
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>10){
    wall.shapeColor="red"

  }
  
  if(damage<10){
    wall.shapeColor="green"

  }
  }
  drawSprites();
}