class Ball {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.r = 15;
        this.vel = 0;
    }
    
    draw() {
        fill(60);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}