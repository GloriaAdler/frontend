const student = {
    age:22,
    name:"Ivan"
}

const age = 35;

const fruits = ['apple', 'orange', 'mango'];
const fruits1 = ['potatoes', 'tomato', 'cucumber'];
const joinFruitsAndFruits1 = [...fruits, 'flower', ...fruits1];
console.log(joinFruitsAndFruits1);


const user = {id:1, email:"user@example.com", login:"Admin"}
const{email, id, login}=user

console.log(email)

const product ={
    title: "Iphone",
    price: 2000,
    "model of iphone": "XR"
}

//получить значение по ключу
console.log(product.price)
console.log(product["model of iphone"])


