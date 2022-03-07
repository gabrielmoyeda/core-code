let a1 = [
  { name: 'Yosef', age: 26 },
  { name: 'Lorem', age: 12 },
  { name: 'Ipsum', age: 30 },
];

let n = [1, 2, 2, 4, 5, 6, 7, 8, 9, 10];

// MAP

// La edad de los objetos en el arreglo multiplicada por 2
function challenge(a) {
  // let b1 = [];
  // for (let i = 0, l = a.length; i < l; i++) {
  //   a[i].age *= 2;
  //   b1.push({ name: a[i].name, age: a[i].age });
  // }
  // return b1;
  return a.map((user) => ({ name: user.name, age: user.age * 2 }));
}

// let result = challenge(a1);

// console.log(a1);
// console.log(result);

// a1[0].age = -1;

// console.log(result);

// REDUCE

//let total = 0;
// for (let i = 0; i < n.length; i++) {
//   total += n[i];
// }
// console.log(total);

// let total = n.reduce((pre, curr) => {
//   return pre + curr;
// }, 0);

// console.log(total);

let s = 'HoLa qEe tAL sOy uN stRinG!';

let sf = s
  .split(' ')
  .reduce((prev, curr) => {
    return `${prev} ${curr[0].toUpperCase()}${curr
      .slice(1)
      .toLocaleLowerCase()}`;
  }, '')
  .trim();

// console.log(sf);

let n2 = [1, 2, 4, 90];

let res = n2.reduce((p, c) => {
  return p + c;
});

// console.log(res);

// filter

// let n3 = n.filter((element) => {
//   if (element > 8) return true;
//   return false;
// });

let n3 = n.filter((element) => element > 8).reduce((p, c) => p + c, 0);

console.log(n3);

// console.log(n);
// console.log(n3);

let aa = a1.filter((user, a1) => user.age > 21);

// console.log(a1);
// console.log(aa);
