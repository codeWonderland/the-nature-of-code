class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector_b) {
        this.x += vector_b.x;
        this.y += vector_b.y;
    }

    sub(vector_b) {
        this.x -= vector_b.x;
        this.y -= vector_b.y;
    }

    mult(vector_b) {
        this.x *= vector_b.x;
        this.y *= vector_b.y;
    }

    div(vector_b) { // Handle div by 0 errors where you use this
        this.x /= vector_b.x;
        this.y /= vector_b.y;
    }
}

class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}