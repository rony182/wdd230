//ADD the key and change units to metric
const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-32.9468&lon=-60.6393&appid=de34183783599331759a72cd0a9ba44f&units=metric'

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    let temperature=weatherInfo.current.temp;
    temperature=temperature
    let windSpeed=weatherInfo.current.wind_speed;
    let currentCondition= weatherInfo.current.weather[0].description;
    let iconsrc= `http://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}.png`;
    let humidity=weatherInfo.current.humidity;
    
    
    document.getElementById('currentTemp').innerHTML=temperature+'° C';
    document.getElementById('windSpeed').innerHTML='Wind Speed: '+windSpeed;
    document.getElementById('humidity').innerHTML='Humidity: '+humidity+'%';

    document.querySelector('#weather-desc').textContent = currentCondition;
    
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', currentCondition);
    const weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        weekdays[8] = "Sunday";
    

    for (let i = 1; i < 4; i++){
    let tomorrowIconsrc= `http://openweathermap.org/img/wn/${weatherInfo.daily[i].weather[0].icon}.png`;
    let tomorrowTemp=weatherInfo.daily[i].temp.day;
    let tomorrowCondition=weatherInfo.daily[i].weather[0].description;
    document.querySelector(`#day-${i}-temp`).innerHTML=tomorrowTemp+'° C';
    document.querySelector(`#day-${i}`).setAttribute('src', tomorrowIconsrc);
    document.querySelector(`#day-${i}`).setAttribute('alt', tomorrowCondition);

    let today= new Date();
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000*i));
    firstname=tomorrow.getDay();
    day=weekdays[firstname]
    document.querySelector(`#day-${i}-name`).innerHTML=day;
    }
    
    
    

 }); //end of "then" fat arrow function

 