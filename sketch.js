var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1, side2;
var bottom1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	side1 = new sides(410,600);
	side2 = new sides(590,600);
	bottom1 = new bottom(500,650);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  packageSprite.x = helicopterSprite.x;

  boxPosition=width/2-100;
  boxY=610; 
  side1=createSprite(boxPosition, boxY, 20,100); 
  side1.shapeColor=color(255,0,0); 
  side1Body = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); 
  World.add(world, side1Body);

  boxPosition=width/2;
  boxY=610; 
  side2=createSprite(boxPosition, boxY, 20, 100); 
  side2.shapeColor=color(255,0,0); 
  side2Body = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); 
  World.add(world, side2Body);

  boxPosition=width/2-50;
  boxY=660; 
  bottom1=createSprite(boxPosition, boxY, 100, 20); 
  bottom1.shapeColor=color(255,0,0); 
  bottom1Body = Bodies.rectangle(boxPosition+20, boxY, 100,20 , {isStatic:true} ); 
  World.add(world, bottom1Body);

  side1.display();
  side2.display();
  bottom1.display();

  drawSprites();
 
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW) 
  {
	Matter.Body.setStatic(packageBody, false);
  }

  if(keyCode === LEFT_ARROW)
  {
	  helicopterSprite.x = helicopterSprite.x - 4;
  }

  if(keyCode === RIGHT_ARROW)
  {
	helicopterSprite.x = helicopterSprite.x + 4;
  }
}





