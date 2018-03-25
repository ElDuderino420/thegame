let font;
let particles = [];
let seq;

function preload() {
  font = loadFont('AppleStormIta.otf');
  //font = loadFont('AvenirNextLTPro-Demi.otf');


}

function createNewParticles(text) {
  if(text == null) {
    seq = newText();
    text= seq.next().value;
  }
  particles = [];
  let points = font.textToPoints(text, 100, 200, 128, {
    sampleFactor: 0.25
  });

  for (p of points) {
    stroke(0, 255, 0);
    strokeWeight(4);
    particles.push(new Particle(p.x, p.y));
  }
}

function* newText() {
  yield* ['The Game', 'Marco is gay', null]
}

function mousePressed() {
  
  createNewParticles(seq.next().value);
}

function setup() {
  // put setup code here
  createCanvas(800, 300);
  background(51);


  createNewParticles('Click...');
  seq = newText();
}

function draw() {
  // put drawing code here
  background(51);
  for (p of particles) {
    p.behaviors();
    p.update();
    p.show();
  }
}