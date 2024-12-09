//object - сложный тип данных
//синтаксис объекта включает фигурные скобки
//Объекты - это структура данных, которые состоят из пар "ключ: значение"

//примет объекта
let user = {
    name: "John",
    age: 30,
    isAdmin: true
}

//1- точечная нотация
console.log(user.name)

//квадратные скобки
console.log(user["name"])

console.log(user.salary)
//+5000 -> 5000

user.salary = 5000;
console.log(user.salary)

user.age = 31

delete user.isAdmin;
console.log(user)

//i -index (Array)
//key - ключ (Object) - равен индексу
//for (const key in object){}

for (const key in user) {
    console.log(`Key: ${key}, значение равно: ${user[key]}`)//key - может быть любым словом
}

//как добавить функцию к объекту
user.greet = function () {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age}`)
}
user.greet();//вызов функции



