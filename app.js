//weather object
const weather = new Weather('Tallinn')



const ui = new UI()
console.log(ui)

const form = document.querySelector('#change-city')
console.log(form)
form.addEventListener('sumbit', changeCityWeather)


function changeCityWeather(e){
	const cityName = document.querySelector('#city-name').value
	weather.changeCity(cityName)
	getCityWeather()
	document.querySelector('#city-name').value = ''
	console.log(weather)
	e.preventDefault()
}

//get city weather and display it
function getCityWeather(){
	weather.getWeather()
	.then(data => {
		console.log(data)
		ui.drawWeather(data)
	})
	.catch(error => console.log(error))
}

getCityWeather()


