/*
Если подключаем модуль как папку то пишем в require название папки
Если подключаем модуль как файл то перед названием файла пишем "./" расширение файла писать не надо
*/

var greeting = require("./currentDate");
// createUser является конструктором так как при экспорте копируется ссылка на функцию
var createUser = require("./user");
var http = require("http");
var fs = require("fs");

var person = new createUser("Alex", 20);

http.createServer(function(request, response) {
	response.setHeader("Content-type", "text/html");
	response.write("123")
	response.end();
}).listen(7777)

/*
console.log(person.name)
person.displayInfo()

console.log(greeting)
console.log(greeting.date);
console.log(greeting.getMessage());
*/