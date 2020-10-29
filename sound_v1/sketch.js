/*
sound sampler v1 
*/

var pacmanSound, pacman2Sound, pacman3Sound, pacman4Sound, pacman5Sound;
var rapSound;

function preload() {
    pacmanSound = loadSound('pacman.mp3');
    pacman2Sound = loadSound('pacman2.mp3');
    pacman3Sound = loadSound('pacman3.mp3');
    pacman4Sound = loadSound('pacman4.mp3');
    pacman5Sound = loadSound('pacman5.mp3');
    rapSound = loadSound('cityrap.mp3');
}

function setup() {
    createCanvas(640, 360);
    pacmanSound.playMode('restart');
    pacman2Sound.playMode('restart');
    pacman3Sound.playMode('restart');
    pacman4Sound.playMode('restart');
    pacman5Sound.playMode('restart');

}

function draw() {
    background(220);

if(rapSound.isPlaying()) {
    background('purple');
}

if (pacmanSound.isPlaying()) {
    fill('blue');
    noStroke();
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
}
    if (pacman2Sound.isPlaying()) {
    fill('red');
    noStroke();
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
}
    if (pacman3Sound.isPlaying()) {
    fill('pink');
    noStroke();
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
}
    if (pacman3Sound.isPlaying()) {
    fill('cyan');
    noStroke();
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
}
    if (pacman3Sound.isPlaying()) {
    fill('orange');
    noStroke();
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
    ellipse(random(width), random(height), random(100, 200));
}
    //visualize sound time
    var currentTime = rapSound.currentTime();
    var duration = rapSound.duration();
    var timeElapsed = map(currentTime, 0, duration, 0, width);
    
    fill('yellow');
    noStroke();
    rect(0, height -100, timeElapsed, 100);
}
    function mousePressed() {
        if (rapSound.isPlaying()) {
            rapSound.pause();
        } else {
            rapSound.play();
        }
    }

function keyPressed(){
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
        pacman4SoundSound.play();
    }
    if (keyCode == 68) { //d key
        pacman5SoundSound.play();
    }
    
}