let str = 'This is a string';
let a = [...str];
//console.log(a);

let x = [1, 2, 3, 4];
let y = [5, 6, 7, 8];
//let z = [];

// for (let i = 0, lenght = x.length; i < lenght; i++) {
//   z.push(x[i]);
// }

// for (let i = 0, lenght = y.length; i < lenght; i++) {
//   z.push(y[i]);
// }

let z = [...x, ...y];
console.log(z);

function sum(a, b, c) {
  return a + b + c;
}

let param = [1, 3, 7];

console.log(sum(...param));
