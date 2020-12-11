class Stone{
    constructor(x, y,diametre) {
        var options = {
            'restitution':0.6,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, diametre/2, options);
        this.diametre=diametre;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.diametre,this.diametre);
        //image(this.image, 0, 0, this.diametre,this.diameter);
        pop();
      }
}