/*Final Project version 1*/

var grassColor = 'lightgreen';
var sidesColor = '#FAD7A0';
var treebColor = '#73C6B6';
var coupleImage;
var romanticSound;

function preload() {
    coupleImage = loadImage('couplekissing.png');
    romanticSound = loadSound('romantic.mp3');
}

function setup() {
    createCanvas(480, 600);
    romanticSound.playMode('restart');

}


function draw() {
    background('cyan');

    if (mouseIsPressed) {
        background('#2E4053');
        grassColor = 'darkgreen';
        sidesColor = '#D68910';
        treebColor = '#138D75';

    } else {
        //sun
        fill('yellow');
        stroke('gold');
        ellipse(255, 70, 150, 150);
        grassColor = 'lightgreen';
        sidesColor = '#FAD7A0';
        treebColor = '#73C6B6';

    }

    //Rockefeller Center landscape

    // clouds
    for (let a = 130; a < width; a += 250) {
        noStroke();
        fill('white');
        ellipse(a, 30, 180, 20);
        ellipse(a, 40, 190, 10);
        ellipse(a, 20, 100, 10);
        ellipse(a, 50, 120, 10);
    }

    //main building
    fill('#D7BDE2');
    let x = 220;
    let y = 50;
    let w = 70;
    let h = 600;

    quad(x, y, x + w, y, x + w * 2, y + h, x - w, y + h);

    //grass
    fill(grassColor);
    rect(0, 529, 640, 70);

    //left buildings
    for (let i = 0; i < 3; i++) {
        let w = 180 / 3;
        let x = i * w;
        let toph = 320 / 3;
        let topy = i * toph;
        let bottomh = 50 / 3;
        let bottomy = 560 - i * bottomh;
        fill(sidesColor);
        stroke('maroon');

        quad(x, topy, x + w, topy + toph, x + w, bottomy, x, bottomy + bottomh);

    }

    //right buildings
    for (let i = 0; i < 3; i++) {
        let w = 150 / 3;
        let x = width - i * w - w;
        let toph = 320 / 3;
        let topy = i * toph;
        let bottomh = 50 / 3;
        let bottomy = 560 - i * bottomh;
        fill(sidesColor);
        stroke('maroon');

        quad(x, topy + toph, x + w, topy, x + w, bottomy + bottomh, x, bottomy);
    }

    //seats
    fill(treebColor);
    rect(90, 530, 330, 70, 10);

    //tree trunk
    for (let a = 50; a < width; a += 210) {
        fill('brown');
        rect(a + 100, 400, 15, 220);
    }

    //small trees
    for (let a = 120; a < width; a += 210) {
        fill(grassColor);
        noStroke();
        ellipse(a + 15, 450, 100, 100);
        ellipse(a + 45 + 15, 450, 100, 100);
        ellipse(a + 25 + 15, 420, 100, 100);
    }


    /*couple kissing*/
    image(coupleImage, 165, 450, 150, 250);

    function mousePressed() {
        if (romanticSound.isPlaying()) {
            romanticSound.pause();
        } else {
            romanticSound.play();
        }
    }
}
