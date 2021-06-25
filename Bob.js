class Bob{
    constructor(x,y,r){
        var options={
            'density':0.4,
            'restitution':1.2,
            'friction':0,
            'isStatic':false
        }
        this.x=x;
        this.y=y;
        this.r=r/2;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0,this.r,this.r)
        pop();
    }
}