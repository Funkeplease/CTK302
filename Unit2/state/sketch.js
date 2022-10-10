let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("pink");
      // text("case 0", 100, 100);
      for (let j = 0; j <= height; j += 28) {
        for (let i = 0; i <= width; i += 25) {
          rect(i, j, 20, 20);
        }
      }
      break;

    case 1:
      background("blue");
      text("case 1", 100, 100);
      for (let j = 0; j <= height; j += 28) {
        for (let i = 0; i <= width; i += 25) {
          rect(i, j, 20, 20);
          rotate(45)
        }
      }
      break;

    case 2:
      fill("yellow");
      text("case 2", 100, 100);
      for (let j = 0; j <= height; j += 28) {
        for (let i = 0; i <= width; i += 25) {
          ellipse(i, j, 40, 40);
        }
      }
      break;

    case 3:
      background("red");
      text("case 3", 100, 100);
      for (let j = 0; j <= height; j += 28) {
        for (let i = 0; i <= width; i += 25) {
          ellipse(i, j, 20, 20);
        }
      }
      break;

    case 4:
      background("brown");
      text("case 4", 100, 100);
      for (let j = 0; j <= height; j += 28) {
        for (let i = 0; i <= width; i += 25) {
          triangle(i, j, 20, 20, 40, 40);
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
