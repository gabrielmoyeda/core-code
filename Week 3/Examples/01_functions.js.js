// Functions
function sum(a, b) {
  // ....
  return a + b;
}

function InchToCm(inches) {
  const equivalent = 2.54;
  return inches * equivalent;
}

function pay(value, tax = 0) {
  // firma de la funcion, nombre de la funcion, parametros
  // if (typeof tax == 'undefined') tax = 0;
  return value + (tax * value) / 100;
}

// console.log(pay(5, 50));
// console.log(pay(100, 10));
// console.log(pay(90, 100, 80));

function WoowArguments() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return arguments;
}

console.log(WoowArguments(1, 'Yosef', false, 'Maldonado'));
