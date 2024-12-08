//! Arrays 

let numbers = [1, 2, 3, 4, 5]
let fruits = ['orange', 'apple', 'banana']

//к элементам массива обращаемся по индексу, 1й элемент всегда на индексе 0
let item = fruits[0]

//если обратиться к не существующему индексу, получим undefined
let secret = fruits [10]
console.log(secret)

//мы можем создавать массив с разными типами данных, но так лучше не делать
let arr1 = [1, undefined, false, 'strawberry']
console.log(arr1)

//выводим значение длины массива
let length = arr1.length //length - является функцией НЕ методом
console.log('длина массива arr1=>', length)

//обращение к последнему элементу массива
let lestElement = arr1[arr1.length-1]
console.log(lestElement)

//! Arrays methods: push(), pop()


//методы массивов можно разделить на 2 группы: мутирующая и не мутирующая
//push(), pop() => мутирующие методы - изменяют исходный массив

    //push() => метод добавления элемента в конец массива
    //в методе push() добавления передаем новый элемент в круглых скобках
        
//! Нужно быть осторожными с мутирующими методами! Например, результат push(), если положить его в новую переменную это будет длина нового измененного массива, а не сам массив!!
//* newArrLength - это длина нового массива
let newArrLength = fruits.push('pineapple')

console.log('вот что в arr ', newArrLength)
console.log(fruits)


//!вызывайте элемент и используйте измененные данные
fruits.push('pineapple');
fruits.push('watermelon');

//console.log(fruits)

//pop() => метод удаления из конца массива
//возвращенное значение - удаленный элемент
//одним действием удаляем элемент из массива и записываем его в новую переменную lastFruit
let lastFruit = fruits.pop()

console.log('удаленный элемент => ', lastFruit)
console.log('новый измененный массив => ', fruits)


//! for loop -цикл for
//for (let index = 0; index < array.length; index++) {
    //const element = array[index];}
//в круглых скобках - тело цикла; через точку с запятой: 1 - переменная итератора, 2 - пока длина итератора меньше чем длина массива, цикл выполняется, когда будет достигнута максимальная длина будет возможен выход из цикла, 3 - чтобы цикл работал - увеличиваем цикл на 1
//i - переменная-итератор, число которое мы изменяем при каждой итерации
//его удобно использовать, как индекс в массиве, если конец цикла ориентирован на длину массива
for (let i = 0; i < fruits.length; i++) {
    console.log('Elements', i, fruits[i])
}

//! While 

let count = 0
//в круглых скобках указано условие для выхода из цикла
while (count<5) {
    console.log(count)
    //если не написать строчку ниже, мы попадем в бесконечный цикл * не будет соблюдено условие для выхода из цикла
    count++
}

//! методы работы со строками
let planet = 'Planet Earth'

//длина строки
let planetLength = planet.length
console.log('длина переменной planet => ', planetLength)

//приведение строки к нижнему регистру
let lowerCase =planet.toLowerCase()//у метода обязательно указываем ()
console.log(lowerCase)

//приведение строки к верхнему регистру
let upperCase =planet.toUpperCase()//у метода обязательно указываем ()
console.log(upperCase)


//получение подстроки - не мутирующий метод
let substring = planet.substring(0, 6) //substring(0, 6) - получаем строку с 0 по 5й индекс
console.log(substring)

//поиск индекса подстроки
let indexOfPlanet = planet.indexOf('Earth')
console.log('индекс подстроки  Earth ==> ', indexOfPlanet)
//если подстрока не найдена, мы получем НЕ индекс, а -1 (ошибку)

//сложные математические операции над числами Meth
//! рандом - случайное число от 0 до 1
let random =Math.random()
console.log(random)

//случайное число от 0 до 1
let randomFloor = Math.floor(Math.random()*100)+1 //! Math.floor - метод округления (+1, чтобы 100 вошло в рандом)
console.log(randomFloor)

//! методы shift и unshift для работы с массивами. Это как "зеркальные братья" push(), pop()
//! Это мутирующие методы для работы с началом массива

let planets = ['Mars', 'Venus', 'Earth', 'Saturn']
//shift() - удаляет первый элемент из массива. Возвращенное значение - удаленный элемент
planets.shift()
console.log('planets, но без марса =>', planets)

planets.unshift('Mercury')
//unshift - поставил в начало массива новый элемент 
console.log(planets)

//! строчка снизу распространенная ошибка, при записи результата мутирующих методов добавления и удаления в новую переменную мы не получаем новый массив
let newPlanets = planets.push('Jupiter')
//! в newPlanets будет длина нового массива
console.log(planets)

