class Ball{
    constructor(x, y, r) {
        var options = {
            
            'frictionAir':0.005,
            'density':1.0
        }
        this.r = r;
        this.body = Bodies.circle(x, y,this.r , options);
         World.add(world, this.body);

      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);

        strokeWeight(4);
        stroke("black");
        fill("white")
        ellipse(0,0,this.r,this.r);
        pop();
      }
}