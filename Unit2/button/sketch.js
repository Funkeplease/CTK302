let state = 0;
// hiiii
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background("pink");
      text("What do you call a fish with no eyes?", width / 2, height / 2);
      break;

    case 1:
      background("#62B371");
      text("A fsh", width / 2, height / 2);
      break;
  }

  rect(width/2, height - 100, 150, 50);
}

function mouseReleased() {
  if (
    mouseX > width / 2 - 75 &&
    mouseX < width / 2 + 75 &&
    mouseY > height - 125 &&
    mouseY < height - 75
  ) {
    state++;
    if (state > 1) state = 0;
  }
}
