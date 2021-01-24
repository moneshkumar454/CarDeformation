var car, wall ;
var speed, weight ;

function setup() {
  createCanvas(1600,800);

  car = createSprite(50, 20, 50, 50);
  car.velocityX = 0;

  wall = createSprite(800,250,60,300);

  speed = random(55,90);
  weight = random(400,1500);

}

function draw() {
  background("blue");  

  car.y = wall.y;

  car.velocityX = speed;

  if(wall.x-car.x < (car.width + wall.width/2)){
    car.velocityX = 0
    
    var deformation=0.5* weight*speed*speed/22509;
    
    if(deformation>180){
      car.shapeColour=colour(255,0,0);
    }
    
    if(deformation<180 && deformation>100){
      car.shapeColour=colour(230,230,0);
    }

    if(deformation<100){
      car.shapeColour=colour(0,255,0);
    }
  }

  drawSprites();
}