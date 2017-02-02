let users = [];
let ball;
let user;
let x;

function setup(){
    createCanvas(800, 500);
    
    users.push(new User('teal'));
    users.push(new User('purple'));
    
    ball = new Ball();
}

function draw() {
    background('#00680A');
    drawField();
    
    pushBall(users, ball);
    
    users.forEach(user => {
        user.move();
        user.edges();
        user.draw();
    });
    
    ball.update();
    ball.edges();
    ball.draw();
    
}

function drawField() {
    // Draw field margins
    fill('#00680A');
    strokeWeight(10);
    stroke(255);
    rect(0, 0, width, height);
    
    // Draw middle line
    strokeWeight(6);
    line(width/2, 0, width/2, height);
    
    // Draw middle cercle
    ellipse(width/2, height/2, 100, 100);
    
    // Draw middle point
    fill(255);
    ellipse(width/2, height/2, 10, 10);
}

function pushBall(users, ball) {
    
    users.forEach(user => {
        let d = dist(user.location.x, user.location.y, ball.location.x, ball.location.y);

        if(d-3 <= user.r + ball.r){
            if(user.isKicking) {
                x = createVector(ball.location.x - user.location.x, ball.location.y - user.location.y).setMag(20);
            } else {
                x = createVector(ball.location.x - user.location.x, ball.location.y - user.location.y).setMag(1.5);
                user.isKicking = false;
            }
            ball.applyForce(x);
        }
    });
}

function keyPressed() {
    // 88 is the keyCode for the 'x' button
    // 83 is the keyCode for the 's' button
    users.forEach(user => {
        if(keyCode === 88 && user.team === 'purple') {
            user.isKicking = true;
        }
        if(keyCode === 83 && user.team === 'teal') {
            user.isKicking = true;
        }
    });
}

function keyReleased() {
    // 88 is the keyCode for the 'x' button
    // 83 is the keyCode for the 's' button
    users.forEach(user => {
        if(keyCode === 88 || keyCode === 83) {
            user.isKicking = false;
        }    
    });
}