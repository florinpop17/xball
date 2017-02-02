class Ball {
    constructor() {
        this.location = createVector(random(width), random(height));
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.r = 15;
    }
    
    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        
        this.velocity.limit(5);
    }
    
    applyForce(force) {
        this.acceleration = force;
        return force;
    }
    
    draw() {
        fill(255);
        strokeWeight(3);
        ellipse(this.location.x, this.location.y, this.r*2, this.r*2);
    }
    
    edges() {
        if(this.location.x + this.r > width){
            this.location.x = width - this.r;
            this.velocity.x *= -1;
        } else if (this.location.x - this.r < 0) {
            this.velocity.x *= -1;
            this.location.x = this.r;
        }
        
        if(this.location.y + this.r > height){
            this.velocity.y *= -1;
            this.location.y = height - this.r;
        } else if (this.location.y - this.r < 0) {
            this.velocity.y *= -1;
            this.location.y = this.r;
        }
    }
}