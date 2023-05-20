 // Create a new <div> element
 var blueBox = document.createElement("div");

 // Set the width, height, background color, and position
 blueBox.style.width = "200px";
 blueBox.style.height = "200px";
 blueBox.style.backgroundColor = "blue";
 blueBox.style.position = "absolute";
 blueBox.style.top = "50%";
 blueBox.style.left = "50%";
 blueBox.style.transform = "translate(-50%, -50%)";

 // Append the blue box to the body of the webpage
 document.body.appendChild(blueBox);