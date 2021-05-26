class Plinko{
    constructor(x,y,width){
        var options={
            isStatic:true,
          
        }    
        this.body = Bodies.rectangle(x,y,width,options);
        
        this.pen={'x':x,'y':y}
        this.width=width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        //var pen = this.body.position;
        fill("white");
             
        circle(this.pen.x,this.pen.y,10);
    }
}