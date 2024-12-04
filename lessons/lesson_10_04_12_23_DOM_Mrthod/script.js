// сделали тест подключения
//console.log("hello js");
//вывели в консоль глобальный объект document в виде html тегов (более читабельный вид)
//console.log(document);
//вывели document в виде объекта со всеми вложенными св-ми (более строгий вид html структуры)
//console.dir(document);

//завели переменную h1 и положили в неё результат поиска через querySelector тега h1
const heading = document.querySelector('h1')
//console.log(h1)
//изменили цвет элемента на оранжевый
heading.style.color = 'orange'
heading.innerText = 'Урок 10: DOM методы'

// document.querySelector('h1').style.color = 'orange'
// document.querySelector('h1').innerText = 'Урок 10: DOM методы'

// находим кнопку по id через обращение с символом #
const btnChange = document.querySelector('#btn-change')
//console.log(btnChange)

btnChange.addEventListener('click', ()=>{
    heading.style.color = 'violet'
    heading.innerText = 'Lesson 10: DOM methods 🏠'

})

const btnCreate = document.querySelector('#btn-create')



btnCreate.addEventListener('click', ()=>{
    //сщздали новый элемент *но еще не добавили на страницу
    let newElement = document.createElement('p')
    //изменили текст элемента
    newElement.innerText = 'Кажется я начинаю понимать этот DOM...'
    //изменили цвет элемента
    newElement.style.color = 'forestgreen'
    //добавляем на страницу элемент
    //применяем метод append к родителю, в скобках передаем один элемент или несколько через запятую
    document.body.append(newElement)
    console.log(newElement)

})