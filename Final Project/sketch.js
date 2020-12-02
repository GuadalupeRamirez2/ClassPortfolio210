/*
 Final Project version 1
*/

function setup() {
    createCanvas(480, 600);
    pattern();
}

function mousePressed() {
    pattern();
}

function pattern() {
    background('cyan');

    //Rockefeller Center landscape

    // clouds
    for (let a = 110; a < width; a += 250) {
        noStroke();
        fill('white');
        ellipse(a, 30, 180, 20);
        ellipse(a, 40, 190, 10);
        ellipse(a, 20, 100, 10);
        ellipse(a, 50, 120, 10);
    }

    //main building
    fill('grey');
    rect(160, 100, 150, 900);

    //left building
    fill('blue')
    stroke('red');
    //quad(0,0,160,320,160,500,0,560);

    //left buildings
    for (let i = 0; i < 3; i++) {
        let w = 160/3;
        let x = i * w;
        let toph = 320/3;
        let topy= i * toph;
        let bottomh = 60/3;
        let bottomy = 560-i*bottomh;
        
        quad(x,topy, x + w, topy+toph, x + w, bottomy, x, bottomy+bottomh);
    }
    
    //right buildings
    for (let i = 0; i < 3; i++) {
        let w = 160/3;
        let x = i * w;
        let toph = 320/3;
        let topy= i * toph;
        let bottomh = 60/3;
        let bottomy = 560-i*bottomh;
}
