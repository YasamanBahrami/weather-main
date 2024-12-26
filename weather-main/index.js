const searchButton = document.querySelector(".lens");
const input1 = document.querySelector(".search input");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let temp = document.querySelector(".temp");
let loc = document.querySelector(".newloc");
let currentday = document.querySelector(".day");
let tarikh = document.querySelector(".date");
let Description = document.querySelector(".Description");
let icon = document.querySelector(".icon");
let HUMIDITY = document.querySelector(".HUMIDITY");
let wind = document.querySelector(".wind");

const datee = new Date();
let currentdate = datee.getTime();
let day = weekday[datee.getDay()];
currentday.innerHTML = day;
tarikh.innerHTML = datee.toDateString();




  function weather () {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=0236c45ae4114d0dac3151506221712  &q=${input1.value}&aqi=no`
    )
      .then(function (responsive) {
        return responsive.json();
      })
      .then(function (data) {
        let currentTemp = `${data.current.temp_c}`;
        let currentLoc = `${data.location.name}`;
        let currentDes = `${data.current.condition.text}`;
        let windy = `${data.current.wind_kph}`;
        wind.innerHTML = `${windy}km/h`;
        temp.innerHTML = `<div class="temp" >${currentTemp}°C</div>`;
        loc.innerHTML = `<span class="newloc" >${currentLoc}</span>`;
        Description.innerHTML = ` <div class="Description" >${currentDes}</div>`;
        icon.src = data.current.condition.icon;
      });

    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=0236c45ae4114d0dac3151506221712 &q=${input1.value}&aqi=no`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        let humid = `${data.current.humidity}`;

        HUMIDITY.innerHTML = ` <span class="percent HUMIDITY">${humid}%</span>`;
      });
 
}

searchButton.addEventListener("click",weather);

let z="paris";
    if(input1.value=="")
    {
      input1.value=z;
      weather(z);
     
  
    }
