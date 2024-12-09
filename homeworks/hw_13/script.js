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








