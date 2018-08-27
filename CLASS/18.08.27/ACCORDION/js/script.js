var caption = $(".accordion-caption");

caption.on("click", function() {
	$(this).next().slideToggle();
})