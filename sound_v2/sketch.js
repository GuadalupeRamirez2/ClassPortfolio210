/*
Interaction 2 - collision
*/
var currentColor;
var p, o, c;
var colorNumber = 0;
var pacmanSound;

function preload() {
    pacmanSound = loadSound('pacman.mp3');
}


function setup() {
    createCanvas(640, 360);
    pacmanSound.playMode('restart');
    p = color(172, 3, 174); //purple
    o = color(255, 165, 0); //orange
    c = color(0, 255, 255); //cyan
    currentColor = p;
}

function mousePressed() {
    //click pacman
    var d = dist(475, 220, mouseX, mouseY);
    if (d < 50) { 
        pacmanSound.play();
    }
     
    
    //click the ghost
    if (mouseX > 100 && mouseX < 150 && mouseY > 200 && mouseY < 250) {
        fill('blue');
         // change the background color
        colorNumber++;
        if (colorNumber == 3) {
            colorNumber = 0;
        }
        if (colorNumber==0){
            currentColor=p;
        } else if (colorNumber==1){
            currentColor=o;
        } else if (colorNumber==2){
            currentColor=c;
        }
    }
}

function draw() {
    background(currentColor);


    // pacman button
    fill('yellow');
    var d = dist(475, 220, mouseX, mouseY);
    if (d < 50) {
        fill('blue');
    }
    arc(475, 220, 100, 100, 180, PI + TWO_PI, PIE);

    //ghost button
    fill('red');

    rect(100, 200, 50, 50, 10);
}
