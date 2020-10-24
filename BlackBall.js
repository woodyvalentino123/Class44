class BlackBall extends Base {
    constructor(x,y,radius){
      super(x,y,radius);
      this.image = loadImage("images/BlackBall.png");
     }
     display(){
      if(this.body.position.x>5 &&this.body.position.x<1055 && this.body.position.y>100 && this.body.position.y<550){
        super.display();
   
     }
          else{World.remove(world, this.body);}
     }
 } 
 