Vue.component("ticket", {
	props:["data"],
	template: `
	<div class="tickets">
		<div class="ticket">
			<div class="ticket__action">
				<div class="ticket__company-logo"></div>
				<div class="button">
					<div class="button__caption">Купить</div>
					<div class="button__value">за {{ data.price }}Р</div>
				</div>
			</div>
			<div class="ticket__info">
				<div class="ticket__departure">
					<div class="ticket__time">09:25</div>
					<div class="ticket__destination">
						<div class="ticket__aeroport">{{ data.origin }}</div>,
						<div class="ticket__city">{{ data.origin_name }}</div>
					</div>
					<div class="ticket__date">9 окт 2018, Пт</div>
				</div>
				<div class="ticket__changes">
					1 пересадка
				</div>
				<div class="ticket__arrival">
					<div class="ticket__time">11:45</div>
					<div class="ticket__destination">
						<div class="ticket__city">Тель-Авив</div>,
						<div class="ticket__aeroport">TLV</div>
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