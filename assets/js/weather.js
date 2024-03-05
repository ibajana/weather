import { weather_data } from "./data.js";


let loadDayForecastData = () => {
	let [guayaquil,ambato,tena] =weather_data
    console.log(guayaquil)
    let {city,date,maxtemperature,mintemperature,cloudiness,wind,rainfall,forecast_today}=guayaquil
    let [tarde,noche]=forecast_today

    

    let location=document.getElementById("city")
    location.innerHTML= city

    let fecha= document.getElementById("date")
    fecha.innerHTML= date

    let max= document.getElementById("maxtemperature")
    max.innerHTML=maxtemperature

    let min=document.getElementById("mintemperature")
    min.innerHTML=mintemperature

    let nubosidad= document.getElementById("cloudiness")
    nubosidad.innerHTML= cloudiness

    let viento = document.getElementById("wind")
    viento.innerHTML= wind

    let precipitacion = document.getElementById("rainfall")
    precipitacion.innerHTML = rainfall

    let late_iconHTML= document.getElementById("late_icon")
    late_iconHTML.innerHTML=tarde.icon

    let late_temperatureHTML= document.getElementById("late_temperature")
    late_temperatureHTML.innerHTML=tarde.temperature

    let late_forecastHTML= document.getElementById("late_forecast")
    late_forecastHTML.innerHTML=tarde.forecast

    let late_textHTML=document.getElementById("late_text")
    late_textHTML.innerHTML=tarde.text

    let night_iconHTML= document.getElementById("night_icon")
    night_iconHTML.innerHTML=noche.icon

    let night_temperatureHTML= document.getElementById("night_temperature")
    night_temperatureHTML.innerHTML= noche.temperature

    let night_forecastHTML= document.getElementById("night_forecast")
    night_forecastHTML.innerHTML=noche.forecast

    let night_textHTML=document.getElementById("night_text")
    night_textHTML.innerHTML=noche.text


}
let datos_cargados= false
let loadWeekForecastData = () => {
	if (datos_cargados==false){
        let [guayaquil,ambato,tena] =weather_data
    let {forecast_week}=guayaquil
    
    for (let index=0;index <forecast_week.length;index++){
        let {day,text,date,temperature,icon}=forecast_week[index]
        console.log(text)
        let element=document.getElementById("lista")
        element.innerHTML+= `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
          <span class="text-xs">${date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${temperature.max}</span> |  <span class="text-dark mx-2">${temperature.min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
        </div>
        </li>`
        datos_cargados=true
    }
    }
    else{
        console.log("Los datos ya estan cargados")
    }
    
	
}


document.addEventListener("DOMContentLoaded", (event) => {
    loadDayForecastData();
    let btn = document.getElementById("loadinfo");
    btn.addEventListener("click",loadWeekForecastData);  
});



/*loadDayForecastData();
loadWeekForecastData(weather_data);*/
