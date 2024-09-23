class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    show() {
        stroke(0);
        point(this.x, this.y);
    }

    step() {
        let velocity = new Vector2(0, 0);

        if (random(1) < 0.5) { // at a weighted random chance
            // move towards mouse x
            if (mouseX < this.x) {
                velocity.x = -1;
            } else if (mouseX > this.x) {
                velocity.x = 1;
            } else {
                velocity.x = 0;
            }

            // move towards mouse y
            if (mouseY < this.y) {
                velocity.y = -1;
            } else if (mouseY > this.y) {
                velocity.y = 1;
            } else {
                velocity.y = 0;
            }
        } else {
            velocity.x = randomGaussian(0, 1);
            velocity.y = randomGaussian(0, 1);
        }

        // make sure we don't go faster on the diagonals
        velocity = normalize(velocity);

        this.x += velocity.x;
        this.y += velocity.y;
    }
}