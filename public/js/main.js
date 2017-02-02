let users = [];
let ball;
let user;
let x;

let windowOffset = 30;
let goal = {x: 30, y: 150};

let score = 'Score 0-0';

function setup(){
    createCanvas(800, 500);
    
    users.push(new User('teal', windowOffset));
    users.push(new User('pink', windowOffset));
    
    ball = new Ball(windowOffset, goal);
}

function draw() {
    background('#00680A');
    drawField();
    drawScore();
    
    checkBallCollision(users, ball);
    
    users.forEach(user => {
        user.move();
        user.edges();
        user.draw();
    });
    
    ball.update();
    ball.edges();
    ball.draw();
    
}

function drawScore() {
    fill(255);
    strokeWeight(0);
    textSize(16);
    text(score, 50, 30);
}

function drawField() {
    // Draw field margins
    fill('#00680A');
    strokeWeight(10);
    stroke(255);
    rect(windowOffset, 0, width - windowOffset * 2, height);
    
    // Draw middle line
    strokeWeight(6);
    line(width/2, 0, width/2, height);
    
    // Draw middle cercle
    ellipse(width/2, height/2, 100, 100);
    
    // Draw middle point
    fill(255);
    ellipse(width/2, height/2, 10, 10);
    
    // Draw the 4 edges
    fill(0);
    stroke(0);
    // Top-left edge
    rect(0, 0, windowOffset - 3, height/2 - goal.y/2);
    // Bottom-left edge
    rect(0, height/2 + goal.y/2, windowOffset - 3, height/2 - goal.y/2);
    // Top-right edge
    rect(width-goal.x + 3, 0, windowOffset - 3, height/2 - goal.y/2);
    // Bottom-right edge
    rect(width-goal.x + 3, height/2 + goal.y/2, windowOffset - 3, height/2 - goal.y/2);
    
    // Drawing the 2 goals
    fill('#00680A')
    stroke(255);
    
    // Left goal
    rect(2, height/2 - goal.y/2, goal.x, goal.y);
    
    // Right goal
    rect(width - goal.x - 2, height/2 - goal.y/2, goal.x, goal.y);
}

function checkBallCollision(users, ball) {
    
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
        if(keyCode === 88 && user.team === 'pink') {
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