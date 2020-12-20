class Plinko {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'isStatic': true,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("white");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  