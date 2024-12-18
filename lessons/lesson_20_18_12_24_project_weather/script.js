// https://get.geojs.io/v1/ip/geo.json
// киньте fetch по адресу и получите данные по широте (latitude), долготе (longitude) и городу
// сделайте используя async / await асинхронные функции
// cсылки на api в чате zoom

// сделайте fetch запрос по адресу:
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
// https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true
// вам нужно заменить координаты в строке на данные выше
// получите данные погоды: температуру, скорость ветра и.т.д
// также заберите weathercode - он вам понадобится

const address = document.querySelector("#addressOfCity");

async function getWeather() {
  //данные о местоположении
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();

  //*работа с данными из объекта без деструктуризация
  //объявили переменные и присвоили им значения из объекта
  //   const city = data.city
  //   const latitude = data.latitude
  //   const longitude = data.longitude
  //*работа с данными из объекта с деструктуризацией
  //мы в одну строчку объявляем переменные с именами совпадающими с именем нужным нам ключей и передаем им соответствующие значения
  //   const {city, latitude, longitude} = data
  //   console.log(city, latitude, longitude)

  //карточка для отображения данных
  const card = document.createElement("div");
  //широта
  const lat = document.createElement("p");
  lat.textContent = `Latitude: ${data.latitude}`;
  //долгота
  const lon = document.createElement("p");
  lon.textContent = `Longitude: ${data.longitude}`;
  //название города
  const city = document.createElement("p");
  city.textContent = `City: ${data.city}`;
  //добавляем все полученные элементы в карточку
  card.append(lat, lon, city);

  //используем координаты для получения данных о погоде
  const latitude = data.latitude; // Широта из первого запроса
  const longitude = data.longitude; // долгота из первого запроса
  //запрос данных о погоде
  const resWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`); //чтобы ссылка по второму запросу сработала, как динамическая, нужно заменить кавычки на косые, а фиксированные координаты сделать через ${...} динамическими
  const weatherData = await resWeather.json();

  // данные о температуре
  const temperature = document.createElement("p");
  temperature.textContent = `Temperature: ${weatherData.current_weather.temperature}°C`;
  
  //данные о скорости ветра
  const windSpeed = document.createElement("p");
  windSpeed.textContent = `Wind Speed: ${weatherData.current_weather.windspeed} km/h`;
  
  //направление ветра
  const windDirection = document.createElement("p");
  windDirection.textContent = `Wind direction: ${weatherData.current_weather.winddirection}°`;

  //код, вместо кода отражение описания
  const weatherCode = weatherData.current_weather.weathercode;
  const weatherDescription = document.createElement("p");
  weatherDescription.textContent = `Weather: ${getWeatherDescription(weatherCode)}`;

  // Добавляем данные о погоде в карточку
  card.append(temperature, windSpeed, windDirection, weatherDescription);
  //добавляем карточку на страницу
  address.append(card);
}
getWeather();

function getWeatherDescription(code) {
  const descriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    73: "Snow fall: Moderate intensity",
    75: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight intensity",
    81: "Rain showers: Moderate intensity",
    82: "Rain showers: Violent intensity",
    85: "Snow showers: Slight intensity",
    86: "Snow showers: Heavy intensity",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
     
  };
  return descriptions[code] || "Unknown weather code"; // если не будет кода, то будет сообщение о неизвестном коде
}

