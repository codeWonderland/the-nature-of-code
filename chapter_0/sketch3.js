function setup() {
    createCanvas(640, 240);
    background(255);
}

function draw() {
    let x = randomGaussian(320, 120);
    let y = randomGaussian(120, 40);
    let size = randomGaussian(45, 10);

    let r = randomGaussian(120, 60);
    let g = randomGaussian(120, 60);
    let b = randomGaussian(120, 60);

    noStroke();
    fill(r, g, b, 200);
    circle(x, y, size);
}