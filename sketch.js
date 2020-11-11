
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
    
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400, 350, 1000, 50);
    bob1 = new Bob(400, 350, 200);
    rope1 = new Rope(bob1.body, roof.body, -800, 0);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  drawSprites();
  bob1.display();
  roof.display();
  rope1.display();
}



