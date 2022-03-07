let globalScope = 'I am a global scope';

function someFunction() {
  // console.log(globalScope);
  let functionScope = 'I am function scope';
  if (true) {
    // console.log(functionScope);
    let blockScope = 'I am a block scope';
    let myFunction = function something() {
      console.log('Something');
    };
    myFunction();
  }

  // console.log(blockScope);
}

// someFunction();

// var i = 90;
// var toal = i * 2;
// console.log('start');
// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0, 1, 2, 3, 4
// }
// console.log('end');
// console.log(i); // 90

// Callbacks

let myOtherFunction = function yetAnotherSum(x, y) {
  return y + x + 3;
};

function mathFunction(operator, a, b, yosef) {
  if (operator == '++') return yosef(a, b);
  return a + b;
}

console.log(mathFunction('++', 5, 6, myOtherFunction));
