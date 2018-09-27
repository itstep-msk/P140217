var currentDate = new Date();

module.exports.date = currentDate;

module.exports.getMessage = function() {
	var hour = currentDate.getHours();

	if(hour > 18) {
		return "Добрый вечер";
	} else if(hour > 12 && hour < 18) {
		return "Добрый день";
	} else {
		return "Доброй ночи"
	}
}