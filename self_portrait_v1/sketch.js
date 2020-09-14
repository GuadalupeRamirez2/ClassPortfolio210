/*
self portrait v1
by guadalupe ramirez
*/

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background('yellow');

    //face
    fill(162, 218, 24);
    square(200, 150, 200, 20);//head
    //eyes
    fill(255, 255, 255);
    circle(260, 200, 90); // left
    circle(380, 200, 90); //right
    fill(85, 62, 57);
    circle(270, 200, 50); // left brown eyeball
    fill(85, 62, 57);
    circle(390, 200, 50); //right brown eyeball
    //nose
    fill(85, 62, 57);
    rect(320, 170, 10, 100); //nose
    //mouth
    fill(218, 200, 24);
    rect(230, 300, 80, 20);//lips

    //hat
    fill(24, 218, 182);
    rect(200, 120, 200, 30);
}
