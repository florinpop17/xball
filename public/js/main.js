class User {
    constructor(){
        this.x = width/2;
        this.y = width/2;
        this.r = 30;
        this.speed = 5;
    }
    
    draw(){
        fill(200, 0, 100);
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
        if (this.x > width + this.r) {
            this.x = -this.r;
        } else if (user.x < -this.r) {
            this.x = width + this.r;
        }

        if (this.y > height + this.r) {
            this.y = -this.r;
        } else if (this.y < -this.r) {
            this.y = height + this.r;
        }
    }
}

let user;

function setup(){
    createCanvas(800, 800);
    
    user = new User;
}

function draw() {
    background(0);
    
    user.move();
    user.edges();
    user.draw();
}
