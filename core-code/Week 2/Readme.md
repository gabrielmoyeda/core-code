# Week 2 - 17 a 21 Enero 2022
## Week challenges (Monday)  💻

1.  Follow the github course, you can find it  [here](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/recommended)
2.  Watch  [this](https://www.youtube.com/watch?v=A37-3lflh8I)  video
3.  Read  [this](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
4.  Create an account in  [Codewars](https://www.codewars.com/dashboard)
![codewars logo](../img/imagen.jpg) https://www.codewars.com/users/gabrielmoyeda

## [](https://github.com/corecodeio/bootcamp-from-scratch/tree/main/src/technologies/2022/week2#week-challenges-tuesday-)Week challenges (Tuesday)  💻

0.  Watch  [this](https://www.youtube.com/watch?v=cEBkvm0-rg0)  video
1.  [https://www.codewars.com/kata/50654ddff44f800200000004](https://www.codewars.com/kata/50654ddff44f800200000004)
```
function multiply(a, b){
  return a * b;
}
```

2.  [https://www.codewars.com/kata/572b6b2772a38bc1e700007a](https://www.codewars.com/kata/572b6b2772a38bc1e700007a)
```
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
3.  [https://www.codewars.com/kata/55ad04714f0b468e8200001c](https://www.codewars.com/kata/55ad04714f0b468e8200001c)
```
function getChar(c){
    return String.fromCharCode(c);
}
```
4.  [https://www.codewars.com/kata/551f37452ff852b7bd000139](https://www.codewars.com/kata/551f37452ff852b7bd000139)
```
function addBinary(a,b) {
  var suma = a+b;
  return suma.toString(2);
}
```
5.  [https://www.codewars.com/kata/5ad0d8356165e63c140014d4](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)
```
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

## [](https://github.com/corecodeio/bootcamp-from-scratch/tree/main/src/technologies/2022/week2#week-challenges-wednesday-)Week challenges (Wednesday)  💻

1.  [https://www.codewars.com/kata/57e92e91b63b6cbac20001e5](https://www.codewars.com/kata/57e92e91b63b6cbac20001e5)
```
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
2.  [https://www.codewars.com/kata/5b853229cfde412a470000d0](https://www.codewars.com/kata/5b853229cfde412a470000d0)
```
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs((sonYearsOld*2)-dadYearsOld)
}
```
3.  [https://www.codewars.com/kata/5f77d62851f6bc0033616bd8](https://www.codewars.com/kata/5f77d62851f6bc0033616bd8)
```
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
4.  [https://www.codewars.com/kata/57eae65a4321032ce000002d](https://www.codewars.com/kata/57eae65a4321032ce000002d)
```
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

## [](https://github.com/corecodeio/bootcamp-from-scratch/tree/main/src/technologies/2022/week2#week-challenges-thursday-)Week challenges (Thursday)  💻

1.  [https://www.codewars.com/kata/57faece99610ced690000165](https://www.codewars.com/kata/57faece99610ced690000165)
```
function remove (string) {
  let res = string;
  while (res[res.length - 1] === "!") 
  {
    res = res.slice(0, -1);
  }
  return res;
}
```
2.  [https://www.codewars.com/kata/5547929140907378f9000039](https://www.codewars.com/kata/5547929140907378f9000039)
```
function shortcut (string) {
  return string.replace( /[aeiou]/ig, '' );
}
```
3.  [https://www.codewars.com/kata/5672a98bdbdd995fad00000f](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)
```
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
4.  [https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)
```
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
```

## [](https://github.com/corecodeio/bootcamp-from-scratch/tree/main/src/technologies/2022/week2#week-links-)Week links  🔗

1.  [DataTypes](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week2/Examples/00_datatypes.js)
2.  [Variables](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week2/Examples/01_variables.js)
3.  [Numbers](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week2/Examples/02_number.js)
4.  [TypeOf](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week2/Examples/03_typeof.js)
5.  [Booleans](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week2/Examples/04_booleans.js)
6.  [String](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week2/Examples/05_string.js)
7.  [ArrayIndex](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week2/Examples/06_index.js)
