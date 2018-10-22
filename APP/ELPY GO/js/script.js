var input = $(".js-input");
var button = $(".js-button");
var cards = $(".js-cards");
var apiKey = "client_id=f6a6b2640636bffe9c10ae6d0a95d870e991967c68f28ec83bf46a4d29cfb7ca"
var link = "https://api.unsplash.com/search/photos/?" + apiKey + "&query=";
var card = "<div class='uk-card uk-card-default uk-height-small uk-margin-remove uk-background-cover uk-width-1-5 js-card'></div>";

button.on("click", function() {
	cards.empty();

	if(input.val() != "") {
		var query = link + input.val();

		$.getJSON(query, function(data) {
			for(var i = 0; i < data.results.length ;i++) {
				var img = data.results[i].urls;

				cards
				.append(card)
				.find(".js-card")
				.last()
				.css({"background-image":"url(" + img.thumb + ")"})
				.attr("data-full", img.full);
			}
		})
	}
})

cards.on("click", ".js-card", function() {
	var url = $(this).attr("data-full");

	window.open(url)
})