class User {
    constructor(_team){
        this.location = createVector(random(width), random(height));
        this.r = 25;
        this.speed = 3;
        this.isKicking = false;
        this.team = _team;
    }
    
    draw(){
        fill(200, 0, 100);
        strokeWeight(3);
        
        // Making the stroke white if is in kicking mode
        if(this.isKicking)
            stroke(255);
        else
            stroke(0);
        ellipse(this.location.x, this.location.y, this.r*2, this.r*2);
    }
    
    move(){
        if (keyIsDown(LEFT_ARROW))
            this.location.x -= this.speed;

        if (keyIsDown(RIGHT_ARROW))
            this.location.x += this.speed;

        if (keyIsDown(UP_ARROW))
            this.location.y -= this.speed;

        if (keyIsDown(DOWN_ARROW))
            this.location.y += this.speed;
    }
    
    edges() {
        if(this.location.x + this.r > width){
            this.location.x = width - this.r;
        } else if (this.location.x - this.r < 0) {
            this.location.x = this.r;
        }
        
        if(this.location.y + this.r > height){
            this.location.y = height - this.r;
        } else if (this.location.y - this.r < 0) {
            this.location.y = this.r;
        }
    }
}