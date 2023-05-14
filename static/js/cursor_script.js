document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Box dimensions and position
  var boxWidth = 200;
  var boxHeight = 200;
  var boxX = (canvas.width - boxWidth) / 2;
  var boxY = (canvas.height - boxHeight) / 2;

  // Mouse position variables
  var mouseX = 0;
  var mouseY = 0;

  // Listen for mouse move event
  document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw box
    ctx.fillStyle = "#000";
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

    // Draw trailing effect when mouse is inside the box
    if (
      mouseX > boxX &&
      mouseX < boxX + boxWidth &&
      mouseY > boxY &&
      mouseY < boxY + boxHeight
    ) {
      var trailSize = 10;

      for (var i = 0; i < trailSize; i++) {
        var trailAlpha = 1 - (i / trailSize);
        var trailX = mouseX - (i * (mouseX - boxX) / trailSize);
        var trailY = mouseY - (i * (mouseY - boxY) / trailSize);

        ctx.fillStyle = "rgba(255, 0, 0, " + trailAlpha + ")";
        ctx.fillRect(trailX, trailY, boxWidth, boxHeight);
      }
    }

    // Call the draw function again
    requestAnimationFrame(draw);
  }

  // Start drawing
  draw();
});