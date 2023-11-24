const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7fdece64dmsh36b6bbf227e6678p16e30ajsn8d5790b7925b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = async (city) => {
	try {
		cityName.innerHTML = city
		const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
		const data = await response.json();
		console.log(data)
		temp.innerHTML = data.temp
			temp1.innerHTML = data.temp
			feels_like.innerHTML = data.feels_like
			humidity.innerHTML = data.humidity
			humidity1.innerHTML = data.humidity
			min_temp.innerHTML = data.min_temp
			max_temp.innerHTML = data.max_temp
			wind_speed.innerHTML = data.wind_speed
			wind_speed1.innerHTML = data.wind_speed
			wind_degrees.innerHTML = data.wind_degrees
			sunrise.innerHTML = data.sunrise
			sunset.innerHTML = data.sunset


	} catch (error) {
		console.error(error);
	}	
}

submit.addEventListener("click",(e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Mumbai")