const meteo = document.querySelector("#weatherOfCity");

async function getWeather() {
  //! шаг 1
  //данные о местоположении
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();

  //карточка для отображения данных
  const card = document.createElement("div");
  card.className = "weather-card"; //класс для css
  //широта
  const lat = document.createElement("p");
  //lat.textContent = `Latitude: ${data.latitude}`; //вывод на экран
  console.log(`Latitude: ${data.latitude}`); //вывод в консоль
  //долгота
  const lon = document.createElement("p");
  //lon.textContent = `Longitude: ${data.longitude}`; //вывод на экран
  console.log(`Longitude: ${data.longitude}`); //вывод в консоль

  //название города
  const city = document.createElement("p");
  city.className = 'city' //класс для css
  city.textContent = `City: ${data.city}`;

  //выводим название города
  card.append(city);

  //! шаг 2
  //используем координаты для получения данных о погоде
  const latitude = data.latitude; // Широта из первого запроса
  const longitude = data.longitude; // долгота из первого запроса
  //запрос данных о погоде
  const resWeather = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  ); //чтобы ссылка по второму запросу сработала, как динамическая, нужно заменить кавычки на косые, а фиксированные координаты сделать через ${...} динамическими
  const weatherData = await resWeather.json();

  // данные о температуре
  const temperature = document.createElement("p");
  temperature.textContent = `Temperature: ${weatherData.current_weather.temperature} °C`;

  //данные о скорости ветра
  const windSpeed = document.createElement("p");
  windSpeed.textContent = `Wind Speed: ${weatherData.current_weather.windspeed} km/h`;

  //направление ветра
  const windDirection = document.createElement("p");
  windDirection.textContent = `Wind direction: ${weatherData.current_weather.winddirection}°`;

  //! шаг 3
  //код, вместо кода отражение описания
  const weatherCode = weatherData.current_weather.weathercode;
  const weatherDescription = document.createElement("p");
  weatherDescription.textContent = `Weather: ${getWeatherDescription(
    weatherCode
  )}`;

  // Получение и добавление изображения города
  const cityImageUrl = await getCityImage(data.city);
  if (cityImageUrl) {
    const cityImage = document.createElement("img");
    cityImage.src = cityImageUrl;
    cityImage.alt = `${data.city} image`;
    card.append(cityImage); //добавили в карточку
  }

  //! шаг 4
  // Добавляем данные о погоде в карточку
  card.append(temperature, windSpeed, windDirection, weatherDescription);

  //добавляем карточку на страницу
  meteo.append(card);
}
getWeather();

//документацию Open-Meteo Weather Codes для расшифровки кода погоды
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

//функция для запроса картинки с изображением города, который определился
async function getCityImage(cityName) {
  const accessKey = "92DMhXgITKLD76_C8ec4rHbDP1RPpr33Q6uV9kkK0aI"; //Access Key c unsplash.com

  const url = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${accessKey}&orientation=landscape`;

  try {
    //обработка возможных ошибок
    const res = await fetch(url);
    const data = await res.json();
    if (data.results.length > 0) {
      return data.results[0].urls.small; // URL первой картинки
    }
    return null; // Если нет результатов
  } catch (error) {
    console.error("Error fetching city image:", error);
    return null;
  }
}
