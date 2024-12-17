//объявляем переменную
const gridProducts = document.querySelector("#grid-products");

//! fetch запрос на .then
// fetch ('https://fakestoreapi.com/products') //fetch запрос возвращает promise (ожидание данных)
// .then(res => res.json())
// .then(data => { //все операции с данными с сервера будут происходить во втором then
//     data.map(product => {
//         const item = document.createElement('p')
//         item.textContent = product.title
//         document.body.append(item)
//     })
// })

//! fetch запрос на async/await
//альтернативный популярный способ обработки асинхронных запросов в js
//"под капотом" работает также как и .then, но визуально выглядит иначе
//в асинхронных функциях сохраняются порядок выполнения кода для синхронных и асинхронных действий
//перед объявлением асинхронной функции мы пишем слово async
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json(); //всегда вызываем json()!!!
  data.map((product) => {
    //создаем карточку с данными
    const card = document.createElement("div");
    card.className = "product-card";
    card.classList.add("primary");

    //создаем заголовок
    const heading = document.createElement("h4");
    heading.textContent = product.title;

    // создаем картинку
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    // создаем обертку для картинки и добавляем картинку
    const wrapper = document.createElement("div");
    wrapper.className = "img-wrapper";
    wrapper.append(img);

    //создаем описание товара  -параграф
    const desc = document.createElement("p");
    //обрезаем длинный текст
    let descText = product.description;
    if (descText.length > 200) {
      desc.textContent = descText.slice(0, 200) + "..."; //если длина descText больше чем 200, то добавляем ...
    } else {
      desc.textContent = product.description; //.description - смотрим в API
    }

    //добавляем цену товара
    const price = document.createElement("p");
    price.textContent = `Price: ${product.price} €`;

    //добавляем элементы к карточкам в том порядке, в котором хотим увидеть их в контейнере
    card.append(heading, price, wrapper, desc);
    gridProducts.append(card); //gridProducts - наша переменная объявленная во второй строке, чтобы вывести на экран массив
  });
}

//!не забываем вызывать функцию (с обычной функцией, вызывается где угодно, а со стрелочной, только после инициализации функции)
fetchProducts();

//пример именной асинхронной стрелочной функции
// const fetchProducts = async () => {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const data = await res.json ()//всегда вызываем json()!!!
//     console.log(data)
// }

//!закрепляем fetch запросы
//через .then
// fetch("https://fakestoreapi.com/products?limit=5")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

  //через async
async function getAsyncProducts(){
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
    const data = await res.json()
    console.log(data)
}
getAsyncProducts() //не забываем вызывать функцию


