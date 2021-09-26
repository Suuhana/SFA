const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;

var backGroundImg , snow = [];
var i;

function preload(){
  backGroundImg = loadImage("snow3.jpg");
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,500);
}

function draw(){
  background(backGroundImg);
  Engine.update(engine);

  snow.push(new Snow(random(0,800),-10));
  
  for (var x = 0; x < snow.length; x++) {
    snow[x].display();
  }
  
  drawSprites();
}