let stars = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 300; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      z: random(width),
    });
  }
}

function draw() {
  background(10, 10, 20);
  translate(width / 2, height / 2);
  for (let s of stars) {
    let sx = map(s.x / s.z, 0, 1, -width, width);
    let sy = map(s.y / s.z, 0, 1, -height, height);
    let r = map(s.z, 0, width, 8, 0);
    fill(255);
    noStroke();
    ellipse(sx, sy, r);
    s.z -= 2; // 星星靠近
    if (s.z < 1) s.z = width;
  }
}
