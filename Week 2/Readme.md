<h1 align="center"><b>Javascript</b> 
<br>Week 2 (17 - 21 Enero 2022)</h1>

## Week goal 🏁

<p>Learn about Javascript structure</p>

<details>
  <summary>Más información</summary>
  <h3>Week subtopics</h3>

- Data types
  - undefined
  - null
- var, let, const
- Operators
  - Arithmetic
  - TypeOf
  - Booleans
  - Logics
- Conditionals
- Ternary operator
- Loops
  - While
  - For
  - For In
- Data structure
  - Array
  - List
  - Stack
  - Hash
- object
- Functions
  - Difference between arguments and parameters
  - Default parameters
  - Arguments array
- Number Class
  - Functions
- String Class
  - Functions
- Array Class
  - Functions
</details>

---
## <mark>Week challenges (Monday)</mark>  💻

1.  Follow the github course, you can find it  [here](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/recommended)  
Aún tengo dudas con GitHub, pero con práctica espero que quede listo
2.  Watch  [this](https://www.youtube.com/watch?v=A37-3lflh8I)  video
3.  Read  [this](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
4.  Create an account in ![Codewars](https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=codewars&logoColor=grey) --> [gabrielmoyeda](https://www.codewars.com/users/gabrielmoyeda)
---
## <mark>Week challenges (Tuesday)</mark>  💻

0.  Watch  [this](https://www.youtube.com/watch?v=cEBkvm0-rg0)  video
<details>
  <summary>Más información</summary>
  <h3>Tips para busquedas en Google</h3>

- Exact: Hacer la búsqueda utilizando Comillas, p.e. **"cannot read property 'map' of undefined"**
- Site: Se hace de la siguiente manera: **site:**_url_ palabras_a_buscar, p.e. **site:fireship.io react hooks**
- Exclude: para excluir un término se usa un guión, p.e. **insertar información -jquery** va a eliminar términos innecesarios como jquery, en este ejemplo
- Before or After: se utiliza la palabra before o after seguida de : y el año, por ejemplo: **laravel after:2022** o **javascript functions before:2010**
- Range: se puede consultar por rangos, esto es, poniendo el rango_min..rango_max, pueden ser fechas, cantidades, numeros, p.e. **react hooks 2019..2021**
- Logic & Group: se utiliza un pipe | para separar y parentesis para agrupar, p.e. **a|b** y agrupado **(a|b)c**
- Wildcard: los comodines son utilizados colocando un asterisco, esto quiere decir que busque todo lo relacionado y que solo busque palabras asociadas, p.e. como * un CRUD
- FileType: Se puede hacer una consulta por tipo de archivo, p.e. **filetype:pdf**
- Search the Fringe: se recomienda utilizar sitios como [DuckDuckGo](https://duckduckgo.com/) u [Odysee](https://odysee.com/)
- Competitor Research: Se utiliza la pparabra reservada related:url, p.e. related:angular.io
- Cache: Para bajar o tener en caché la ultima version de lo que buscas, p.e. cache:angular.io
</details>
<br>

1.  [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004)
```js
function multiply(a, b){
  return a * b;
}
```

2.  [ASCII Total](https://www.codewars.com/kata/572b6b2772a38bc1e700007a)
```js
function uniTotal (string) {
  var largoCadena = string.length;
  var sumaCar = 0;
  if (largoCadena == 0) 
    {
      sumaCar = 0;
    } 
  else
    {
      for (var i=0; i<= largoCadena-1; i++)
        {
          sumaCar = sumaCar + string.charCodeAt(i);
        }
    }
  return sumaCar;
}
```
3.  [get character from ASCII Value](https://www.codewars.com/kata/55ad04714f0b468e8200001c)
```js
function getChar(c){
    return String.fromCharCode(c);
}
```
4.  [Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139)
```js
function addBinary(a,b) {
  var suma = a+b;
  return suma.toString(2);
}
```
5.  [Student's Final Grade](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)
```js
function finalGrade (exam, projects) {
  if((exam > 90) || (projects > 10))
    {
      return 100;
    }
  
    if((exam>75) && (projects >= 5))
    {
      return 90;
    } 

    if((exam>50) && (projects >= 2 ))
    {
      return 75;
    } else {
      return 0;
    }
}
```
---
## <mark>Week challenges (Wednesday)</mark>  💻

1.  [Holiday VIII - Duty Free](https://www.codewars.com/kata/57e92e91b63b6cbac20001e5)
```js
function dutyFree(normPrice, discount, hol){
  // Math.floor Devuelve el máximo entero menor o igual a un número

  let numBotella;
  let descAplicado;
  let redondeo;
  numBotella = hol / normPrice;
  descAplicado = numBotella / discount;
  redondeo = Math.floor(descAplicado * 100);
  return redondeo; 
}
```
2.  [Twice as old](https://www.codewars.com/kata/5b853229cfde412a470000d0)
```js
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs((sonYearsOld*2)-dadYearsOld)
}
```
3.  [Valid Spacing](https://www.codewars.com/kata/5f77d62851f6bc0033616bd8)
```js
function validSpacing(s) {
  let cadena = s;
  
  if (cadena.trim() != s)
    {
      return false;
    }
  
  if (s.search('  ') != -1)
    {
      return false;
    }
  
  return true;
}
```
4.  [Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d)
```js
function fakeBin(x){
  var maxLenght = x.length;
  var cadenaBin = '';
  for (var i = 0; i < maxLenght; i++)
    {
      cadenaBin += (x[i] >= 5) ? '1' : '0';
    }
  return cadenaBin;
}
```
---
## <mark>Week challenges (Thursday)</mark>  💻

1.  [Exclamation marks series #2: Remove all exclamation marks from the end of sentence](https://www.codewars.com/kata/57faece99610ced690000165) 
```js 
function remove (string) {
  let res = string;
  while (res[res.length - 1] === "!") 
  {
    res = res.slice(0, -1);
  }
  return res;
}
```
2.  [Vowel remover](https://www.codewars.com/kata/5547929140907378f9000039)
```js
function shortcut (string) {
  return string.replace( /[aeiou]/ig, '' );
}
```
3.  [Rock Paper Scissors!](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)
```js
const rps = (p1, p2) => {
  if (p1 == p2) 
    {
      return "Draw!";
    }
   
  if ((p1 == 'rock' && p2 == 'scissors') ||
      (p1 == 'scissors' && p2 == 'paper') ||
      (p1 == 'paper' && p2 == 'rock'))
    {
      return "Player 1 won!";
    }
  
  
  if ((p2 == 'rock' && p1 == 'scissors') ||
      (p2 == 'scissors' && p1 == 'paper') ||
      (p2 == 'paper' && p1 == 'rock'))
    {
      return "Player 2 won!";
    }
};
```
4.  [Persistent Bugger.](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)
```js
function persistence(num) {
  var nuevoNum = String(num);
  var res;
  var cont=0;
  nuevoNum = nuevoNum.split('');
  
  if (nuevoNum.length == 1)
    {
      return 0;
    }
  
  while (nuevoNum.length > 1)
    {
      res = 1;
      cont++;
      for (var i = 0; i < nuevoNum.length; i++)
        {
          res = res * nuevoNum[i] ;
        }
      nuevoNum = String(res);
      nuevoNum = nuevoNum.split('');
    }
  return cont;
}
```
5.  ✨Complete your 1st  [**Core Challenge**](https://corecode.notion.site/Mission-Statement-666f515d76084c8e8c996b473b4d6317). This is one of the requirements for the certification, where you'll boost your dev professional-brand.
```
Completed! 
```

## [](https://github.com/corecodeio/bootcamp-from-scratch/tree/main/src/technologies/2022/week2#week-links-)Week links  🔗

1. [DataTypes](./Examples/00_datatypes.js)
2. [Variables](./Examples/01_variables.js)
3. [Numbers](./Examples/02_number.js)
4. [TypeOf](./Examples/03_typeof.js)
5. [Booleans](./Examples/04_booleans.js)
6. [String](./Examples/05_string.js)
7. [ArrayIndex](./Examples/06_index.js)
8. [Conditionals](./Examples/07_conditionals.js)
9. [Conditionals](./Examples/08_conditionals.js)
10. [Conditionals](./Examples/09_conditionals.js)
11. [Ternary](./Examples/10_ternary.js)
12. [PopPush](./Examples/11_pop_push.js)
13. [ForWhile](./Examples/12_for_while.js)