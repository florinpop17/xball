let user;
let ball;

function setup(){
    createCanvas(800, 800);
    
    user = new User();
    ball = new Ball();
}

function draw() {
    background(0);
    
    user.move();
    user.edges();
    user.draw();
    
    ball.draw();
}
