var mic;
var vol = 0;
let total = 0;
let state = 0;
let s1;
let f1,f2,f3,f4,f5;

function preload(){
  s1 = loadSound("assets/warning.wav");
}
function setup() {
  createCanvas(400, 400);

  f1 = loadFont("assets/regular.ttf");
  f2 = loadFont("assets/band.ttf");
  f3 = loadFont("assets/easter.ttf");
  f4 = loadFont("assets/hangedletters.ttf");
  f5 = loadFont("assets/cutenotes.ttf");
  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  angleMode(DEGREES);
  noStroke();
  textAlign(CENTER);
}

function draw() {
  background("purple");

  switch (state) {
    case 0:
      // text on the screen for debugging
      fill("white");
      textSize(15);
      text("Click to start \n  Most Domestic violence cases are not reported \n and this leads to a spiral of ills. \n This state machine which is an alarm, \n  goes off after a minute of consistent yelling. \n It is designed to enable reporting. \n  Keep yelling for a minute and let's see what happens.",width / 2, height / 2);
      break;

    case 1:
      // get the sound input
      vol = mic.getLevel(); // returned level is between 0 and 1

      total += 3 * vol;
      //    fill("black");
      // textSize(10);
      // text(vol.toFixed(3), 30, 30);

      let secs = int(total / 3);

      // this will determine which quadrant of the circle we are in
      let whichQuadrant = int(secs / 15);
      // text(whichQuadrant, 200, 240);

      fill("white");
      textFont(f1, 20);
      

      switch (whichQuadrant) {
          
        case 0: // 0-15 seconds
          background("#purple");  // you can change this!
          if (int(total) > 0) {
            fill("#5D3FD3");  // you can change this!
            arc(width / 2, height / 2, 300, 300, -90, int(total) * 2 - 90, PIE);
          }
          fill("purple");  // you can change this!
          textFont(f2, 20);
          text("Yell!", width / 2, height / 2);
          break;

        case 1: // 16-30 seconds
          background("#E6E6FA");
          fill("#5D3FD3");
          arc(width / 2, height / 2, 300, 300, -90, int(total) * 2 - 90, PIE);
          fill("white");
          textFont(f1, 20);
          text("Hey are you good?", width / 2, height / 2);

          break;

        case 2: // 31-45 seconds
          background("	#CBC3E3");
          fill("#5D3FD3");
          arc(width / 2, height / 2, 300, 300, -90, int(total) * 2 - 90, PIE);
          fill("white");
          textFont(f5, 20);
          text("Help is coming", width / 2, height / 2);

          break;

        case 3: // 46-59 seconds
          background ("#CF9FFF");
          fill("#5D3FD3");
          arc(width / 2, height / 2, 300, 300, -90, int(total) * 2 - 90, PIE);
          fill("white");
          textFont(f5, 20);
          text("Take deep breaths", width / 2, height / 2);
          //state++;
          if (!s1.isPlaying()){
            s1.play();
          }
          if (secs > 59){
            state = 2;
          }
          break;
      }

      fill("white");
      textSize(20);
      text(secs + " seconds", width / 2, height / 2 + 30);
      if (secs > 59) state = 2;
      break;

    case 2: // some sort of ending
      background("#5D3FD3	");
      textFont(f1, 20);
      text("You did great, you’ll be out of there soon!", width / 2, height / 2);
  }
}

function mouseReleased() {
  if (state == 0) state = 1;
  if (state == 2) {
    total = 0;
    state = 0;
  }
}
// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
