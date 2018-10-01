var Emitter = require("events");
var emitter = new Emitter();

// emmiter - позволяет слушать и создавать собственные события

// .on - слушает
// .emit - создает

emitter.on("customEvent", function(data) {
	console.log("Event 1 " + data);
})

emitter.on("customEvent", function(data) {
	console.log("Event 2 " + data);
})

// Создали событие
emitter.emit("customEvent","Hello from event");