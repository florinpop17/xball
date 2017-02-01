let user;

function setup(){
    createCanvas(800, 800);
    
    user = new User;
}

function draw() {
    background(0);
    
    user.move();
    user.edges();
    user.draw();
}
