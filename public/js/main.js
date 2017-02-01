let user;
let ball;

function setup(){
    createCanvas(800, 800);
    
    user = new User();
    ball = new Ball();
}

function draw() {
    background('#00680A');
    
    user.move();
    user.edges();
    user.draw();
    
    ball.edges();
    ball.draw();
}
