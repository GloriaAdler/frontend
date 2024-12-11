let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
}

// this.balance += sum
bankAccount.deposit = function(sum) {
    sum >= 5 && sum <= 5000 ? this.balance += sum : alert("Некорректная сумма пополнения") // this.balance = this.balance + sum
}

// this.balance -= sum
// Бизнес-логика
bankAccount.withdraw = function(sum) {
    sum <= this.balance && sum > 0 ? this.balance -= sum : alert("Некорректная сумма списания")
}

// Просмотр баланса
bankAccount.checkBalance = function() {
    console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
}



const bank = [];

function createAccount() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    // falsy null, '', 0, undefined, NaN
    if (name) {
        bank.push({
            ...bankAccount,
            accountNumber: bank.length + 1,
            accountHolderName: name
        })
        alert('Account created successfully')
    } else {
        alert('Please, enter a valid name')
    }

    nameInput.value = '';
    console.log(bank);
}

//function showAccounts() {
    //const accountList = document.getElementById('accountList'); //получаем элемент из списка по ID
   // accountList.innerHTML = ''; // очищаем список перед добавлением новых элементов, чтобы старые данные не дублировались, когда элемент будет вызван повторно. innerHTML отвечает за содержимое элемента. innerHTML = '' - убираем ВСЁ, что находится внутри элемента <ol>

    //проверяем существует ли аккаунт
   // if (bank.length === 0) {//если длина массива равно 0, то массив пустой,
       // accountList.innerHTML = '<li>No accounts available</li>'; // тогда вставляем в список сообщение, что нет доступных учетных записей; li - list item - элемент списка
      //  return; //функция не срабатывает, если массив пуст
   // }

   // for (let i = 0; i < bank.length; i++) {//проходим по всем элементам массива пока индекс текущего элемента массива меньше кол-ва элементов в нем (i < bank.length), начиная с первого элемента с индексом 0 (i = 0) и увеличивая на 1 после каждой интеграции (i++)
      //  const account = bank[i]; // из каждой интеграции, получаем один аккаунт из массива bank
      //  const listItem = document.createElement('li'); // создаём элемент списка
      //  listItem.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`; //выводим сообщение при просмотре списка
      //  accountList.appendChild(listItem); // добавляем новый элемент в список <ol id="accountList">
  //  }
//}

//второй вариант рассмотренный на уроке
function showAccounts(){

    const accountList = document.getElementById('accountList');
    accountList.innerHTML = ' ';// очищаем список перед добавлением новых элементов, чтобы старые данные не дублировались, когда элемент будет вызван повторно. innerHTML отвечает за содержимое элемента. innerHTML = '' - убираем ВСЁ, что находится внутри элемента <ol>. Если не добавить innerHTML, тогда каждый раз показывать будет все элементы когда-либо вводимые 

    //!первый способ
   //for (const account of bank) { //этот цикл удобнее чем простой for
    //const li = document.createElement('li'); //наполняем список
    //li.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`; //наполнили смыслом текст: account - объект итеррируемого списка, .accountNumber - номер (готовое св-во описанное в первых строчках)
    //accountList.appendChild(li)//appendChild - добавляет только один элемент, а append несколько.

    //!второй способ, включает несколько методов сразу
    //accountList.innerHTML += `<li>ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>;`
    
   //}

   //!третий способ, через forEach
   bank.forEach((account, index)=>{  //обычно пишут (e, i), где e-элемент, i-индекс
        accountList.innerHTML += `<li>${index + 1}, ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>`; //${index + 1} - нумерация проставленная в ручную, при этом дефолтную стилистику нужно отключить в style.css в #accountList

   })
}

// Получаем кнопки "Deposit" и "Withdraw" из HTML по ID
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');

//настройка кнопки "Deposit"
deposit.onclick = function(){
    
    //TODO описание действия при нажатии на кнопку deposit

}
    

withdraw.onclick = function() {
    //TODO описание действия при нажатии на кнопку  withdraw
}
