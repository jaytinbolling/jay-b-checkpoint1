var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = 0; // Initialize with 0 degrees
var rotateSum;

upBtn.onclick = function() {
    rotateValue -= 90; // Subtract 90 degrees for counter-clockwise rotation
    rotateSum = "rotate(" + rotateValue + "deg)";
    circle.style.transform = rotateSum;
}

downBtn.onclick = function() {
    rotateValue += 90; // Add 90 degrees for clockwise rotation
    rotateSum = "rotate(" + rotateValue + "deg)";
    circle.style.transform = rotateSum;
}
