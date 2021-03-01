const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options={
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world, ground)
  var ball_options={
    restitution : 1.0
  }
  ball=Bodies.circle(200,100,20)
  World.add(world, ball)
  //createSprite(400, 200, 50, 50);
//console.log(object)
//console.log(object.type)
//console.log (object.position.x)
//console.log(object.position.y)
}

function draw() {
  background(0);  
Engine.update(engine);
  rectMode(CENTER)
  //rect(200,200,50,50)
 rect(ground.position.x,ground.position.y,50,50)
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20)
}