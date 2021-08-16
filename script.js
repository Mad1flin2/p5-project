function setup() {
createCanvas(300, 300);
createCapture(300, 300);
}
function draw() {
rect(300, 300, 55, 55);
rect(0, 300, 55, 55);
rect(300, 0, 55, 55);
rect(0, 0, 55, 55);
}