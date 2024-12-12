//Все комментарии в 14м уроке

let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
}

// Метод для пополнения счёта
bankAccount.deposit = function(sum) {
    sum >= 5 && sum <= 5000 ? this.balance += sum : alert("Некорректная сумма пополнения") 
}

// Метод для снятия средств
bankAccount.withdraw = function(sum) {
    sum <= this.balance && sum > 0 ? this.balance -= sum : alert("Некорректная сумма списания")
}

// Просмотр баланса
bankAccount.checkBalance = function() {
    console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
}

const bank = [];

// Создание нового аккаунта
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

//кнопка для показа всех введенных аккаунтов, а также добавление функции удаления каждой строки из сформированного списка
function showAccounts() {

    const accountList = document.getElementById('accountList'); //получаем элемент <ol id="accountList"> в HTML
    accountList.innerHTML = '';//очищаем список, чтобы не дублировался, после каждого формирования списка
   
    bank.forEach((account, index) => { //Проходим по массиву bank; account это аккаунт, index его порядковый номер

        const listItem = document.createElement('li');//создаем новый элемент списка 'li'
        listItem.textContent = `${index + 1}. ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`; // Текст для вывода на экран с веденным именем и сформированными номером, ID и балансом

        // Создаем кнопку "Delete"
        const deleteButton = document.createElement('button'); 
        deleteButton.textContent = 'Delete'; //текст на кнопке удаления - 'Delete'
        deleteButton.onclick = function () {//добавляем обработку для кнопки удаления
            bank.splice(index, 1); //метод splice удаляет аккаунт из массива "bank", удаление будет по индексу. один индекс - это один элемент
            showAccounts(); // обновляем список после удаления

    };

    listItem.appendChild(deleteButton); // Добавляем кнопку в каждый элемент списка
        accountList.appendChild(listItem); // Добавляем элемент списка li уже вместе с кнопкой в список ol
    });

}

const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');

//кнопка 'deposit' для обработки пополнения
deposit.onclick = function() {
    const accountIdInput = document.getElementById("accountId"); //ввод Id
    const amountInput = document.getElementById("amount"); //ввод суммы

    const accountId = parseInt(accountIdInput.value); //парсим введенный Id до целого числа (дроби и буквы игнорируются) - parseInt
    const amount = parseFloat(amountInput.value); //парсим сумму до числа с плавающей точкой, т.е. можно ввести дробное число - parseFloat

    if (!accountId || !amount || amount <= 0) { //проверяем ввел ли пользователь Id и сумму больше 0, т.е. если хоть одно значение false, то выводим сообщение о необходимости ввести верные данные. accountId - true, а !accountId - false (! это НЕ)
        alert("Please enter a valid Account ID and Amount.");
        return;
    }

    const account = bank.find((e) => e.accountNumber === accountId); //методом .find ищем первый элемент в массиве, который удовлетворит условию (введенному Id), т.е. некому "е", а "e" это каждый элемент массива bank; === - сравнение accountNumber и accountId, они должны быть равны

    if (!account) { //если не равны,... 
        alert("Account not found.");//...появиться всплывающее окно, что учетная запись не найдена
        return;
    }

    account.deposit(amount); //вызываем метод .deposit от объекта amount, так как метод .deposit находиться в объекте bankAccount, от которого скопирован каждый аккаунт, то он добавляет значение amount к текущему балансу аккаунта account.balance
    alert(`Deposited ${amount} to Account ID: ${accountId}`);//сообщение об успешном пополнении на конкретный Id
    accountIdInput.value = ""; //очищает поле ввода с id="accountId"
    amountInput.value = "";//очищает поле ввода с id="amount"

    console.log(bank);
}

//кнопка 'withdraw' для обработки снятия
withdraw.onclick = function() {
    const accountIdInput = document.getElementById("accountId");
    const amountInput = document.getElementById("amount");

    const accountId = parseInt(accountIdInput.value);
    const amount = parseFloat(amountInput.value);

    if (!accountId || !amount || amount <= 0) {
        alert("Please enter a valid Account ID and Amount.");
        return;
    }

    const account = bank.find((e) => e.accountNumber === accountId);

    if (!account) {
        alert("Account not found.");
        return;
    }

    account.withdraw(amount);//всё аналогично .deposit, но только он убавит на значение amount от текущего баланса аккаунта account.balance
    alert(`Withdrew ${amount} from Account ID: ${accountId}`);
    accountIdInput.value = "";
    amountInput.value = "";

    console.log(bank);
   
}

