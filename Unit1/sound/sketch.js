let dream ;

function preload() {
dream = loadSound("assets/dreams.mp3");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  background("pink");
  fill("black");
  text("the name of my song is dreams because it reminds me that my dreams are valid", 100, 100, 400, 400);
  
}
function mouseReleased(){
  if(dream.isPlaying()) {
    dream.pause();
  } else {
    dream.play();
    
  }
}
function touchStarted() {
  getAudioContext().resume();
}