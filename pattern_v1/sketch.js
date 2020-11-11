/*
 pattern version 1
 javascript loops
*/

function setup() {
    createCanvas(640, 360);
}

function mousePressed() {
    pattern();
}

function pattern() {
    background('cyan');



    // clouds
    for (let a = 90; a < width; a += 210) {
        noStroke();
        fill('white');
        ellipse(a, 30, 180, 20);
        ellipse(a, 40, 190, 10);
        ellipse(a, 20, 100, 10);
        ellipse(a, 50, 120, 10);

    }

    // buildings
    for (let a = 0; a < width; a += 90) {
        fill('plum');
        let y = random(50, 280);
        rect(a + 100, y, 80, 500);
        fill('lightblue');
        rect(a + 50, y - 25, 40, 300);
        fill('pink')
        rect(a, y, 60, 250);
    }

    // light poles
    for (let a = 30; a < width; a += 140) {
        fill('black');
        rect(a + 100, 100, 10, 220); //poles
        fill('yellow');
        ellipse(a - 36, 90, 35); //lightbowls
    }

    //train wheels
    for (let a = -90; a < width; a += 150) {
        noStroke();
        fill('black');
        ellipse(a + 10, 330, 20, 20); //wheels
        ellipse(a + 30, 330, 20, 20); //wheels
        ellipse(a + 110, 330, 20, 20); //wheels
        ellipse(a + 130, 330, 20, 20); //wheels

        //train
        stroke('black');
        strokeWeight(4);
        fill('orange');
        rect(a + 1, 240, 150, 90, 10); //wagons
        fill('gold');
        rect(a + 10, 275, 130, 30, 10); //windows
    }
}
