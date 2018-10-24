var link = "https://apidata.mos.ru/v1/datasets";
var id = "/916";
var geo = "/features";
var apikey = "?api_key=14829ea065bd232db3c4f1796acecbf3";
var param = "&$top=1";
var query = link + id + geo + apikey + param;

function getResult(){
	var value = $.ajax({ 
    				url: query, 
   					async: false
   				}).responseText;

	return JSON.parse(value);
}

var result = getResult();


ymaps.ready(init);

function init(){ 

	var myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 10
	});

	for(var i = 0; i < result.features.length; i++) {
		var x = result.features[i].geometry.coordinates[1];
		var y = result.features[i].geometry.coordinates[0];

		myMap.geoObjects.add(new ymaps.Placemark([x, y]))	
	}

}