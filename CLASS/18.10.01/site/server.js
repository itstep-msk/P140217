var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require("fs");

app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get("/", function(request, response) {
	response.sendFile(__dirname + "/index.html");
})

app.get("/gallery", function(request, response) {
	response.sendFile(__dirname + "/gallery.html");
})

app.get("/contacts", function(request, response) {
	response.sendFile(__dirname + "/contacts.html");
})

app.post("/contacts", function(request, response) {
	fs.appendFile("data.txt", 
		"Имя: " + request.body.firstName +
		" Фамилия: " + request.body.lastName +
		" Email: " + request.body.email + 
		"\r\n"
		);
	response.redirect("/contacts");
	response.send();
})

app.listen(7777);