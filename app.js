//localstorage objekt
const ls = new LS()
const cityName = ls.getLocationData()

//weather object
const weather = new Weather('Tallinn')



const ui = new UI()

const form = document.querySelector('#change-city')
form.addEventListener('sumbit', changeCityWeather)


function changeCityWeather(e){
	const cityName = document.querySelector('#city-name').value
	weather.changeCity(cityName)
	ls.setLocationData(cityName)
	getCityWeather()
	document.querySelector('#city-name').value = ''
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


