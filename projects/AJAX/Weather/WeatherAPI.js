//Using JQuery  Know Type: url: dataContent: and success
$(function () {
	function kelvinToFahrenheit(k) {
		k = Number(k);
		//T(K) × 9/5 - 459.67
		var f = k * (Number(9) / Number(5)) - Number(459.67);
		return f.toFixed(1);
	}

	$('#submit').on('click', function (e) {
		e.preventDefault();
		var CityURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
		var ZipURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
		var city = $('#City').val();
		var state = $('#State').val();
		var zip = $('#Zip').val();

		CityURL += city + ',' + state;
		ZipURL += zip;
		var URL = '';
		if (city) {
			URL = CityURL;
		}
		else if (zip) {
			URL = ZipURL;
		}

		$.ajax({
			type: 'GET',
			url: URL,
			dataContent: 'JSON',
			success: function (data) {
				if (data.cod == 404) {
					$('#Weather').append('That is not a valid value, try again.<br />')
				}
				else {

					var name = data.name;
					var main = data.weather[0].main;
					var description = data.weather[0].description;
					var humidity = data.main.humidity;
					var lowTemp = kelvinToFahrenheit(data.main.temp_min);
					var highTemp = kelvinToFahrenheit(data.main.temp_max);
					
					longitude = data.coord.lon;
					latitude = data.coord.lat;
					console.log(longitude + ' ' + latitude)
					initialize();
					clearLocation();
					$('#Weather').append(
						'The Weather in ' + name + ' looks ' +
						main + ' with ' + description + '.<br />' +
						' The humidity is: ' + humidity + '.<br />' +
						' The Low for today is ' + lowTemp + '.<br />' +
						' The High for today is ' + highTemp + '.<br />' +
						'<br />');
				}
			}
		});

	});

	var longitude;
	var latitude;

	function clearLocation(){
		longitude = '';
		latitude = '';
	}

	function initialize() {
		var mapOptions = {
			zoom: 12,
			center: new google.maps.LatLng(latitude, longitude)
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);
	}

});