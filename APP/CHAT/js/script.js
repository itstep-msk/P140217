var rows = document.querySelector(".rows");
var message = document.querySelector(".message");
var chatHeader = document.querySelector(".chat-header");
var chat = document.querySelector(".chat");

message.addEventListener("keydown", function(e) {
	if(e.keyCode == 13) {
		rows.innerHTML += "<div class='row'><div class='text'>" + this.value + "</div></div>";
		this.value = "";
	}
})

chatHeader.addEventListener("click", function() {
	chat.classList.toggle("hidden-chat");
})