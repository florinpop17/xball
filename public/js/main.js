let user;
let ball;

function setup(){
    createCanvas(800, 800);
    
    user = new User();
    ball = new Ball();
}

function draw() {
    background('#00680A');
    
    hitBall(user, ball);
    
    user.move();
    user.edges();
    user.draw();
    
    ball.update();
    ball.edges();
    ball.draw();
}

function hitBall(_user, _ball) {
    let d = dist(_user.x, _user.y, _ball.x, _ball.y);
    
    if(d < _user.r + _ball.r)
        console.log('HIT');
}
