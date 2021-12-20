class Ball {
    constructor(x, y) {
      var options = {
       // 'density':1.0,
        //'friction': 1.0,
        'restitution':1.0,
        
      };
      this.body = Bodies.circle(x, y, 50, options);
   //this.width = 70;
     // this.height = 70;
      World.add(world, this.body);
    };



    shoot() {
      var rand=random(28,60)
      var newAngle = this.body.angle -rand;
      newAngle = newAngle *(3.14/180)
      var velocity = p5.Vector.fromAngle(newAngle);
      velocity.mult(0.5);
     // Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {
        x: -velocity.x *(180/3.14), y: velocity.y * (180/3.14)});  
    }


    display(){
      var pos = this.body.position;
     pos.x = this.body.position.x;
     pos.y = this.body.position.y;
      //var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
     // strokeWeight(3);
      //stroke('blue')
      fill(0,0,255)
      ellipseMode(CENTER)
      ellipse(0, 0, 70, 70);
      pop();
    };
  };
  