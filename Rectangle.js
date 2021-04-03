class car{
    constructor(x,y,width,height){
        var options = {
        isStatic : false
        // restitution:0.8,
        // density:1.0,
        // friction:1.2
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.radius = 50
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        
       
        // this.width = width
        // this.height = height
        this.image = loadImage("car.png")
            
        // World.add(world,this.body)
        }
        
        display(){
            var pos = this.body.position;
            imageMode(CENTER)
            image(this.image, pos.x,pos.y,this.width,this.height);
          
        }
        }