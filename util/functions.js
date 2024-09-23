function normalize(vector) {
    let local_vector = vector;

    if (Math.abs(vector.x) + Math.abs(vector.y) >= 2) {
        local_vector.x *= 0.5;
        local_vector.y *= 0.5;
    }

    return local_vector;
}