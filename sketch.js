// Variables
let zoom = 0;
let zoomSpeed = 0.03; 
let mainShapeSize;
let smallShapes = [];
let numSmallShapes = 6; 
let colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF3"]; // Static colors

function setup() {
  createCanvas(600, 600);
  noStroke();
  

  for (let i = 0; i < numSmallShapes; i++) {
    smallShapes.push({
      x: random(width),
      y: random(height),
      size: random(10, 30),
      speedX: random(-1, 1),
      speedY: random(-1, 1),
      color: random(colors),
    });
  }
}

function draw() {
  background(30);
  

  mainShapeSize = map(sin(zoom), -1, 1, 200, 400);
  zoom += zoomSpeed;
  fill(150, 100, 255, 150); 
  ellipse(width / 2, height / 2, mainShapeSize, mainShapeSize * 0.7);
  

  for (let i = 0; i < smallShapes.length; i++) {
    moveSmallShape(smallShapes[i]);
    displaySmallShape(smallShapes[i]);
  }

  fill(230); 
  textSize(14); 
  textAlign(CENTER, CENTER);
  text("T.Y Yi Tang, 湯儀", width / 2, height - 40); // Name
  text("(she/her)", width / 2, height - 20); // Pronouns
}


function moveSmallShape(shape) {
  shape.x += shape.speedX;
  shape.y += shape.speedY;
  
  // Bounce small shapes off the edges of the canvas
  if (shape.x < 0 || shape.x > width) shape.speedX *= -1;
  if (shape.y < 0 || shape.y > height) shape.speedY *= -1;
}

// Function to display small shapes
function displaySmallShape(shape) {
  fill(shape.color);
  ellipse(shape.x, shape.y, shape.size); 
}


// Display my name and pronouns
function displayText(text){
  text("T.Y Yi Tang, 湯儀", 100, 150);
  text("(she/her)", 50, 180);
}


