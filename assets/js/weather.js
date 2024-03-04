import { weather_data } from "./data.js";


let loadDayForecastData = (weather_data) => {
	let [guayaquil,ambato,tena] =weather_data
    console.log(guayaquil)
    let {city,date,maxtemperature,mintemperature,cloudiness,wind,...other}=guayaquil

    let location=document.getElementById("city")
    let fecha= document.getElementById("date")
    let max= document.getElementById("maxtemperature")
    let min=document.getElementById("mintemperature")
    let nubosidad= document.getElementById("cloudiness")
    let viento = document.getElementById("wind")


    location.innerHTML= city
    fecha.innerHTML= date
    max.innerHTML=maxtemperature
    min.innerHTML=mintemperature
    nubosidad.innerHTML= cloudiness
    viento.innerHTML= wind
    

}

let loadWeekForecastData = () => {
	
	
}


loadDayForecastData(weather_data);
loadWeekForecastData();