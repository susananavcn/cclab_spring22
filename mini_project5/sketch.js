let colors = [
  "Thistle",
  "Aquamarine",
  "CornflowerBlue",
  "DarkSeaGreen",
  "LightSeaGreen",
];

let shirtColor;

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.id("p5-canvas");

  randomIndex = floor(random(colors.length));
  shirtColor = colors[randomIndex];
}


function draw() {
  background("LightBlue");
  
  // shirt
  fill(shirtColor);
  circle(200, 350, 300);

  drawCreature();
  drawFlower();
  drawFlower(25, 4);
  drawFlower(80, 4);
  drawFlower(60, 4);
}

function drawCreature(x, y) {
  push();
  drawFace();
  drawArmFeet();
  drawArmFeet(200, 0);

  function drawFace(x, y) {
    // face & ears

    fill("AntiqueWhite");
    circle(280, 100, 120);
    circle(120, 100, 120);
    fill("LavenderBlush");
    circle(280, 100, 75);
    circle(120, 100, 75);
    fill("AntiqueWhite");
    circle(200, 200, 200);

    //nose
    fill("Sienna");
    circle(200, 200, 25);

    // eyes
    fill("Black");
    circle(150, 160, 50);
    circle(250, 160, 50);
    fill("White");
    circle(161, 160, 26);
    circle(261, 160, 26);
  }

  function drawArmFeet(x, y) {
    push();
    translate(x, y);
    fill("AntiqueWhite");
    ellipse(100, 300, 55, 75);
    ellipse(100, 500, 75, 55);
    push();
    noStroke();
    fill(shirtColor);
    ellipse(100, 320, 55, 55);
    pop();
  }
  pop();
}

function drawFlower(x, y) {
  push();
  translate(x, y);

  fill(random(255), random(255), random(255));
  circle(150, 100, 15);
  circle(160, 90, 15);
  circle(170, 100, 15);
  circle(160, 110, 15);
  circle(160, 100, 15);

  pop();
}
