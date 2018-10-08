var el = {
	minutes: document.querySelector(".minutes"),
	hours: document.querySelector(".hours"),
	circle: document.querySelector(".circle"),
	numbers: document.querySelector(".numbers")
}

var hours = 0;
var lastMinutes = 0;
var propeller = new Propeller(el.circle);
var step = 6;
var timer;

el.numbers.addEventListener("click", function() {
	timer = setInterval(startTimer, 10)
})

propeller.getMinutes = function() {
	return Math.floor(this.angle / step);
}

propeller.onRotate = function() {
	el.minutes.innerHTML = this.getMinutes();
	checkHour(this.getMinutes());
	checkNumber();
}

function checkNumber() {
	if(el.minutes.innerHTML.length < 2) {
		el.minutes.innerHTML = "0" + el.minutes.innerHTML;
	}
	if(el.hours.innerHTML.length < 2) {
		el.hours.innerHTML = "0" + el.hours.innerHTML;
	}
}

function setHours() {
	el.hours.innerHTML = hours;
}

function checkHour(min) {
	if(min >= 0 && min <= 5 && lastMinutes <= 59 && lastMinutes >= 55) {
		hours++;
	} else if(min <= 59 && min >= 55 && lastMinutes >= 0 && lastMinutes <= 5) {
		hours--;
	}
	
	setHours();
	// После проверки в переменную записывается значение. Потом функция вызывается с новым значением.
	lastMinutes = min
}

function startTimer() {
	if(propeller.getMinutes() == 0 && hours == 0) {
		propeller.angle = step;
		clearInterval(timer)
	}

	propeller.angle -= step;
}

function setDefaultTimer() {
	el.hours.innerHTML = "00";
	el.minutes.innerHTML = "00";
}

setDefaultTimer();