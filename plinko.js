class Plinko{
    constructor(x, y){
        var plinkoOptions={
            'isStatic'    : true,
            'restitution' : 0.8
        }

         this.radius = 10;

         this.body = Bodies.circle(x, y, 10, plinkoOptions);

        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    ellipseMode(RADIUS);
    fill("red");
    ellipse(pos.x,pos.y,this.radius);
    }
}