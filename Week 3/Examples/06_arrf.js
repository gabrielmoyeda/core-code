function f1(a1, a2) {
  let total = a1 + a2;
  total *= 2; // total = total * 2
  // i++ => i = i + 1
  // i += 3 => i = i + 3
  return total;
}

console.log(f1(5, 2));

const f2 = (a1, a2) => {
  let total = a1 + a2;
  total *= 2;
  return total;
};

console.log(f2(5, 2));

//

function sum1(a, b) {
  return a + b;
}

const sum2 = (a, b) => a + b;

console.log(sum1(4, 4));
console.log(sum2(4, 4));

const greatest = (a, b) => (a > b ? a : b);

console.log(greatest(1, 90));

console.log(greatest(99, 100));
