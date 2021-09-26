class Snow{
    constructor(x,y){
        var options = {
            restitution : 5,
            density : 0.8,
            friction : 0.1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,30,30,options);
        World.add(world,this.body);
        this.image = loadImage("snow4.webp");
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,30,30);
        pop();
    }
}