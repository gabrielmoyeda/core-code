<h1 align="center"><b>npm,npx & Typescript</b>
<br>Week 4 (31 Ene - 4 Feb)</h1>

## Week goal 🏁

<p>Lear about Typescript and Object Oriented Programming introduction</p>

<details>
  <summary>Más información</summary>
  <h3>Week subtopics</h3>

- What is npm?
- package.json
- What is npx?
- What is Typescript?
- Relation between Typescript and Javascript
- Typescript Hello World
- Introduction to Object Oriented Programming
  - Abstraction
  - Inheritance
  - Polymorphism
  - Encapsulation
</details>

---

## <mark>Week challenges (Monday)</mark> 💻

1. Check [this](https://www.youtube.com/watch?v=sXQxhojSdZM) video  
Regular Expression or RegEx  
[WebPage to practice](https://regexr.com/)  
Para declarar un regex en js -> **const regex = /aqui_regex/**  
En JS tenemos  
`match` para encontrar todos las coincidencias
> ```js
> const matches = 'Some Text'.match( regex );
> ```  
`search` para encontrar una coincidencia
> ```js
> const index = 'Some Text'.search( regex );
> ```  
`replace` para reemplacar las coincidencias
> ```js
> const next = 'Some Text'.replace( regex, 'hi mom!' );
> ```  
Banderas: (puede tener combinaciones)
<ul>
  <li>g - global - busca en toda la cadena</li>
  <li>i</li>
  <li>m</li>
  <li>s</li>
  <li>y</li>
</ul>
Caracteres especiales
<ul>
  <li>.</li>
  <li>$</li>
  <li>* - Permite al patron ver si existe 1 o mas veces</li>
  <li>+</li>
  <li>-</li>
  <li>? - Permite al patron ver si existe 0 o 1 vez</li>
  <li>() - Sirve para agrupar</li>
  <li>[]</li>
  <li>{}</li>
  <li>\</li>
  <li>| - Logical Or</li>
</ul>

2. Follow [this](https://www.youtube.com/watch?v=909NfO1St0A) video
3. Follow [this](https://dev.to/codebubb/javascript-regex-exercises-01-5078) guide -> [Solution](./01monday/regex_exercises_01.js)
4. Check [this](https://www.youtube.com/watch?v=RvYYCGs45L4) video
5. Follow [this](https://www.youtube.com/watch?v=DHvZLI7Db8E) video
6. Check [this](https://www.youtube.com/watch?v=rKK1q7nFt7M) video
---
## <mark>Week challenges (Tuesday)</mark> 💻
1. [This](https://www.typescriptlang.org/docs/handbook/intro.html) link is nice to have and read
2. [Typescript object type](https://typescript-exercises.github.io/#exercise=1)
```ts
/*

Welcome to:

    ................................................................
    .                                                              .
    .     ####################    ####################      E      .
    .     ####################    ####################      X      .
    .             ####            ####                      E      .
    .             ####            ####                      R      .
    .             ####            ####################      C      .
    .             ####                            ####      I      .
    .             ####                            ####      S      .
    .             ####            ####################      E      .
    .             ####            ####################      S      .
    .                                                              .
    ................................................................

Intro:

    We are starting a small community of users. For performance
    reasons we have decided to store all users right in the code.
    This way we can provide our developers with more
    user-interaction opportunities. With user-related data, at least.
    All the GDPR-related issues will be solved some other day.
    This would be the base for our future experiments during
    these exercises.

Exercise:

    Given the data, define the interface "User" and use it accordingly.

*/

export type User = { name: string, age : number , occupation : string};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


/* In case if you are stuck:

// https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
*/

```
3. Read [this](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)
4. [Typescript union types](https://typescript-exercises.github.io/#exercise=2)
```ts
/*

Intro:

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.

    Initially we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.

Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[]  = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    console.log(` - ${person.name}, ${person.age}`);
}

persons.forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
```
5. [Typescript in operator](https://typescript-exercises.github.io/#exercise=3)
6. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836)
7. [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)
---
## <mark>Week challenges (Wednesday)</mark> 💻
1. [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009)
```js
function arrayDiff(a, b) {

 return a.filter((item)=>!b.includes(item))
}
```
2. [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)
```js
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
```
---
## <mark>Week challenges (Thursday)</mark> 💻

1. [Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)
```js
function isPangram(string){
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let regex = '/\s/g';
  let lowercase = string.toLowerCase().replace(regex, "");
  
  for(let i = 0; i < alfabeto.length; i++)
   {
      if(lowercase.indexOf(alfabeto[i]) === -1){
      return false;
    }
   }
  return true
 }
```
2. [Find the missing letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)
```js
function findMissingLetter(array)
{
   let alfabeto = "abcdefghijklmnopqrstuvwxyz";
   let x = array[0].charCodeAt(0); // 65 A 90 Z 97 a 122 z
   if (x < 91) alfabeto = alfabeto.toUpperCase();
   let inicio = alfabeto.indexOf(array[0]);
   for (let i = 0; i < array.length; i++)
      {
         if (array[i] !== alfabeto[inicio + i]) return alfabeto[inicio + i];
      }
}
```
3. [Find the unique number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)
```js
function findUniq(arr) {
   let set = new Set(arr);
   let arr2 = [...set];
   let cont = 0;
  for (let i = 0; i < arr.length; i++)
  {
      if (arr[i] == arr2[0]) cont++;
  }
  return (cont == 1) ? arr2[0] : arr2[1];
}
```
4. [Reverse or rotate?](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991)
```js
function revrot(str, sz) {
  let res = "";
  if (str === "" || sz <= 0 || sz > str.length)
    {
      return res;
    }
  var cubos = Math.floor(str.length / sz);
  for (let i = 0; i < cubos; i++)
    {
      let cubo = str.slice(i * sz, (i+1)*sz);
      let sum = 0;
      for (let j = 0; j < cubo.length; j++)
        {
          sum = parseInt(cubo.charAt(j)) + parseInt(sum);
        }
      if (sum % 2 == 0)
        {
          for (let j = cubo.length; j >= 0; j--)
            {
              res += cubo.charAt(j) + '';
            }
        }
      else
        {
          let codigo = cubo.split("").splice(0 , 1).toString();
          res += cubo.split("").splice(1, cubo.length).join("") + codigo;
        }
    }
  return res;
}
```
5. [What's Your Poison?](https://www.codewars.com/kata/58c47a95e4eb57a5b9000094)
```js
function find(rats) {
  // The rats (0 to 9)
  // 1000 invites -> bottles
  
  // 1 -> 1    0000000010 -> 2
  // 0, 1, 2   
  // 0000000000
  // 0000000001
  // 0000000010
  
  
  // 0000000011
  
    //return parseInt('0000000011', 2);
  
  return rats.reduce((a,b) => a + Math.pow(2, b) ,0);
}
```
6. ✨Complete your 3rd [**Core Challenge**](https://corecode.notion.site/GitHub-Boost-Guide-167914056cff4522886a78756f659e47). This is one of the requirements for the certification, where you'll boost your dev professional-brand.  
Visit my [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabrielmoyeda) profile
---
## Week links 🔗

1. [TypescriptPlayground](https://www.typescriptlang.org/play)
2. [Example 0 - Typescript](https://github.com/corecodeio/FS0122_Typescript_00)
3. [Example 1 - Typescript](https://github.com/corecodeio/FS0222_Typescript_01)
