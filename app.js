//weather object
const weather = new Weather(`Tallinn`)

const ui = new UI()
console.log(ui)
//get city weather and display it
function getCityWeather(){
	weather.getWeather()
	.then(data => {
		console.log(data)
		ui.drawWeather(data)
	})
	.cathc(error => console.log(error))
}

getCityWeathe()


