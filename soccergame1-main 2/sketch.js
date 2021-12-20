var backgroundIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
//const Constraint = Matter.Constraint;
var engine, world
var balls = []
var ball;
function preload()
{
backgroundIMG=loadImage("Soccer.jpeg");

}

function setup() {
createCanvas(1200,700);
engine=Engine.create();
world=engine.world;
goal=new Goal(50,100,70,80);
//ground= new Ground(600,380,,600);
ground2 = new Ground(600,690,1200,20)
//ball = new Ball(800,500);
player=new Player(1150,550)
}

function draw() {
console.log(player.body.position.x);
background(backgroundIMG);
Engine.update(engine);
goal.display();
//ground.display();
ground2.display();
//ball.display();
player.display();

if (keyCode === DOWN_ARROW) {
  ball = new Ball(player.body.position.x-200, player.body.position.y);
  //ball.trajectory = [];
  //Matter.Body.setAngle(cannonBall.body, cannon.angle);


}
ball.display()
//console.log(ball.body)
//mousePressed();
keyPressed();
showball();
}

    function keyPressed() {
     
  }

function showball() 
{
 // ball.display();
}


function mousePressed()
{
//  console.log(mouse)
   ball.shoot();
}
function collisionWithBalls(index) {
  for (var i = 0; i < balls.length; i++) {
    if (balls[index] !== undefined) {
      var collision = Matter.SAT.collides(balls[index].body, goal.body);

      if (collision.collided) {
        score+=3
          balls.remove(i);
        

        Matter.World.remove(world, balls[index].body);
        delete balls[index];
      }
    }
  }
}