/*
    debug exercise
*/

var faceSize = "one hundred" * 3;
var x = 250;
var y = 250;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(50);
    noStroke();
    fill("lightblue");
    ellipse(350, 320, faceSize); // face

    fill(0, 0, 0);
    ellipse(450, 250, 100); // right eye
    ellipse(x, y, 100); // left eye
    ellipse(x, y + 100, 100, 50); // mouth

    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont("monospace");
    text ("Nice work!", 65, 110);
}
