const pElement = document.getElementById ("test");
//console.log(pElement);

pElement.style.backgroundColor ='blue';
const newElement = document.createElement ('div');
newElement.classList.add('new_div');
newElement.style.width = '250px';
newElement.style.height = '250px';
newElement.style.border = '2px solid black';

document.body.append(newElement)

//создание переменных: const, let, var
//let - можно перезаписывать
//const - НЕ перезаписываются

    
