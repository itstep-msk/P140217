var link = "https://apidata.mos.ru/v1/datasets";
var id = "/2069/features";
var apikey = "?api_key=14829ea065bd232db3c4f1796acecbf3";
var param = "&$top=1";
var query = link + id + apikey + param;

function getResult(){
    var value = $.ajax({ 
                    url: query, 
                    async: false
                }).responseText;

    return JSON.parse(value);
}

var result = getResult();

var labels = [];
var years = [];

for(var i = 0; i < 20; i++) {
    labels.push(result.features[i].properties.Attributes.Name)
    years.push(result.features[i].properties.Attributes.YearOfComissioning)
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    
    type: 'line',

    data: {
        labels: labels,
        datasets: [{
            label: "My First dataset",
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: years
        }]
    },

    options: {}
});