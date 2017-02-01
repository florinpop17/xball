class User {
    constructor(){
        this.x = width/2;
        this.y = width/2;
        this.r = 30;
        this.speed = 5;
    }
    
    draw(){
        fill(200, 0, 100);
        noStroke();
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
    
    move(){
        if (keyIsDown(LEFT_ARROW))
            this.x -= this.speed;

        if (keyIsDown(RIGHT_ARROW))
            this.x += this.speed;

        if (keyIsDown(UP_ARROW))
            this.y -= this.speed;

        if (keyIsDown(DOWN_ARROW))
            this.y += this.speed;
        
    }
    
    edges() {
        if(this.x + this.r > width){
            this.x = width - this.r;
        } else if (this.x - this.r < 0) {
            this.x = this.r;
        }
        
        if(this.y + this.r > height){
            this.y = height - this.r;
        } else if (this.y - this.r < 0) {
            this.y = this.r;
        }
    }
}