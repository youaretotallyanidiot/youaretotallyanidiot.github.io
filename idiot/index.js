function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function setWindow() {			
	window.moveTo(randomRange(0, screen.width), randomRange(0, screen.height));
}
function openWindow() {
	for (let i = 0; i < 100; ++i) {
  		window.open("index.html", "_blank", "resizable=no,width=200,height=100,top=" + randomRange(0, screen.width).toString() + ',left=' + randomRange(0, screen.height).toString());
		  setTimeout(function(i) { $('#ifr').attr('src', array[i]); }, 200 * i,i);
	}
}
function moveWindowLoop() {
  while (true) {
    setTimeout(function(){ setWindow(); }, 500);
  }
}
