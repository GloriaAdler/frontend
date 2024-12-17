const gridProducts = document.querySelector("#grid-products"); // находим контейнер для карточек продуктов

async function fetchProducts() {
  //асинхронная функция
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  console.log(data);

  data.products.map((product) => {
    console.log(product);
    //создаем карточку с данными
    const card = document.createElement("div");
    card.className = "product-card";
    card.classList.add("primary");

    //создаем заголовок
    const titleProduct = document.createElement("h3");
    titleProduct.textContent = product.title;

    //создаем описание товара  -параграф
    const desc = document.createElement("p");
    desc.textContent = product.description; //.description - смотрим в API

    //добавляем цену товара
    const price = document.createElement("p");
    price.className = 'price-product'
    price.textContent = `Price: ${product.price} €`;

    // создаем картинку
    const img = document.createElement("img");
    img.src = product.images[0]; // Получаем первую картинку из массива изображений
    img.alt = product.title;
    // создаем обертку для картинки и добавляем картинку
    const wrapper = document.createElement("div");
    wrapper.className = "img-wrapper";
    wrapper.appendChild(img);

    //добавляем элементы к карточкам в том порядке, в котором хотим увидеть их в контейнере
    card.append(titleProduct, desc, price, wrapper);
    gridProducts.append(card);
  });
}

//вызов функции
fetchProducts();
