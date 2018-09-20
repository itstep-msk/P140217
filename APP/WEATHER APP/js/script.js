var url = "https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=ca8c2c7970a09dc296d9b3cfc4d06940";
var temp = $(".weather-temp");
var city = $(".weather-city");
var icon = $(".weather-icon");

var urlImageBegin = "https://pixabay.com/api/?key=7681448-16aa89fa97890cb6c6b5ca03b&q=";
var urlImageEnd = "+landmarks";

$.getJSON(url, function(data) {
	var iconLink = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

	temp.html(Math.floor(data.main.temp - 273));
	city.html(data.name);
	icon.attr("src",iconLink);

	// Получаем json объект на изображения
	$.getJSON(urlImageBegin + data.name + urlImageEnd, function(dataImg) {
		$("body").css({"background-image": "url(" + dataImg.hits[0].largeImageURL + ")"});
	})

	//

})