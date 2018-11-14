var home = { template: '#home' }
var registration = { template: '#registration' }
var chat = { template: '#chat' }

var path = [
  { path: '/', component: home },
  { path: '/registration', component: registration },
  { path: '/chat', component: chat },
]

var router = new VueRouter({
  routes: path
})

var app = new Vue({
  el: "#app",
  data: {
  	registration: {
  		user: null,
  		email: null,
  		password: null,
  		phone: null
  	}
  },
  mounted() {
  		console.log(this.$root)
  	
  },
  router
})
/*
$.ajax({
	url: "http://localhost/denwer/CHAT-APP-BACK/registration.php",
	type: "POST",
	data: {"user": "TEST", "password": "123"},
	success: function(data) {
		console.log(data);
	}
})
*/
var link = "http://localhost/denwer/CHAT-APP-BACK/registration.php";
var data = {"user":"axios"};
var callback = response => (console.log(response.data));

//axios.post(link,data).then(callback);