const canvas = document.getElementById('flower-canvas');
const ctx = canvas.getContext('2d');

// Draw flower petals
function drawPetal(x, y, petalRadius, rotation, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.ellipse(0, -petalRadius, petalRadius / 2, petalRadius, 0, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

// Draw flower
function drawFlower(x, y, petalRadius, numPetals, petalColor, centerColor) {
  for (let i = 0; i < numPetals; i++) {
    drawPetal(x, y, petalRadius, (i * 2 * Math.PI) / numPetals, petalColor);
  }
  // Draw center
  ctx.beginPath();
  ctx.arc(x, y, petalRadius / 3, 0, 2 * Math.PI);
  ctx.fillStyle = centerColor;
  ctx.fill();
}

// Draw name under the flower
function drawName(name) {
  ctx.font = '24px Arial';
  ctx.fillStyle = 'purple';
  ctx.textAlign = 'center';
  ctx.fillText(name, 150, 350);
}

let blinkState = false;

// Animation loop for blinking effect
function animateFlower() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Alternate colors for blinking effect
  const petalColor = blinkState ? 'pink' : 'hotpink';
  const centerColor = blinkState ? 'yellow' : 'orange';

  // Draw the blinking flower
  drawFlower(150, 150, 50, 6, petalColor, centerColor);

  // Draw the name under the flower
  drawName('Sweetheart');

  // Toggle blink state
  blinkState = !blinkState;

  // Repeat the animation every 500 milliseconds
  setTimeout(animateFlower, 500);
}

// Start the animation
animateFlower();