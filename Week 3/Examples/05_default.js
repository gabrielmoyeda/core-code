// function pay(value, tax = 0) {
//   // firma de la funcion, nombre de la funcion, parametros
//   // if (typeof tax == 'undefined') tax = 0;
//   return value + (tax * value) / 100;
// }

// console.log(pay(90));

function foo(a, b) {
  return undefined;
}

function bar(c) {
  let result = foo(10, 10) || 1; // VALORES POR DEFECTO
  // if (result == 0) result = 1;
  return c / result;
}

// console.log(bar(10)); // undefined, error

function secret(showMessage) {
  let message = showMessage && 'The password is: 123'; // ASIGNACION CONDICIONAL
  console.log(message);
}

secret(true);
