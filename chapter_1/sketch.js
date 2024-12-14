let mover;
let active_key = null;

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  mover = new Mover();

  addEventListener('keydown', (event) => {
    active_key = event.key;
  })

  addEventListener('keyup', (event) => {
    if (event.key == active_key) {
      active_key = null;
    }
  })
}

function draw() {
  background(255);
  mover.accelerateTowardsMouse();
  mover.checkInput();
  mover.update();
  mover.checkEdges();
  mover.show();
}

class Mover {
  constructor() {
    this.position = createVector(100, 100, 50);
    this.velocity = createVector(10, 7.5, 5);
    this.acceleration = createVector(0, 0, 0);
    this.topSpeed = 10;

    normalMaterial();
  }
  
  accelerateTowardsMouse() {
    let mouse = createVector(mouseX, mouseY);
    let simple_pos = createVector(this.position.x, this.position.y);
    let dir = p5.Vector.sub(mouse, simple_pos);

    dir.normalize();
    dir.mult(0.2);
    this.acceleration = createVector(dir.x, dir.y, 0);
  }

  checkInput() {
    switch (active_key) {
      case "ArrowUp":
        this.acceleration = createVector(-0.1, -0.1, 0);
        break;
      case "ArrowDown":
        this.acceleration = createVector(0.1, 0.1, 0);
        break;
      default:
        break;
        //this.acceleration = createVector(0,0,0);
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);
  }

  show() {
    push();
    stroke(0);
    translate(this.position.x, this.position.y, this.position.z);
  
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  
    sphere(48);
    pop();
  }

  checkEdges() {
    // You still sometimes need to refer to the individual components of a p5.Vector and can do so using the dot syntax: position.x, velocity.y, and so forth.
    if (this.position.x > innerWidth * 0.5 || this.position.x < innerWidth * -0.5) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (this.position.y > innerHeight / 2 || this.position.y < innerHeight * -0.5) {
      this.velocity.y = this.velocity.y * -1;
    }
    if (this.position.z > 100 || this.position.z < -100) {
      this.velocity.z = this.velocity.z * -1;
    }
  }
}