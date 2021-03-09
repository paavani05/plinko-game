const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
backgroundimg = loadImage("background.png")
  engine = Engine.create();
  world = engine.world;

  //Bodies are created here
  ground = new Ground(width/2,height-10,width,20);

  for (var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }  

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }

  Engine.run(engine);
}

function draw() {
  background(backgroundimg);

  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var v = 0; v < particles.length; v++) {
    particles[v].display();
  }  

  drawSprites();
}