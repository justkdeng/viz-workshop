function setup() {
  createCanvas(800,800);
}

function draw() {
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 50, 50);
    fill(0);

} else {
  rect(mouseX, mouseY, 50, 50);
  fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  stroke(255, 255, 255, 25);
}

}
