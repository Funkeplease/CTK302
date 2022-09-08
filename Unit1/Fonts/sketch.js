let f1, f2, f3 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assest/cutenotes.zip");
  f2 = loadFont("assest/hangingletters.zip");
  f3 = loadFont("assest/loveplants.zip");
  textAlign(CENTER)
}

function draw() {
  textFont(f1, 48) ;
  text("hello there!", width / 2, 100);

  

}
