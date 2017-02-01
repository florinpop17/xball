class Ball {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.velX = 0;
        this.velY = 0;
        this.r = 15;
        this.vel = 0;
    }
    
    update() {
        this.x += this.velX;
        this.y += this.velY;
    }
    
    draw() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
    
    edges() {
        if(this.x + this.r > width){
            this.x = width - this.r;
            this.velX *= -1;
        } else if (this.x - this.r < 0) {
            this.velX *= -1;
            this.x = this.r;
        }
        
        if(this.y + this.r > height){
            this.velY *= -1;
            this.y = height - this.r;
        } else if (this.y - this.r < 0) {
            this.velY *= -1;
            this.y = this.r;
        }
    }
}