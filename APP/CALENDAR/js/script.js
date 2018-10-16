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
	console.log(popup.caption.html() + ":" + popup.name.val() + ":" + popup.text.val());
	addToDB(date.getFullYear(),date.getMonth(),popup.parent.attr("data-day"), popup.name.val() + ":" + popup.text.val())
	console.log(DB)
})
// /POPUP

days.on("click", ".day", function() {
	popup.caption.html(date.getFullYear() + "/" + date.getMonth() + "/" + $(this).attr("data-day"))
	popup.parent.show();
	popup.parent.attr("data-day", $(this).attr("data-day"))
})

Date.prototype.daysInMonth = function() {
	return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
};

function addToDB(year, month, day, data) {
	if(!(year in DB)) {
		DB[year] = {};
	}
	if(!(month in DB[year])) {
		DB[year][month] = {};
	}
	DB[year][month][day] = data;
}

function selectThisDay(){
	$(".day[data-day='" + date.getDate() + "']").addClass("today")
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
	selectThisDay();
}

init();