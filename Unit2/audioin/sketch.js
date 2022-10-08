let mic;
let vol = 0;
let i1;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage ("assets/happy.jpg");
  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background("#1F85DE");
  image(i1, width / 2, height / 2 + 120, 100, 100);

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // text on the screen for debugging
  textSize(18);
  fill("white")
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3),
    10,
    60
  );

  // this moves the box
  //  x = vol*200 ;
  x = map(vol, 0, 1, 0, width);
  ellipse(x, 200, 50, 50);
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
