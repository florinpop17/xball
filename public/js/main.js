let users = [];
let ball;
let user;
let x;

function setup(){
    createCanvas(800, 800);
    
    user = new User();
    
    ball = new Ball();
}

function draw() {
    background('#00680A');
    
    kickBall(users, ball);
    
    user.move();
    user.edges();
    user.draw();
    
    ball.update();
    ball.edges();
    ball.draw();
    
}

function kickBall(users, ball) {
    
    let d = dist(user.location.x, user.location.y, ball.location.x, ball.location.y);

    if(d < user.r + ball.r){
        x = createVector(ball.location.x - user.location.x, ball.location.y - user.location.y).setMag(1);
        ball.applyForce(x);
    }

}
