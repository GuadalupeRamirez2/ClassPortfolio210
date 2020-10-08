/*
meme V 1
by guadalupe ramirez
text + images
*/

var voiceImage;
var hangImage;

function preload() {
    voiceImage = loadImage('voicememe.jpg');
    hangImage = loadImage('hangup.png');
}


function setup() {
    var canvas = createCanvas(840, 560);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    background(225, 52, 89);

    /* image */
    image(voiceImage, 110, 94);

    /*hang up button*/
    image(hangImage, 176, 337);

    textSize(35);
    fill('gold');
    fill('gold');
    stroke('black');
    strokeWeight(10);
    text('Professor: Okay guys, thats it for to...', 35, 60);
    text('Me:', 35, 100);
}
