import { weather_data } from "./data.js";


let loadDayForecastData = (valorInicial="Guayaquil") => {/*Valor por defecto de la funcion Guayaquil*/
    
    let arreglo = valorInicial
	let [Guayaquil,Ambato,Tena] =weather_data
    /*Con el if se valida en caso de que la ciudad seleccionada cambie*/
    if (valorInicial == "Guayaquil"){
        arreglo = Guayaquil;
    }
    if (valorInicial=="Ambato"){
        arreglo=Ambato;
    }
    if (valorInicial=="Tena"){
        arreglo=Tena;
    }

    /*Una vez selecionado el arreglo de la ciudad se desestructuran los datos*/
    let {city,date,maxtemperature,mintemperature,cloudiness,wind,rainfall,forecast_today}=arreglo;
    let [tarde,noche]=forecast_today;

    /*Se adjuntan los datos en la plantilla HTML*/

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

    return valorInicial

}


let datos_cargados= false
let loadWeekForecastData = () => {
	if (datos_cargados==false){
        let [Guayaquil,Ambato,Tena] =weather_data;
        
       
        let {forecast_week}=Guayaquil;
        
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
        alert("Los datos ya estan cargados")
    }
    
	
}


document.addEventListener("DOMContentLoaded", (event) => {/* Se cargan los elementos en el DOM*/
    /*Se ejecuta la funcion de carga de datos del dia*/
    loadDayForecastData();

    /*Añadir los elementos al menu de seleccion de ciudades*/
    let menu = document.getElementById("dropdownMenuButton")
    for(let index=0;index<weather_data.length;index++){
        let ciudad = weather_data[index].city
        let template_menu=`<option class="dropdown-item" value="${ciudad}">${ciudad}</option>`
        menu.innerHTML+=template_menu
    }
    
    /*Evento change para obtener el valor al seleccionar una ciudad distinta*/
    menu.addEventListener("change",(e)=>{
        for(let index=0;index<weather_data.length;index++){
            let ciudad = weather_data[index].city
            if (e.target.value == ciudad){
                loadDayForecastData(e.target.value) /*Se ejecuta la funcion del día con el valor de la ciudad correspondiente*/
                console.log("se ejecuta la funcion")
            }
        }
    })

    /*Se obtiene el boton cargar y se le adjunta una funcion*/
    let btn = document.getElementById("loadinfo");
    btn.addEventListener("click",()=>{
        loadWeekForecastData()
    });
    
    
});




