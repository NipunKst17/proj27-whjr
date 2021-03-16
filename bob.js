class Bob  {
    constructor(x,y,radius)   {
        var options = {
            isStatic: false,
            restitution: 1.2,
            density: 3,
            friction: 0.4,
        }
        this.body = Bodies.circle(x,y,radius,options);

        this.radius = radius;

       // this.image = loadImage('paper.png');
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            fill("pink");
            ellipseMode(RADIUS);
            ellipse(0,0,this.radius,this.options); 

            pop();
        }

}