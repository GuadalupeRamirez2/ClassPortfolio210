/*
 Generative pattern version 2
*/

function setup() {
    createCanvas(640, 360);
    pattern();
}

function mousePressed() {
    pattern();
}

function pattern() {
    background(300);

    let w = random(30,50);
    let h = w;

    for (let a = 0; a < width + w; a += w) {
        for (let b = 0; b < height + h; b += h) {
            
            let r  = random(255);
            let g  = random(255);
            let v  = random(255);
            
            stroke(r,g,v+100);
            strokeWeight(8);
            noFill();
            line(a, b, a + w, b, ); //cyan lines
            line(a, b + h / 2, a + w, b + h / 2, ); // red  lines
            line(a, b, a, b + h, ); //pink lines
        }
    }
}