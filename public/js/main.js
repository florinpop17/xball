class User {
    constructor(){
        this.x = width/2;
        this.y = width/2;
        this.r = 30;
    }
}

let user;

function setup(){
    createCanvas(800, 800);
    
    user = new User;
}

function draw() {
    background(0);
    
    fill(255);
    ellipse(user.x, user.y, user.r*2, user.r*2);
}