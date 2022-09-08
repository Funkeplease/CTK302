let f1, f2, f3 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/cutenotes.ttf");
  f2 = loadFont("assets/hangedletters.ttf");
  f3 = loadFont("assets/loveplants.otf");
  textAlign(CENTER)
}

function draw() {
  background("pink");
  fill("black");
  textFont(f1, 48) ;
  text("hello there!", width / 2, 100);
  textFont(f2, 24) ;
  text("I am Funke Ademola-Aliu", width / 2, 200);
  textFont(f3, 12) ;
  text("I love kids", width / 2, 250);

}
