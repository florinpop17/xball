class Ball {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.r = 15;
        this.vel = 0;
    }
    
    draw() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.r*2, this.r*2);
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