var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var bird = new Image();
var background = new Image();
var ground = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();
var gravity = 1.5;
var pipes = [];
var distance = 90;
var player = {
	x: 10,
	y: 150
}

pipes.push({
	x: canvas.width,
	y: 0
})

bird.src = "img/bird.png";
background.src = "img/bg.png";
ground.src = "img/ground.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

function drawPipes() {
	for(var i = 0; i < pipes.length; i++) {
		ctx.drawImage(pipeUp, pipes[i].x, pipes[i].y);
		ctx.drawImage(pipeBottom, pipes[i].x, pipes[i].y + pipeUp.height + distance)
		pipes[i].x--;

		if(pipes[i].x == 125) {
			pipes.push({
				x: canvas.width,
				y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
			})
		}
		console.log(pipes);
	}
}

function draw() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	ctx.drawImage(background,0,0);
	drawPipes();
	ctx.drawImage(ground, 0, canvas.height - ground.height);
	ctx.drawImage(bird, player.x, player.y);
	player.y += gravity;
	requestAnimationFrame(draw);
}

function jump(e) {
	if(e.keyCode == 32) {
		player.y -= 25;
	}
}

document.addEventListener("keydown", jump);

pipeBottom.onload = draw;