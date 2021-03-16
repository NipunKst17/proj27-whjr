
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bob1 = new Bob(500,400,40);
	 bob2 = new Bob(600,400,40);
	 bob3 = new Bob(700,400,40);
	 bob4 = new Bob(800,400,40);
	 bob5 = new Bob(900,400,40);

	 
	 roof = new Roof(600,40,1200,80);

	 rope1 = new rope(bob1.body,roof.body,-200,0)
	 rope2 = new rope(bob2.body,roof.body,-100,0)
	 rope3 = new rope(bob3.body,roof.body,0,0)
	 rope4 = new rope(bob4.body,roof.body,100,0)
	 rope5 = new rope(bob5.body,roof.body,200,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() { 
	if (keyWentUp("LEFT_ARROw")) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1200,y:-500});
} 
	
}
