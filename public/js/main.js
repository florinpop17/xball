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
    let d = dist(user.location.x, user.location.y, ball.location.x, ball.location.y);
    
    if(d < user.r + ball.r){
        let x = createVector(ball.location.x - user.location.x, ball.location.y - user.location.y);
        ball.applyForce(x);
        
//        ball.location.add(ball.location.sub(user.location)).normalize();
    }
}
