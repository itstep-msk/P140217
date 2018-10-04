var button = document.querySelector(".button");
var parentLink = document.querySelectorAll(".parent-link");
var link = document.querySelectorAll(".link");

for(var i = 0; i < parentLink.length; i++) {
	parentLink[i].style.transform = "rotateZ(" + (360 / parentLink.length)*i + "deg)";
}

button.addEventListener("click", function() {
	for(var i = 0; i < link.length; i++) {
		link[i].classList.toggle("active");
	}
})