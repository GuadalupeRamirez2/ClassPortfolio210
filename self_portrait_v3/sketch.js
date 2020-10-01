/*
self portrait v3
by guadalupe ramirez
*/

//global scope
var x = 315; // character origin
var y = 210;
var faceSize = 200;

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(225, 52, 89);
    
    //face
    fill( 71, 176, 236);
    square(x-110, y-60, faceSize+ frameCount);//head
    
    var temp=x;
    x = mouseX;
    
    //eyes
    fill(255, 255, 255);
    circle(x-55, y+10, faceSize/2); // left
    
    circle(x+65, y+10, faceSize/2); //right
    fill(85, 62, 57);
    circle(x-45, y+10, faceSize/4); // left brown eyeball
    fill(85, 62, 57);
    circle(x+75, y+10, faceSize/4); //right brown eyeball
    //nose
    fill(85, 62, 57);
    rect(x+5, y-40, 10, faceSize/2); //nose
    //mouth
    fill(218, 200, 24);
    rect(x-85, y+90, faceSize/2-20,faceSize/10);//lips
     
    
     x  =  temp;
    
    //curtain
    fill(230, 74, 237);
    rect(x-115, y-90, faceSize, 30+ frameCount);
    
    circle(x, y, 0);
    
}
