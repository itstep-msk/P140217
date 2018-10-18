var date = new Date();
var DB = {};
var days = $(".days");
var weekdays = $(".weekdays");
var popup = {
	parent: $(".popup"),
	caption: $(".popup-caption"),
	close: $(".popup-close"),
	name: $(".popup-name"),
	text: $(".popup-text"),
	button: $(".popup-button"),
}
var template = {
	day: "<div class='day'></div>",
	weekday: "<div class='weekday-item'></div>",
	empty: "<div class='empty'></div>"
}
var el = {
	month: {
		number: $(".month-number"),
		prev: $(".month-prev"),
		next: $(".month-next")
	}
}
var names = {
	months: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
	weekdays: ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]
}
// POPUP
popup.close.on("click", function() {
	popup.parent.hide();
})

popup.button.on("click", function() {
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = popup.parent.attr("data-day");
	var data = popup.name.val() + ":" + popup.text.val();
	
	addToDB(year,month, day, data);
	
	console.log(DB);
});

// POPUP
days.on("click", ".day", function() {
	popup.caption.html(date.getFullYear() + "/" + date.getMonth() + "/" + $(this).attr("data-day"))
	popup.parent.show();
	popup.parent.attr("data-day", $(this).attr("data-day"))
})

Date.prototype.daysInMonth = function() {
	return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
};

function saveToLocalStorage() {
	localStorage.calendar = JSON.stringify(DB);
}

function loadFromLocalStorage() {
	DB = JSON.parse(localStorage.calendar);
}

function selectDaysWithTasks() {
	var year = date.getFullYear();
	var month = date.getMonth();

	for(item in DB[year][month]) {
		selectThisDay(item, "tasks")
	}
}

function addToDB(year, month, day, data) {
	if(!(year in DB)) {
		DB[year] = {};
	}
	if(!(month in DB[year])) {
		DB[year][month] = {};
	}
	DB[year][month][day] = data;
 	
 	saveToLocalStorage();
}

function selectThisDay(number, className){
	$(".day[data-day='" + number + "']").addClass(className)
}

function createMonth() {

	el.month.number.html(names.months[date.getMonth()]);

	el.month.next.on("click", switchMonth.bind(null,1))
	el.month.prev.on("click", switchMonth.bind(null,-1))

	function switchMonth(n) {
		days.empty();		
		date = new Date(date.getFullYear(),date.getMonth() + n)
		el.month.number.html(names.months[date.getMonth()]);
		addingDays();
	}
}

function addingDays() {
	for(var i = 0; i < date.getDay(); i++) {
		days.append(template.empty);
	}

	for(var i = 1; i <= date.daysInMonth(); i++) {
		days.append(template.day).find(".day").last().html(i).attr("data-day",i);
	}
}

function addingWeekdays() {
	for(var i = 0; i < 7; i++) {
		weekdays.append(template.weekday).find(".weekday-item").last().html(names.weekdays[i]);
	}
}

function init() {
	addingDays();
	addingWeekdays();
	createMonth();
	selectThisDay(date.getDate(), "today");
	loadFromLocalStorage();
	selectDaysWithTasks();
}

init();