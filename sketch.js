const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball;
var stick;
var boardimg;
var chain;

var gameState = "chain"


function preload(){
    boardimg = loadImage("images/Board.png")
}

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

   stick = new Stick(200,300,600,150);
    whiteball = new Whiteball(50,50,40);
    blackball = new BlackBall(140,100,60);
    blackball1 = new BlackBall(100,200,60);
    blackball2 = new BlackBall(70,250,40);
    blackball3 = new BlackBall(200,250,40);
    blackball4 = new BlackBall(250,250,40);
    blackball5 = new BlackBall(300,250,40);
    chain = new Chain(stick.body,{x:500, y:500});
   
}
function draw(){
        background(boardimg);
    
    Engine.update(engine);
    blackball.display();
    whiteball.display();
    stick.display();
    blackball1.display();
    blackball2.display();
    blackball3.display();
    blackball4.display();
    blackball5.display();
    
    engine.world.gravity.y = 0;
    //chain.display();
}

function mouseDragged(){
    if(gameState === "chain"){
        Matter.Body.setPosition(stick.body,{x: mouseX , y: mouseY});
    }

 }

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode === 32){
       chain.attach(stick.body);
       Matter.Body.setPosition(stick.body,{x: 500 , y: 500})
    }
}