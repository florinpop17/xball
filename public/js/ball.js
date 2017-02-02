class Ball {
    constructor() {
        this.location = createVector(random(width), random(height));
        this.velocity = createVector(0, 0);
        this.r = 15;
    }
    
    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
    }
    
    draw() {
        fill(255);
        strokeWeight(3);
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