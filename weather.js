class Weather{
	constructor(city){
		this.city = city
		this.key = "2f4c6633a31e53fa3dcdddfefc26c75c"
	}

	async getWeather(){
		const responce = await fetch(`
			https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responceData = await responce.json()
		return responceData
	}

	changeCity(city){
		this.city = city
	}


}