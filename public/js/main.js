let user;
let ball;

function setup(){
    createCanvas(800, 800);
    
    user = new User();
    ball = new Ball();
}

function draw() {
    background('#00680A');
    
    kickBall(user, ball);
    
    user.move();
    user.edges();
    user.draw();
    
    ball.update();
    ball.edges();
    ball.draw();
    
}

function kickBall(user, ball) {
    let d = dist(user.x, user.y, ball.x, ball.y);
    
    if(d < user.r + _ball.r){
        ball.x += norm(ball.x - user.x, 1, 10) * 3;
        ball.y += norm(ball.y - user.y, 1, 10) * 3;
    }
}
