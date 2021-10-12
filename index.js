function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function setWindow() {
	window.moveTo(randomRange(0, screen.width), randomRange(0, screen.height));
}
function openWindow() {
	window.open("idiot/index.html", "_blank", "resizable=no,width=200,height=100,top=" + randomRange(0, screen.width).toString() + ',left=' + randomRange(0, screen.height).toString());
}
function moveWindowLoop() {
  while (true) {
    setTimeout(function(){ setWindow(); }, 500);
    setTimeout(function(i) { $('#ifr').attr('src', array[i]); }, 200 * i,i);
  }
}
