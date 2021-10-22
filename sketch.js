const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var ironball,sling



function preload() {

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,500,1200,20);
    box1=new Box(700,480,50,50)
    box2=new Box(750,480,50,50)
    box3=new Box(700,430,50,50)
    box4=new Box(750,430,50,50)
    box5=new Box(600,480,50,50)
    box6=new Box(650,480,50,50)
    box7=new Box(600,480,50,50)
    box8=new Box(650,480,50,50)
    box9=new Box(650,380,50,50)
    box10=new Box(700,380,50,50)
    box11=new Box(675,330,50,50)
 ironball=new Ironball(500,200,60,60)
 sling=new SlingShot(ironball.body,{x:500,y:200})

}

function draw(){
    background(180)
Engine.update(engine)
ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
ironball.display()
box8.display()
sling.display()
box9.display()
box10.display()
box11.display()

}
function keyPressed(){
    if(keyCode ===32){
  Matter.Body.applyForce(ironball.body,ironball.body.position,{x:-90,y:-80})
    }
}

