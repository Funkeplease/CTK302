let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background("pink");
      text("Can openers that don't work are called what?", width / 2, height / 2);
      break;

    case 1:
      background("blue");
      text("A can't opener!", width / 2, height / 2);
      break;
  }

  timer++;
  if (timer > 4 * 60) {
    timer = 0;
    state++;
    if (state > 1) {
      state = 0;
    }
  }
}
