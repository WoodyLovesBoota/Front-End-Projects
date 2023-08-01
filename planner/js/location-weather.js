const getLocation = async () => {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

const drawLocation = async (location) => {
  let cityName = document.querySelector(".location__city");
  let temperature = document.querySelector(".weather-temp__temperature");
  let weatherIcon = document.querySelector(".weather__icon");

  let key = "a0da403921cabb72edbfc43c1abe7772";
  let [latitude, longitude] = [
    location.coords.latitude,
    location.coords.longitude,
  ];
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();
  let city = data.name;
  let temp = data.main.temp;
  let weatherCode = data.weather[0].icon;
  let weatherUrl = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  if (String(temp).length > 3) temp = String(temp).substring(0, 4);
  weatherIcon.src = weatherUrl;
  cityName.innerHTML = city;
  temperature.innerHTML = temp;
};

const successCallback = async (position) => {
  let nowGeo = await position;
  drawLocation(nowGeo);
};

const errorCallback = (error) => {
  console.log(error);
};

export { getLocation };
