class Particle{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
           
        }
        this.r=r;
       
        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(0,255),random(0,255));
        World.add(world, this.body);
        

        this.width=width;
        this.height = height;
    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;

        fill("red");
        circle(pos.x,pos.y,this.r)
        
      
    }
}