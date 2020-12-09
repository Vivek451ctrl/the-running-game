const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;

function preload(){
    bg = loadImage("Wphotos/pirate3.jpg");     //awesomme
    
} 
function setup(){
 canvas = createCanvas(400, 400);
 engine = Engine.create();
 world = engine.world;
 
}

function draw(){
    background("black");
    Engine.update(engine); 
};  