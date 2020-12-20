const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1, ground2, ground3;
var divisionHeight = 300;

var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,790,850,20);
  ground2 = new Ground(10,220,20,10000);
  ground3 = new Ground(470,220,20,10000);

  for (var k = 0; k<=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }
  
  for (var j = 15; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }
  
}

function draw() {
  background("black");
  Engine.update(engine); 
  ground1.display();
  ground2.display();
  ground3.display();

  if(frameCount%60 === 0){
    particles.push(new Particles(random(width/2-10, width/2+10, 10, 10)));
  }

  for (var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }

  for (var l = 0; l < divisions.length; l++){
    divisions[l].display();
  }

}

