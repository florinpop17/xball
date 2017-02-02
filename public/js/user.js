class User {
    constructor(_team){
        this.location = createVector(random(width), random(height));
        this.r = 25;
        this.speed = 3;
        this.isKicking = false;
        this.team = _team;
    }
    
    draw(){
        // Coloring depending on team
        if(this.team === 'teal'){
            fill(116, 194, 225);
        } else if(this.team === 'purple'){
            fill(200, 0, 100);
        }
        
        strokeWeight(3);
        
        // Making the stroke white if is in kicking mode
        if(this.isKicking)
            stroke(255);
        else
            stroke(0);
        ellipse(this.location.x, this.location.y, this.r*2, this.r*2);
    }
    
    move(){
        if (keyIsDown(LEFT_ARROW) && this.team === 'purple')
            this.location.x -= this.speed;

        if (keyIsDown(RIGHT_ARROW) && this.team === 'purple')
            this.location.x += this.speed;

        if (keyIsDown(UP_ARROW) && this.team === 'purple')
            this.location.y -= this.speed;

        if (keyIsDown(DOWN_ARROW) && this.team === 'purple')
            this.location.y += this.speed;
        
        // j code = 74
        if (keyIsDown(74) && this.team === 'teal')
            this.location.x -= this.speed;
        
        // l code = 76
        if (keyIsDown(76) && this.team === 'teal')
            this.location.x += this.speed;

        // i code = 73
        if (keyIsDown(73) && this.team === 'teal')
            this.location.y -= this.speed;

        // k code = 75
        if (keyIsDown(75) && this.team === 'teal')
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