var box = document.querySelectorAll(".box");
var field = document.querySelector(".field");
var switchClass = true;
var layerX;
var layerY;

field.addEventListener("mousemove", function(e) {
	if(layerX < 25) layerX = -layerX;
	if(layerY < 25) layerY = -layerY;

	this.style.transform = "rotateY(" + layerX + "deg) rotateX(" + layerY + "deg)";
	
	layerX = Math.floor(e.layerX/6) - 25;
	layerY = Math.floor(e.layerY/6) - 25;
})

box.forEach(function(item, index) {
	item.addEventListener("click", function() {
		if(switchClass) {
			this.classList.add("dagger");
			switchClass = false;
		} else {
			this.classList.add("zero");
			switchClass = true;
		}
	})
})