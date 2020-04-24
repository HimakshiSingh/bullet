var bullet,wall;
function setup() {
  createCanvas(1600, 400);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=new Bullet(weight,speed);
  wall=createSprite(1500,200, 60, height/2)
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
  bullet.sprite.collide(wall,calculateDeformation)
  drawSprites();
 
}

function calculateDeformation()
{
	
	var deformation=0.5 * bullet.weight * bullet.speed* bullet.speed/22509;
	if(deformation>180)
	{
		bullet.sprite.shapeColor=color("yellow");
	}

	if(deformation<180 && deformation>100)
	{
		bullet.sprite.shapeColor=color("blue");
	}

	if(deformation<100)
	{
		bullet.sprite.shapeColor=color("lightgreen");
	}
}