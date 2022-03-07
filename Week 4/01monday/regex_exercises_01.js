const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.
console.log(ex1.match(/\b\w{3}\b/gi));

// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.
console.log(ex2.replace(/\d+/g, ""));

// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.
console.log(ex3.match(/(?<=\$)\d+\.\d+/));

// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.
console.log(ex4.match(/\d{4}\s\d{3}\s\d{3}/));

// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.
console.log(ex5.match(/\w+@[\w.+]*/));
