function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function setWindow() {			
	window.moveTo(randomRange(0, screen.width), randomRange(0, screen.height));
}
function openWindow() {
  window.open("idiot.html", "_blank", "resizable=no,width=200,height=100");
}
function moveWindowLoop() {
  while (true) {
    setTimeout(function(){ setWindow(); }, 500);
  }
}
