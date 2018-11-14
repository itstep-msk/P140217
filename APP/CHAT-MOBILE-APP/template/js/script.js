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
  router
}).$mount('#app');