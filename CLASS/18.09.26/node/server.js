/*
Для создания http соединения нужно использовать пакет "http"
некоторые пакеты уже предустановлены.
Чтобы их подключить используется функция require.
Функция похожа на include
*/
var http = require("http");
// Пакет OS содержит информацию о операционной системе
var os = require("os");

// Пакет FS для работы с файловой системой
var fs = require("fs");

/*
Метод createServer принимает аргумент функцию callback
Функция callback принимает два аргумента,
в первый попадает информация о запросе
во второй методы для управления ответом.
*/

/*
Метод listen принимает два аргумента. Порт, по которому прослушивать соединения и 
функция callback, которая вызывается после создания соединения.
*/

http.createServer(server).listen(7777, serverStatus);

function server(request, response) {
	response.setHeader("Content-type","text/html");
	response.write("<h2>Hello from node.js</h2>");
	//console.log(os.freemem());
	//console.log(os.userInfo());
	response.write(fs.readFileSync("index.html"));
	response.end();
}

function serverStatus() {
	console.log("Сервер создан...")
}