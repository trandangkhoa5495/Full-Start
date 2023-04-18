class Car {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getJumup() {
    this.y -= 50;
    if (this.y < -200) {
      this.y = 550;
    }
  }
  getJumdown() {
    this.y += 50;
    if (this.y > 550) {
      this.y = -150;
    }
  }
  getLeft() {
    this.x -= 50;
    if (this.x < -300) {
      this.x = 600;
    }
  }
  getRight() {
    this.x += 50;
    if (this.x > 600) {
      this.x = -300;
    }
  }
}

const car = new Car("lamborghini", 200, 200);
const carimg = document.querySelector("#img");
carimg.style.top = car.getY() + "px";
carimg.style.left = car.getX() + "px";

function redery() {
  carimg.style.top = car.getY() + "px";
}

function renderx() {
  carimg.style.left = car.getX() + "px";
}
redery();

function jumUp() {
  car.getJumup();
  redery();
}

function jumdown() {
  car.getJumdown();
  redery();
}

function left() {
  car.getLeft();
  renderx();
}

function right() {
  car.getRight();
  renderx();
}
