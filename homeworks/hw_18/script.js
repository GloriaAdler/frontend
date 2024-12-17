//! Основное задание:
// Нужно: Отобразить информацию о выбранном персонаже из API.
// Данные для отображения:
                            // Изображение персонажа (image).
                            // Статус персонажа (status).
                            // Имя персонажа (name).
                            // Происхождение персонажа (origin.name).
                            // API: Используйте Rick and Morty API.
// Последовательность:
// Сделайте запрос к API для получения данных о персонаже.
// Отобразите данные на странице в соответствующих элементах HTML.

const img = document.querySelector("#character-img"); //ищем id через querySelector по #... нашли изображение
const btnUpd = document.querySelector("#btn-update"); //нашли кнопку
const nameElement = document.querySelector("#character-name"); // нашли элемент для имени
const statusElement = document.querySelector("#character-status"); // нашли элемент для статуса
const originElement = document.querySelector("#character-origin"); // нашли элемент для локации

let index = 0; //переменная для отслеживания текущего индекса, чтобы вывести на экран сначала Rick

//вызов функции. Загружаем персонажа при первом открытии страницы
getCharacter() //Rick Sanchez

function getCharacter() {
  fetch("https://rickandmortyapi.com/api/character") //здесь лежит массив из двадцати элементов, которые содержат: id, name, status, species
    .then((res) => res.json()) //всегда делаем эту строчку. JSON(Java Script Object Notation) - формат, в котором мы получаем ответ с сервера.
    .then(data => {
      const character = data.results[index]; //возвращаем персонажа по текущему индексу 
      img.src = character.image; // устанавливаем источник изображения
      img.alt = character.name; // устанавливаем альтернативный текст с именем персонажа
      nameElement.textContent = `Name: ${character.name}`; // выводим имя
      statusElement.textContent = `Status: ${character.status}`; // статус
      originElement.textContent = `Origin: ${character.origin.name}`; // место происхождения

      // После отображения персонажа переключаем индекс
      index = (index + 1) % 2; // Переключаем между индексами 0 и 1 (Rick and Morty): (0+1)/2=0,5, т.е. остаток 5, окр до 1; (1+1)/2=1 - остаток 0. Если первоначальное изображение с 0го индекса, то после нажатия кнопки будет с первого
    })
}

// Добавляем обработчик события на кнопку
btnUpd.addEventListener("click", getCharacter);

//! Дополнительное задание:
    // Нужно: Создайте галерею персонажей.
    // Используйте метод map() для работы с массивом данных.
    // Для каждого персонажа создавайте HTML-элемент и добавляйте его на страницу.
    // Галерея должна корректно отображать всех персонажей, полученных из API.

const gallery = document.querySelector("#gallery"); // ищем id через querySelector по #... нашли галерию персонажей

//вызов функции. Загрузка галереи персонажей   
galleryOfCharacters(); 

//функция для загрузки с API изображений и их отражение в браузере
function galleryOfCharacters (){
    fetch("https://rickandmortyapi.com/api/character") //здесь лежит массив из двадцати элементов, которые содержат: id, name, status, species
    .then((res) => res.json()) //всегда делаем эту строчку. JSON(Java Script Object Notation) - формат, в котором мы получаем ответ с сервера.
    .then(data => {
      // с помощью forEach проходим по массиву персонажей и создаем для каждого карточку
      data.results.forEach((character) => {
        //создаем...
        //  ...карточку персонажа
        const card = document.createElement("div");//элемент "div" для карточки персонажа
       
        // ... элементы для изображения, имени, статуса и места происхождения
        const img = document.createElement("img");
        img.src = character.image; // устанавливаем источник изображения
        img.alt = character.name; // устанавливаем альтернативный текст с именем персонажа

        // ... заголовка для имени персонажа
        const name = document.createElement("h2");
        name.textContent = character.name; //текст имени персонажа

        // ... элементы параграфа для статуса персонажа
        const status = document.createElement("p");
        status.textContent = `Status: ${character.status}`;//текст статуса персонажа


        // ... элементы параграфа для локации персонажа
        const origin = document.createElement("p");
        origin.textContent = `Origin: ${character.origin.name}`; //текст локации персонажа

        // добавляем созданные элементы в карточку персонажа
        card.appendChild(img); //appendChild() - добавляет дочерний элемент к родителю в конец списка
        card.appendChild(name);
        card.appendChild(status);
        card.appendChild(origin);

        // Добавляем карточку в галерею
        gallery.appendChild(card);
      });
    })
   
}
