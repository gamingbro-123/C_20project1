var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.shapeColour=(80,80,80);

  wall=createSprite(1500,200,60, height/2);

  car.velocityX = speed;

  console.log(speed);
  
}

function draw() 
{
  background(220,255,255);

  
  
  if(car.x-wall.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    car.x = wall.x-(car.width+wall.width)/2;
    var deformation=0.5 * weight * speed* speed/22500;
    textSize(20);
    text("deformation "+ deformation,300,300);
    if(deformation >=180)
      {
        car.shapeColor=color(255,0,0);

      }

      else if(deformation<180 && deformation>100)
      {
        car.shapeColor=color(230,230,0);
      }

      else if(deformation<=100)
      {
        car.shapeColor=color(0,255,0);
      }

      
  }
        drawSprites();
}

