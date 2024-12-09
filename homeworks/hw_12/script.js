//Задание 1. Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".
let names = ["Мария", "Алексей", "Елена", "Дмитрий"]; //массив с именами
console.log('Массив с именами =>', names);
let age = [22, 31, 45, 53]; //массив с возрастами
console.log('Массив с возрастами =>', age);

let people = names.map((name, index) => `${name} ${age[index]} лет/годов`); //  map создаёт новый массив; метод map позволяет пройтись по всему массиву names, взять каждый элемент и преобразовать его в новый элемент массива применив функцию callback (это функция, которая передаётся в другую функцию в качестве аргумента и вызывается внутри этой функции), т.е. в новый массив попадут аргументы не только names, но и ages. name — текущий элемент массива names; index — индекс текущего элемента в массиве; ages[index] — это возраст из массива ages, соответствующий индексу текущего имени, т.е. из обоих массивов будут взяты элементы с одинаковыми индексами (names[0] и age[0], names[1] и age[1]  и т.д.) и как бы склеены между собой.

console.log('Задание 1 =>', people)


//Задание 2. Используя методы массива, получите из этого массива новый массив, в котором элементы идут в обратной последовательности.
people.reverse(); //reverse() - переворачивает содержимое массива
console.log('Задание 2 =>', people)


//Задание 3. Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия". Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль.
let countries = []; //создание пустого массива
countries.push ("Франция", "Германия", "Италия") //добавление элементов в массив
//countries.pop(); // удаление последнего элемента
let removedСountry = countries.pop(); // удаление и сохранение в переменной последнего элемента
countries.unshift (removedСountry); //unshift - добавляет в начало массива элемент, в данном случае добавлен элемент "Италия", который был удален, но сохранен в переменной
console.log('Задание 3 =>', countries)


//Задание 4
//Создайте массив с числами 1, 2, 3, 4, 5. 
//Используя цикл for:
                    //Умножьте каждый элемент на 2 и выведите результат в консоль.
                    //Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
                    //Выведите оба массива (исходный и новый) в консоль.

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
   console.log('Задание 4 умножение элемента массива на 2 =>', numbers[i] * 2)
}


let squaredNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    squaredNumbers.push(numbers[i] ** 2); // ** 2 - квадрат числа
}

console.log('Задание 4 исходный массив=>', numbers)
console.log('Задание 4 новый массив, где каждый элемент исходного массива возведен в квадрат=>', squaredNumbers)



//проверка ДЗ и решение другими способами

const namesNew = ["Мария", "Алексей", "Елена", "Дмитрий"]
const agesNew = [22, 31, 45, 53]

const result = []

for (let i = 0; i < namesNew.length; i++) {
    result.push(`${namesNew[i]} ${agesNew[i]} лет/годов`); // шаблонная строка
    // result.push(namesNew[i] + " " + agesNew[i] + " лет/годов"); // конкатенация
  }
  
  // for (const i in namesNew) {
  //     result.push(`${namesNew[i]} ${agesNew[i]} лет/годов`);
  // }
  // for (const name of namesNew) {
  //     console.log(name);
  // }
  
  console.log(result);
  console.log(result[0]);
  
  // 2
  
  const resultReverse = [];
  
  for (let i = result.length - 1; i >= 0; i--) {
    resultReverse.push(result[i]);
  }
  
  const resultReverseMethod = result.reverse();
  
  console.log(resultReverse);
  console.log(resultReverseMethod);
  
  // 3 
  
  const countriesNew = [];
  countries.push("Франция", "Германия", "Италия");
  
  const italy = countriesNew.pop();
  countriesNew.unshift(italy);
  
  console.log(countriesNew);
  
  // 4
  
  const numbersNew = [1, 2, 3, 4, 5];
  const newNumbers = [];
  
  for (const i in numbersNew) {
      console.log(numbersNew[i] * 2);
      newNumbers.push(numbersNew[i] ** 2); // Math.pow(numbersNew[i], 2)
      // newNumbers[i] = (numbersNew[i] * numbersNew[i])
  
  }

//поверхностное копирование (чтение информации)
const arr1 = [1, 2, 3];
const arr1Copy = arr1;

arr1Copy [0] = 1000;

console.log(arr1);
console.log(arr1Copy);

//глубокое копирование

const arr = [1, 2, 3];
const arrCopy = [...arr]; //spread

arrCopy [0] = 1000;

console.log(arr);
console.log(arrCopy);
