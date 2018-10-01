// Фреймворк
var express = require("express");
// Парсер формы
var bodyParser = require("body-parser");
var app = express();

// Расширение функции app, добавление парсера формы. 
// Данные из формы будут в виде объекта.
app.use(bodyParser.urlencoded());

app.get("/hello", function(request, response) {
// sendFile отправляет файл клиенту. Нужно писать полный путь.
// __dirname содержит полный путь проекта
	response.sendFile(__dirname + "/form.html");
})

app.post("/one", function(request, response) {
	console.log(request.body);
	response.send("Результат в консоли сервера")
})

app.listen(7777);