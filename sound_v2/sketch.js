/*
Interaction 2 - collision
*/
var currentColor;
var p, o, c;
var colorNumber = 0;
var pacmanSound, pacman2Sound, pacman3Sound, rapSound;

function preload() {
    pacmanSound = loadSound('pacman.mp3');
    pacman2Sound = loadSound('pacman2.mp3');
    pacman3Sound = loadSound('pacman3.mp3');
    rapSound = loadSound('cityrap.mp3');
}


function setup() {
    createCanvas(640, 360);
    pacmanSound.playMode('restart');
    rapSound.playMode('restart');
    p = color(172, 3, 174); //purple
    o = color(255, 165, 0); //orange
    c = color(0, 255, 255); //cyan
    currentColor = p;
}

function mousePressed() {
    //click pacman
    var d = dist(475, 220, mouseX, mouseY);
    if (d < 50) {
        rapSound.play();
    }
    
    ghostButton(100, 200, 50, 50, 10);

}

function draw() {
    background(currentColor);

    button(40, 220, 50, pacmanSound);
    button(240, 220, 50, pacman2Sound);
    button(340, 220, 50, pacman3Sound);

    var x = 100;
    var y = 200;
    var w = 50;
    var h = 50;
    
     //detect mouse inside rect
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        fill('blue');
    } else {
        fill('red');
    }
    rect(x, y, w, h, 10);
    
    //click coin
    function button(x, y, s, sound) {
        var d = dist(x, y, mouseX, mouseY);
        //calculate distance
        if (d < s / 2) {
            //inside the button
            fill('yellow');

            if (mouseIsPressed && !sound.isPlaying()) {
                sound.play();
            }
        } else {
            //outside the button
            fill('gold');
        }
        ellipse(x, y, s, 50, 10);
    }

    // pacman button
    fill('yellow');
    var d = dist(475, 220, mouseX, mouseY);
    if (d < 50) {
        fill('blue');
    }
    arc(475, 220, 100, 100, 180, PI + TWO_PI, PIE);

}

function ghostButton(x, y, w, h) {

    //click the ghost
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        fill('blue');

        // change the background color
        colorNumber++;
        if (colorNumber == 3) {
            colorNumber = 0;
        }
        if (colorNumber == 0) {
            currentColor = p;
        } else if (colorNumber == 1) {
            currentColor = o;
        } else if (colorNumber == 2) {
            currentColor = c;
        }
    }
}
