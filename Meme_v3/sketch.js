/*
meme V 3
by guadalupe ramirez
text + images
*/
var voiceImage;
var hangImage;
var exampleImage;
var s = 1;
var scaleSpeed =  0.01;


function preload() {
    voiceImage = loadImage('voicememe.jpg');
    hangImage = loadImage('hangup.png');
    exampleImage = loadImage('example.PNG');
}


function setup() {
    var canvas = createCanvas(840, 560);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    background(225, 52, 89);
    
    translate(10, 5);
    push();
    scale(s);
    s += scaleSpeed;
    if (s>2 || s < 0.25) {
        scaleSpeed *= -1;
    }
    
    if (mouseIsPressed) {
        image(exampleImage, 280, 15, 290, 530);
    } else {
        image(voiceImage, 110, 94);
        image(hangImage, 176, 337);
        pop();
        
        textSize(35);
        fill('gold');
        fill('gold');
        stroke('black');
        strokeWeight(10);
        text('Professor: Okay guys, thats it for to...', 35, 60);
        text('Me:', 35, 100);
    }
}