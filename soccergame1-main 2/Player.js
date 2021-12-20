class Player {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 500;
      this.height = 500;
      this.image1=loadImage("soccerplayerstanding.png")
      this.image2=loadImage("soccerplayerkick.png")
      this.flag=false;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      if(this.flag==true)
      {
        image(this.image2,0, 0, this.width, this.height);
      }else{
        image(this.image1,0, 0, this.width, this.height);
      }

      pop();
    }
  };
  