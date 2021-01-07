const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var BlockBlue15, BlockBlue16, BlockBlue17, BlockBlue18, BlockBlue19;

var BlockOrange1, BlockOrange2, BlockOrange3, BlockOrange4, BlockOrange5, BlockOrange6, BlockOrange7;

var polygon1;

var ground2;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);

  ground2 = new Ground(550, 100 ,220,20);

  //first level
  BlockBlue1 = new Box(200, 182, 20, 20);

  BlockBlue2 = new Box(220, 182, 20, 20);

  BlockBlue3 = new Box(240, 182, 20, 20);

  BlockBlue4 = new Box(260, 182, 20, 20);

  BlockBlue5 = new Box(280, 182, 20, 20);

  BlockBlue6 = new Box(300, 182, 20, 20);

  BlockBlue7 = new Box(320, 182, 20, 20);

  BlockBlue15 = new Box(560, 82, 20, 20);

  BlockBlue16 = new Box(580, 82, 20, 20);

  BlockBlue17 = new Box(600, 82, 20, 20);

  BlockBlue18 = new Box(620, 82, 20, 20);

  BlockBlue19 = new Box(640, 82, 20, 20);

  //second level
  BlockPink1 = new BoxPink(201, 2, 20, 20);

  BlockPink2 = new BoxPink(220, 2, 20, 20);

  BlockPink3 = new BoxPink(240, 2, 20, 20);

  BlockPink4 = new BoxPink(260, 2, 20, 20);

  BlockPink5 = new BoxPink(280, 2, 20, 20);

  BlockPink6 = new BoxPink(300, 2, 20, 20);

  BlockPink7 = new BoxPink(320, 2, 20, 20);

  //third level
  BlockBlue8  = new Box(202, 182, 20, 20);

  BlockBlue9  = new Box(220, 182, 20, 20);

  BlockBlue10 = new Box(240, 182, 20, 20);

  BlockBlue11 = new Box(260, 182, 20, 20);

  BlockBlue12 = new Box(280, 182, 20, 20);

  BlockBlue13 = new Box(300, 182, 20, 20);

  BlockBlue14 = new Box(320, 182, 20, 20);

  BlockOrange1 = new BoxOrange(220,1,20,20);

  BlockOrange2 = new BoxOrange(240,1,20,20);

  BlockOrange3 = new BoxOrange(260,1,20,20);

  BlockOrange4 = new BoxOrange(280,1,20,20);

  BlockOrange5 = new BoxOrange(300,1,20,20);

  BlockOrange6 = new BoxOrange(260,0,20,20);

  polygon_1 = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  ground2.display();

  BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();

  BlockBlue15.display();

  BlockBlue16.display();

  BlockBlue17.display();

  BlockBlue18.display();

  BlockBlue19.display();

  BlockPink1.display ();

  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

  BlockPink6.display ();

  BlockPink7.display ();

  BlockBlue8.display ();

  BlockBlue9.display ();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  BlockBlue13.display();

  BlockBlue14.display();

  BlockBlue15.display();

  BlockOrange1.display();

  BlockOrange2.display();

  BlockOrange3.display();

  BlockOrange4.display();

  BlockOrange5.display();

  BlockOrange6.display();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

function keyPressed(){
  if(keyCode=== 32){
    
    Matter.Body.setPosition(polygon_1.body,{x:110,y:100});
    sling.attach(polygon_1.body);
  }
}
