var date = new Date();
var days = $(".days");
var template = {
	day: "<div class='day'></div>"
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

Date.prototype.daysInMonth = function() {
	return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
};

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
	for(var i = 1; i <= date.daysInMonth(); i++) {
		days.append(template.day).find(".day").last().html(i).attr("data-day",i);
	}
}

function init() {
	addingDays();
	createMonth();
	selectThisDay();
}

init();
