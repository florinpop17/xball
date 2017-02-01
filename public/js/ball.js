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
        if (this.x > width + this.r) {
            this.x = -this.r;
        } else if (this.x < -this.r) {
            this.x = width + this.r;
        }

        if (this.y > height + this.r) {
            this.y = -this.r;
        } else if (this.y < -this.r) {
            this.y = height + this.r;
        }
    }
}