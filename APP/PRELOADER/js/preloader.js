$.fn.preloader = function(time) {
	var ms = time || 1000;
	var self = this;

	var gif = `<div style='
			background-image: url(img/preloader.gif); 
			height: 100%; 
    		width: 100%;
			background-repeat: no-repeat;
			background-position: center;
			background-color: #676d89;
			position: absolute;
			'>
			</div>`;

	self.hide();
	self.before(gif);

	$(window).on("load", function() {
		self.prev().fadeOut(ms);
		self.show();
	})
}

$(".js-preloader").preloader(2000);