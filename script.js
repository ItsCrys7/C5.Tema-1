function setup() {
  createCanvas(600, 400); // Create a canvas with size 800x500 pixels
  background(255, 255, 255); // Set background color to light gray
}

function draw() {
  // Draw the sun
  drawSun(); // Draw the sun
  
  // Draw the house body
  fill(255, 0, 0); // Set fill color to red
  rect(90, 220, 200, 150); // Draw a rectangle for the house body (moved down by 20 pixels)
  
  // Draw the roof
  fill(0, 0, 255); // Set fill color to blue
  triangle(60, 220, 190, 120, 320, 220); // Draw a triangle for the roof (moved down by 20 pixels)

  // Draw the door
  fill(128, 64, 0); // Set fill color to brown
  rect(190, 295, 50, 75); // Draw a rectangle for the door (moved down by 20 pixels)

  // Draw the handle
  fill(0);
  circle(200, 330, 5);

  // Draw the window
  fill(225); // Set fill color to white
  rect(135, 245, 40, 40); // Draw a rectangle for the window (moved down by 20 pixels)

  // Draw a chimney
  fill(128); // Set fill color to gray
  rect(220, 130, 35, 60); // Draw a rectangle for the chimney base (moved down by 20 pixels)

  // Integrate the second code here
  let x = 240;
  let y = 50;
  let gap = 5;
  let lineLengths = [25, 20, 15];
  let thickness = 2; // Set the thickness here

  // Set the thickness for all lines
  strokeWeight(thickness);

  // Draw the first line with the added color
  stroke(166); // Set stroke color to [166, 166, 166]
  line(x - 5, y, x - 5, y + lineLengths[0]);

  // Draw the second line
  stroke(166); // Reset stroke color to default (black)
  y += lineLengths[0] + gap;
  line(x + 7, y, x + 7, y + lineLengths[1]);

  // Draw the third line
  stroke(166); // Reset stroke color to default (black)
  y += lineLengths[1] + gap;
  line(x - 2, y, x - 2, y + lineLengths[2]);

}

function drawSun() {
  let radius = 50; // Raza cercului
  let distance = 15; // Distanța față de cerc
  
  // Desenarea cercului în centru
  fill(255, 255, 0); // Galben
  ellipse(400, 150, radius * 1.5);
  
  // Calcularea coordonatelor centrului cercului
  let centerX = 400 ;
  let centerY = 150 ;  
  // Desenarea triunghiurilor către punctele cardinale
  drawTriangle(centerX + radius + distance, centerY, PI/2, 20, 25); // Triunghiul orientat către est
  drawTriangle(centerX - radius - distance, centerY, -PI/2, 20, 25); // Triunghiul orientat către vest
  drawTriangle(centerX, centerY - radius - distance, 0, 20, 25); // Triunghiul orientat către sud
  drawTriangle(centerX, centerY + radius + distance, PI, 20, 25); // Triunghiul orientat către nord
  
  // Desenarea triunghiului către exteriorul cercului (Nord-Est)
  drawTriangle(centerX + radius * sqrt(1), centerY - radius * sqrt(0.5) - distance, -PI/-3.5, 20, 25);
  
  // Desenarea triunghiului către exteriorul cercului (Nord-Vest)
  drawTriangle(centerX - radius * sqrt(1), centerY - radius * sqrt(0.5) - distance, -PI/-1.3 + PI, 20, 25);
  
  // Desenarea triunghiului către exteriorul cercului (Sud-Vest)
  drawTriangle(centerX - radius * sqrt(1), centerY + radius * sqrt(0.5) + distance, PI/3.5 + PI, 20, 25);
  
  // Desenarea triunghiului către exteriorul cercului (Sud-Est)
  drawTriangle(centerX + radius * sqrt(1), centerY + radius * sqrt(0.5) + distance, PI/1.3, 20, 25);
}

function drawTriangle(x, y, rotation, baseLength, height) {
  // Calcularea punctelor triunghiului
  let pointA = createVector(0, -height / 2);
  let pointB = createVector(baseLength / 2, height / 2);
  let pointC = createVector(-baseLength / 2, height / 2);
  
  // Translate, rotate, and draw the triangle
  push();
  translate(x, y);
  rotate(rotation);
  fill(255, 255, 0);
  triangle(pointA.x, pointA.y, pointB.x, pointB.y, pointC.x, pointC.y);
  pop();
}
