/*
sound sampler v1 
*/

var pacmanSound, pacman2Sound, pacman3Sound, pacman4Sound;
var rapSound;

function preload() {
    pacmanSound = loadSound('pacman.mp3');
    pacman2Sound = loadSound('pacman2.mp3');
    pacman3Sound = loadSound('pacman3.mp3');
    pacman4Sound = loadSound('pacman4.mp3');
    rapSound = loadSound('cityrap.mp3');
}

function setup() {
    createCanvas(640, 360);
    pacmanSound.playMode('restart');
    pacman2Sound.playMode('restart');
    pacman3Sound.playMode('restart');
    pacman4Sound.playMode('restart');

}

function draw() {
    background(220);

    if (rapSound.isPlaying()) {
        background('blue');
    }

    if (pacmanSound.isPlaying()) {
        fill('gold');
        noStroke();
        ellipse(100, 260, 50, 50, 10);
        ellipse(200, 260, 50, 50, 10);
        ellipse(300, 260, 50, 50, 10);
        ellipse(400, 260, 50, 50, 10);
        ellipse(500, 260, 50, 50, 10);
        ellipse(600, 260, 50, 50, 10);

    }
    if (pacman2Sound.isPlaying()) {
        fill('orange');
        noStroke();
        rect(100, 100, 50, 50, 10);
        rect(200, 150, 50, 50, 10);
        rect(300, 200, 50, 50, 10);
        rect(400, 250, 50, 50, 10);
        rect(500, 300, 50, 50, 10);
        rect(600, 50, 50, 50, 10);

    }
    if (pacman3Sound.isPlaying()) {
        fill('pink');
        noStroke();
        rect(20, 100, 50, 50, 10);
        rect(80, 150, 50, 50, 10);
        rect(160, 200, 50, 50, 10);
        rect(260, 250, 50, 50, 10);
        rect(350, 300, 50, 50, 10);
        rect(400, 50, 50, 50, 10);

    }
    if (pacman4Sound.isPlaying()) {
        fill('cyan');
        noStroke();
        rect(100, 160, 50, 50, 10);
        rect(200, 160, 50, 50, 10);
        rect(300, 160, 50, 50, 10);
        rect(400, 160, 50, 50, 10);
        rect(500, 160, 50, 50, 10);
        rect(600, 160, 50, 50, 10);


    }
    //visualize sound time
    var currentTime = rapSound.currentTime();
    var duration = rapSound.duration();
    var timeElapsed = map(currentTime, 0, duration, 0, width);

    fill('yellow');
    noStroke();
    arc(timeElapsed, 255, 100, 100, 0.5, TWO_PI - 0.5, );
}

function mousePressed() {
    if (rapSound.isPlaying()) {
        rapSound.pause();
    } else {
        rapSound.play();
    }
}

function keyPressed() {
    if (keyCode == 13) { //enter key
        pacmanSound.play();
    }
    if (keyCode == 65) { //a key
        pacman2Sound.play();
    }
    if (keyCode == 66) { //b key
        pacman3Sound.play();
    }
    if (keyCode == 67) { //c key
        pacman4Sound.play();
    }

}
