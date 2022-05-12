const API_KEY = "1f61c4430ab212fd71bbdd29e1ac277a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      console.log(weather);
    });
}

function onGeoError(params) {
  alert("No Weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
