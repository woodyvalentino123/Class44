class Base{
    constructor(x,y,radius){
       var options = {
           isStatic:false
       } 
       this.body = Bodies.circle(x, y, radius, options);
       this.image = loadImage("images/BlackBall.png");
       this.radius = radius
       World.add(world, this.body);
     }
     display(){
         push();
         var pos =this.body.position;
        imageMode(RADIUS);
         fill("red");
         image(this.image,pos.x, pos.y, this.radius,this.radius);
         pop();
         if(this.body.position.y<200 && this.body.position.y>500){
            World.remove(world, this.body);
         }
     }
 } 
 
 
 
 
 