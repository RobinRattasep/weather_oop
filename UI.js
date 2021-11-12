class UI {
	constructor(){
		this.description = document.querySelector('#deskription')
		this.temp = document.querySelector('#temp')
		this.location = document.querySelector('#location')
	}

	drawWeather( data ) {
		var celsius = Math.round(parseFloat(data.main.temp)-273.15);
		var description = data.weather[0].description;

		this.description.innerHTML = description;
		this.temp.innerHTML = celcius + &'deg;';
		this.location.innerHTML = data.name;
	}	
}