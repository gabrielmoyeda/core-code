let s = 'Lorem Ipsum Lorem Ipsum ASDFGKJ';

let a = s.split(' ');

// for
for (let i = 0, l = a.length; i < l; i++) {
  console.log(a[i]);
}

// while
let i = 0;
let l = a.length;
while (i < l) {
  console.log(a[i]);
  i = i + 1;
}

// for in
for (let i in a) {
  console.log(i);
}
