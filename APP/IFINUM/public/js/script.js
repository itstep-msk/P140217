var notFount = { template: "<h1>Не найдено</h1>"}
var home = { template: "#home"}
var about = { template: "#about"}

var links = {
	"/": home,
	"/about": about
}

var app = new Vue({
	el: "#app",
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		viewPage() {
			return links[this.currentRoute]
		}
	},
	render(a) {
		return a(this.viewPage)
	}

})

$('.datepicker-here').datepicker();