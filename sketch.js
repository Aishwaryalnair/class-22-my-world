// Aliases or nameSpace
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const MWorld = Matter.World;

//object for engine
var myEngine;
var myWorld;
var myRect;
var myRect2;

function setup(){
  var canvas=createCanvas(400,400);
  //create an Engine
  myEngine = Engine.create();
  //create a world in the Engine 
  myWorld = myEngine.world;
  //create a rectangular object in the Engine
  //create properties or options
  //JSON format key-value pair
  var prop = {
    isStatic: true
  };
 // myRect = Bodies.rectangle(x,y,w,h,options)
 myRect = Bodies.rectangle(200,380,400,20,prop);
 var prop2={
   restitution: 0
 };
 myRect2=Bodies.rectangle(100,100,40,29,prop2);
// MWorld.add(which world,which body)
MWorld.add(myWorld,myRect);
MWorld.add(myWorld,myRect2);
console.log(myRect);
}
function draw()
{
  background(0);
  //update my engine
  Engine.update(myEngine);
  rectMode(CENTER);
    rect(myRect.position.x,myRect.position.y,400,20);
    rect(myRect2.position.x,myRect2.position.y,40,29);
  
}
