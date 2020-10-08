/*
meme V 2
by guadalupe ramirez
text + images
*/

//var voiceImage;
//var hangImage;

function preload() {
    voiceImage = loadImage('voicememe.jpg');
    hangImage = loadImage('hangup.png');
}


function setup() {
    createCanvas(600, 600);
}
    
function draw() {
    background(0);
    
     if (mouseIsPressed) {
        image(hangImage, 0, 0);
    }  else {
        image(voiceImage, 0, 0);
    }
}
    
    /* image */
    //image(voiceImage, 110, 94);

    /*hang up button*/
    //image(hangImage, 176, 337);

    //textSize(35);
    //fill('gold');
    //fill('gold');
    //stroke('black');
    //strokeWeight(10);
    //text('Professor: Okay guys, thats it for to...', 35, 60);
    //text('Me:', 35, 100);
}
