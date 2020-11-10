/*
 pattern version 1
 javascript loops
*/

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background('lightblue');



    // clouds
    for (let a = 90; a < width; a += 210) {
        noStroke();
        fill('white');
        ellipse(a, 30, 180, 20);
        ellipse(a, 40, 190, 10);
        ellipse(a, 20, 100, 10);
        ellipse(a, 50, 120, 10);

    }

    // light poles
    for (let a = 30; a < width; a += 140) {
        rect(a + 100, 100, 10, 220); //poles
        fill('brown');
    }

    //train wheels
    for (let a = -90; a < width; a += 150) {
        noStroke();
        ellipse(a + 10, 330, 20, 20); //wheels
        fill('black');
        ellipse(a + 30, 330, 20, 20); //wheels
        fill('black');
        ellipse(a + 110, 330, 20, 20); //wheels
        fill('black');
        ellipse(a + 130, 330, 20, 20); //wheels
        fill('black');
    }


    // train
    for (let a = -90; a < width; a += 150) {
        stroke('black');
        strokeWeight(4);
        rect(a, 240, 140, 90, 10); //windows
        fill('gold');
        rect(a, 275, 138, 30, 10); //wagons
        fill('orange');
    }
}
