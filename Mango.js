class Mango{
    constructor(x, y, diameter) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':0.3,
            'density':1.0,
        }
        this.x = x;
      this.y = y;
      this.d = diameter;
      this.body = Bodies.circle(this.x, this.y, this.d, options);
      this.image = loadImage("Plucking mangoes/mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(4);
      stroke("green");
      fill("yellow");
      imageMode(CENTER);
      ellipseMode(CENTER);
	    image(this.image, 0,0,this.d, this.d)
      pop();
    }
  }