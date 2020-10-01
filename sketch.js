/*
self portrait v3
by guadalupe ramirez
*/

//global scope
var x = 315; // character origin
var y = 210;

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background('orange');
    
    x = mouseX;
    y = mouseY;

    //face
    fill(162, 218, 24);
    square(x-110, y-60, 200, 20);//head
    //eyes
    fill(255, 255, 255);
    circle(x-55, y+10, 90); // left
    
    circle(x+65, y+10, 90); //right
    fill(85, 62, 57);
    circle(x-45, y+10, 50); // left brown eyeball
    fill(85, 62, 57);
    circle(x+75, y+10, 50); //right brown eyeball
    //nose
    fill(85, 62, 57);
    rect(x+5, y-40, 10, 100); //nose
    //mouth
    fill(218, 200, 24);
    rect(x-85, y+90, 80, 20);//lips

    //hat
    fill(24, 218, 182);
    rect(x-115, y-90, 200, 30);
    
    circle(x, y, 0);
}
