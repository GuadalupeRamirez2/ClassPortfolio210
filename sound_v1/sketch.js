/*
sound sampler v1 
*/

var pacmanSound;
var rapSound;

function preload() {
    pacmanSound = loadSound('pacman.flac');
    rapSound = loadSound('cityrap.mp3');
}

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(220);
    
    if (rapSound.isPlaying()) {
        background('orange');
    }
    //visualize sound time
    var  currentTime = rapSound.currentTime();
    var duration = rapSound.duration();
    var timeElapsed = map(currentTime, 0, duration, 0, width);
    
    fill('red');
    noStroke();
    rect(0, height - 100, timeElapsed, 100);
}

function mousePressed() {
    if (rapSound.isPlaying()) {
        rapSound.pause();
    } else {
        rapSound.play();
    }
}