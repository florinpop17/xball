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
    
    pushBall(users, ball);
    
    user.move();
    user.edges();
    user.draw();
    
    ball.update();
    ball.edges();
    ball.draw();
    
}

function pushBall(users, ball) {
    
    let d = dist(user.location.x, user.location.y, ball.location.x, ball.location.y);

    if(d < user.r + ball.r){
        if(user.isKicking) {
            x = createVector(ball.location.x - user.location.x, ball.location.y - user.location.y).setMag(30);
        } else {
            x = createVector(ball.location.x - user.location.x, ball.location.y - user.location.y).setMag(1);
            user.isKicking = false;
        }
        ball.applyForce(x);
    }

}

function keyPressed() {
    // 88 is the keyCode for the 'x' button
    if(keyCode === 88) {
        user.isKicking = true;
    }
}

function keyReleased() {
    // 88 is the keyCode for the 'x' button
    if(keyCode === 88) {
        user.isKicking = false;
    }    
}