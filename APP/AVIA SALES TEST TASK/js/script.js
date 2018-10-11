Vue.component("ticket", {
	props:["data"],
	methods: {
		addDischarge(value) {
			return value.toFixed().replace(/./g, function(n, i, s) {
				return (s.length - i) % 3 === 0 ? " " + n : n;
			})
		},
		addDeclension(value) {
			if(value !== 0) {
				return value + " Пересад" + (value<5? (value>1)? "ки" : "ка" : "ок");
			}
		}
	},
	template: `
	<div class="tickets">
		<div class="ticket">
			<div class="ticket__action">
				<img v-bind:src="'http://pics.avs.io/120/35/' + data.carrier + '@2x.png'" class="ticket__company-logo">
				<div class="button">
					<div class="button__caption">Купить</div>
					<div class="button__value">за {{ addDischarge(data.price) }} <i class="fas fa-ruble-sign"></i></div>
				</div>
			</div>
			<div class="ticket__info">
				<div class="ticket__departure">
					<div class="ticket__time">{{ data.departure_time }}</div>
					<div class="ticket__destination">
						<div class="ticket__aeroport">{{ data.origin }}</div>,
						<div class="ticket__city">{{ data.origin_name }}</div>
					</div>
					<div class="ticket__date">9 окт 2018, Пт</div>
				</div>
				<div class="ticket__changes">
					{{ addDeclension(data.stops) }}
				</div>
				<div class="ticket__arrival">
					<div class="ticket__time">{{ data.arrival_time }}</div>
					<div class="ticket__destination">
						<div class="ticket__city">{{ data.destination_name }}</div>,
						<div class="ticket__aeroport">{{ data.destination }}</div>
					</div>
					<div class="ticket__date">10 окт 2018, Пт</div>
				</div>
			</div>
		</div>
	</div>
	`
})

var app = new Vue({
    el: "#app",
    data: {
        tickets: tickets.tickets
    }
})