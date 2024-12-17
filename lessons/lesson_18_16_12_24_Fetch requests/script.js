///!теория
//HTML - HyperText Transfer Protocol - протокол передачи гипертекста
//API - AppLication Programming Interface - интерфейс для "общения" программ друг м другом (например: окно ютюба на каком-либо сайте; авторизация через гугл-аккаунт; проверка на то, что не робот)
//https://dog.ceo/dog-api/ - сайт API

//!делаем fetch запрос за данными к API (частный случай работы с сервером)

//в ответ на fetch запрос приходит объект Promise в состоянии {<pending>}, его не получится обработать синхронно - нужно использовать методы с асинхронными данными

//const data = fetch('https://dog.ceo/api/breeds/image/random')
//console.log(data)

//!практика - делаем запрос

const img = document.querySelector("#dog-img"); //ищем id через querySelector по #...
console.log(img); //проверяем нашелся ли тег в консоли
const btnUpd = document.querySelector("#btn-update"); //нашли кнопку

//создаем функцию с fetch запросом, которую можно переиспользовать
function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random") //делаем запрос, выбираем адрес по которому делается запрос
    //первым .then() дожидаемся "сырых" данных и преобразуем их в JS объект с помощью .json()
    .then((res) => res.json()) //всегда делаем эту строчку. JSON(Java Script Object Notation) - формат, в котором мы получаем ответ с сервера.
    // в data (переменную data задаем сами, может быть любое имя, но обычно data) уже придут обработанные данные готовые к использованию
    .then((data) => {
      img.src = data.message; //после этого шага на экране браузера будет выведена картинка, а так как у нас в поиске используется рандом, то картинка будет обновляться каждый раз при перезаписи кода.
    });
}

//вызов функции
getDog();

//вешаем на кнопку слушатель событий
//по событию click будет вызываться функция getDog; здесь мы передаем уже функцию getDog, которая объявлена выше, она вызовется в момент события click
btnUpd.addEventListener("click", getDog);

//! Task 2
// * task

// отобразить данные по выбранному персонажу из API на странице
// выведите картинку, status, name, origin (из какой локации этот персонаж)

const img2 = document.querySelector("#character-img"); //ищем id через querySelector по #...
const btnUpd2 = document.querySelector("#btn2-update"); //нашли кнопку
const nameElement = document.querySelector("#character-name"); // находим элемент для имени
const statusElement = document.querySelector("#character-status"); // находим элемент для статуса
const originElement = document.querySelector("#character-origin"); // находим элемент для локации

//вызов функции. Загружаем персонажа при первом открытии страницы
getCharacter();

function getCharacter() {
  fetch("https://rickandmortyapi.com/api/character") //здесь лежит массив из двадцати элементов, которые содержат: id, name, status, species
    .then((res2) => res2.json()) //всегда делаем эту строчку. JSON(Java Script Object Notation) - формат, в котором мы получаем ответ с сервера.
    .then(data2 => {
      // Берем случайного персонажа из списка
    //   const randomCharacter = data2.results[Math.floor(Math.random() * data2.results.length)];//Math.random(): эта функция возвращает случайное число от 0 (включительно) до 1
    //   img2.src = randomCharacter.image; // устанавливаем источник изображения
    //   img2.alt = randomCharacter.name; // устанавливаем альтернативный текст с именем персонажа
    //   nameElement.textContent = `Name: ${randomCharacter.name}`; // имя
    //   statusElement.textContent = `Status: ${randomCharacter.status}`; // статус (Alive, Dead или Unknown)
    //   originElement.textContent = `Origin: ${randomCharacter.origin.name}`; // место происхождения

      //берем персонажа по конкретному индексу
      const character = data2.results[0]; //возвращаем персонажа по конкретному индексу 
      img2.src = character.image; // устанавливаем источник изображения
      img2.alt = character.name; // устанавливаем альтернативный текст с именем персонажа
      nameElement.textContent = `Name: ${character.name}`; // имя
      statusElement.textContent = `Status: ${character.status}`; // статус (Alive, Dead или Unknown)
      originElement.textContent = `Origin: ${character.origin.name}`; // место происхождения
    })
   
}

// Добавляем обработчик события на кнопку
btnUpd2.addEventListener("click", getCharacter);
