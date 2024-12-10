//Создать объект bankAccount (DEBIT CARD), который:
    // 1. accountNumber: "123456789"
    // 2. accountHolderName: "Alice"
    // 3. balance: 0
    // 4. deposit(sum) { TODO Пополнение счёта }
    // 5. withdraw(sum) { TODO Списание счёта }
    // 6. checkBalance() { TODO Просмотр баланса счёта }

//свойства
const bankAccount = {
    accountNumber: 123456789,
    accountHolderName: "Alice",
    balance: 0,

//пополнение
deposit (sum){
    if (sum > 0) {
        this.balance += sum;
        console.log(`На счёт зачислено ${sum} €. Текущий баланс: ${this.balance} €`);
    } else {
        console.log("Сумма пополнения не может быть меньше или равной 0.");
    }
},

//снятие
withdraw(sum){
    if (sum > 0 && sum <= this.balance){
        this.balance -= sum;
        console.log(`Со счёта списано ${sum} €. Текущий баланс: ${this.balance} €`);
    }else if (sum > this.balance) {
        console.log("На счету недостаточно средств.");
    }else{
        console.log("Сумма списания должна быть больше 0.");
    }
},

//проверка баланса
checkBalance(){
    console.log(`Текущий баланс: ${this.balance} €`);
}

}

//данные, чтобы проверить результат вывода в консоль 
bankAccount.deposit(1000); // пополнение счета на 1000 €
bankAccount.deposit(0); // пополнение счета на 0 €
bankAccount.deposit(-10); // пополнение счета на отрицательную сумму

bankAccount.withdraw(100); // списание 100 € 
bankAccount.withdraw(2000); // списание суммы большей, чем есть на счету
bankAccount.withdraw(0); // списание суммы равной 0

bankAccount.checkBalance(); // проверка баланса после списания


//==========================================рассмотрение ДЗ на уроке=======================================================
let bankAccount1 = {
    accountNumber1: "123456789",
    accountHolderName1: "Alice",
    balance1: 0
}

bankAccount1.deposit = function (sum) {
    sum >= 5 && sum<= 5000 ? this.balance1 += sum : alert ("Некорректная сумма пополнения")
}

bankAccount1.withdraw = function(sum){
    sum <= this.balance1 && sum > 0 ? this.balance1 -= sum : alert ("Некорректная сумма списания.")
}

//просмотр баланса
bankAccount1.checkBalance = function (){
    console.log(`Баланс Вашего аккаунта равен: ${this.balance1}`);
}

//Уведомление (встроено в инструмент JS и отражается в браузере в виде всплывающего окна)
alert("Привет из модального окна");
// Подтверждение/Отказ (Boolean)
let answer = confirm("Вы действительно хотите закрыть страницу ?");
console.log(answer);
// Ответ (String | null)
answer = prompt("Введите Ваше имя ?");
console.log(answer);





