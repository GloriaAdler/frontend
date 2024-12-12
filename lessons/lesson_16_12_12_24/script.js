//функции для калькулятора
function plus(a, b) {
  calculator(5, 10, "+");
}

function minus() {
  calculator(5, 10, "-");
}

function multiply() {
  calculator(5, 10, "*");
}

function division() {
  calculator(5, 10, "/");
}

function calculator(a, b, operator) {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  if (operator === '*') {
    return a * b;
  }
  if (operator === '/') {
    return a / b;
  }
}

// undefined
console.log(calculator(5, 10, "+"));
console.log(calculator(5, 10, "-"));
calculator(5, 10, "*");
calculator(5, 10, "/");
