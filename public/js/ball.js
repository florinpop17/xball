class Ball {
    constructor(_windowOffset) {
        this.location = createVector(width/2, height/2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.r = 15;
        this.frictionConstant = 0.05;
        
        this.windowOffset = _windowOffset;
    }
    
    update() {
        this.applyFriction();
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        
        this.acceleration.mult(0);
    }
    
    applyFriction() {
        let friction = this.velocity.copy();
        friction.mult(-1 * this.frictionConstant);
        
        this.applyForce(friction);
    }
    
    applyForce(force) {
        this.acceleration.add(force);
        return force;
    }
    
    draw() {
        fill(255);
        strokeWeight(3);
        stroke(0);
        ellipse(this.location.x, this.location.y, this.r*2, this.r*2);
    }
    
    scored(team) {
        console.log(`Team ${team} scored!`);
    }
    
    edges() {
        
        // Check if outside the goal (y check) right-side
        if(this.location.x + this.r > width - windowOffset && this.location.y < height/2 - goal.y/2 || this.location.x + this.r > width - windowOffset && this.location.y > height/2 + goal.y/2){
                this.location.x = width - this.r - windowOffset;
                this.velocity.x *= -1;
        
        // Check if inside the goal right-side && score team 1 (purple)
        } else if (this.location.x + this.r > width && this.location.y > height/2 - goal.y/2 || this.location.x + this.r > width && this.location.y < height/2 + goal.y/2){
                this.location.x = width - this.r;
                this.scored('purple');
        
        // Check if outside the goal (y check) left-side
        }      this.location.x = width - this.r;
                this.scored('purple');
        }
        
        if(this.location.y + this.r > height){
            this.velocity.y *= -1;
            this.location.y = height - this.r;
        } else if (this.location.y - this.r < 0) {
            this.velocity.y *= -1;
            this.location.y = this.r;
        }
                
                
                
        // Working with no goal
//        if(this.location.x + this.r > width - windowOffset){
//            this.location.x = width - this.r - windowOffset; 
//            this.velocity.x *= -1;
//        } else if (this.location.x - this.r < windowOffset) {
//            this.velocity.x *= -1;
//            this.location.x = this.r + windowOffset;
//        }
//        
//        if(this.location.y + this.r > height){
//            this.velocity.y *= -1;
//            this.location.y = height - this.r;
//        } else if (this.location.y - this.r < 0) {
//            this.velocity.y *= -1;
//            this.location.y = this.r;
//        }
    }
}