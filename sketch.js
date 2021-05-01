const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var largeBox1, largeBox2, largeBox3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(200,350,3,{restitution:0.2, isStatic:false});
	World.add(world, paperBody);

	var options = {
        isStatic: true
    }

	ground = Bodies.rectangle(350,700,900,20, options)
    World.add(world,ground)

	paper = new Paper(200,350,40,30);
	largeBox1 = new LargeBox(600,655,20,70)
	largeBox2 = new LargeBox(700,655,20,70)
	largeBox3 = new LargeBox(650,680,115,20)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 900,20)
  paper.display();

	largeBox1.display();
	largeBox2.display();
	largeBox3.display();

  drawSprites();
		
	}
function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


