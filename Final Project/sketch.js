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
    for (let a = 120; a < width; a += 250) {
        noStroke();
        fill('white');
        ellipse(a, 30, 180, 20);
        ellipse(a, 40, 190, 10);
        ellipse(a, 20, 100, 10);
        ellipse(a, 50, 120, 10);
    }

    //main building
    fill('pink');
    //rect(180, 100, 150, 900);
    let x = 200;
    let y = 50;
    let w = 50;
    let h = 600;
    
    quad(x,y, x+w,y,x+width+2, y+h, x, y+h);

    //left buildings
    for (let i = 0; i < 3; i++) {
        let w = 180 / 3;
        let x = i * w;
        let toph = 320 / 3;
        let topy = i * toph;
        let bottomh = 50 / 3;
        let bottomy = 560 - i * bottomh;
        fill('grey');
        stroke('maroon');

        quad(x, topy, x + w, topy + toph, x + w, bottomy, x, bottomy + bottomh);
        
    }

    //right buildings
    for (let i = 0; i < 3; i++) {
        let w = 150 / 3;
        let x =width-i*w - w;
        let toph = 320 / 3;
        let topy = i * toph;
        let bottomh = 50 / 3;
        let bottomy = 560 - i * bottomh;
        fill('grey');
        stroke('maroon');

        quad(x, topy+toph, x + w, topy, x + w, bottomy+bottomh, x, bottomy);
    }
    
    //background
    fill('grey');
    rect(90,530,330,70,10);

    //tree trunk
    for (let a = 50; a < width; a += 210) {
        fill('brown');
        rect(a + 100, 400, 15, 220);
    }

    //small trees
    for (let a = 120; a < width; a += 210) {
        fill('lightgreen');
        noStroke();
        ellipse(a + 15, 450, 100, 100);
        ellipse(a + 45 + 15, 450, 100, 100);
        ellipse(a + 25 + 15, 420, 100, 100);
    }

}
