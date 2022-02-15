<h1 align="center">Javascript - Week 3 (24 - 28 Ene)</h1>

## Week challenges (Monday) 💻

1. https://www.codewars.com/kata/5266876b8f4bf2da9b000362
```js
function likes(names) {
  switch(names.length){
  case 0:
    return "no one likes this"
    break
  case 1:
    return names[0]+" likes this"
    break
  case 2:
    return names[0]+" and "+names[1]+" like this"
    break
  case 3:
    return names[0]+", "+names[1]+" and "+names[2]+" like this"
    break
  default:
    return names[0]+", "+names[1]+" and "+(names.length - 2)+" others like this"
  }
}
```
2. https://www.codewars.com/kata/526571aae218b8ee490006f4
```js
var countBits = function(n) {
  res = n.toString(2).match(/1/g);
  return (res) ? res.length : 0;
};
```
3. https://www.codewars.com/kata/54b724efac3d5402db00065e
```js
decodeMorse = function(morseCode){
  return morseCode
             .split("   ") 
             .map(palabra => palabra
                           .split(" ") 
                           .map(caracter => MORSE_CODE[caracter]) 
                           .join('')
              )
              .join(' ')
              .trim()
}
```

## Week challenges (Tuesday) 💻

1. https://www.codewars.com/kata/55c45be3b2079eccff00010f
```js
function order(words){
  // Divide la Cadena y le aplica un Sort
  // Sort recibe una función que hace la comparación
  return words.split(' ').sort(function(a,b){
                return a.match(/\d/) - b.match(/\d/);
              }).join(' ');
  
}
```
2. https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
```js
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
```
3. https://www.codewars.com/kata/520b9d2ad5c005041100000f
```js
function pigIt(str){
  let arrRes = [];
  let arrCadena = str.split(" ");
  
  arrCadena.forEach(i => {
    let arrPalabra = i.split("");
    arrPalabra.push(arrPalabra[0], "ay"), arrPalabra.shift()
    if (i === "." || i === "?" || i === "!")
      {
        arrRes.push(i);
      }
    else
      {
        arrRes.push(arrPalabra.join(""));
      }
  })
  return arrRes.join(" ");
}
```

## Week challenges (Wednesday) 💻

1. https://www.codewars.com/kata/52774a314c2333f0a7000688
```js
function validParentheses(parens) {

   let cad = parens.split("");
   let contador = 0;

   if (cad.length==1 || cad[0] == ")")  return false;
  
   if (cad.length> 1)
      {
         for (let i = 0; i< cad.length; i++)  
            {
               if (cad[i] == "(")
                  {
                     contador++;
                  } else if (cad[i] == ")") 
                     {
                        contador--;
                        if (contador < 0) 
                           {
                              return false;
                           }
                     }
            }
      }

   return contador == 0;
}
```
2. https://www.codewars.com/kata/517abf86da9663f1d2000003
```js
function toCamelCase(str){
  return str.replace(/[-_\s.]+(.)?/g, function(match, chr)
       {
            return chr.toUpperCase();
        });
}
```
3. https://www.codewars.com/kata/54e6533c92449cc251001667
```js
var uniqueInOrder=function(iterable){
  let res = [];
  
  for (let i = 0; i<= iterable.length; i++)
    {
      if (iterable[i] !== iterable[i+1])
        {
          res.push(iterable[i]);
        }
    }
  return res;
}
```

## Week challenges (Thursday) 💻

1. https://www.codewars.com/kata/57ea70aa5500adfe8a000110
```js
function foldArray(array, runs)
{
  if (runs < 1) return array;
  
  const folded = [...array];
  let runsCopy = runs;
  
  while (runsCopy > 0)
    {
      folded.map((num, numIndex, NumArr) => {
        numIndex + 1 === NumArr.length
        ? num
        : NumArr[numIndex] = num + NumArr.pop();
      })
    runsCopy--;
    }
  return folded;
}
```
2. https://www.codewars.com/kata/5848565e273af816fb000449
```js
var encryptThis = function(text) {
  let strArr = text.split(' ');
  let res = [];
  
  strArr.forEach(str => {
    if (str.length === 1) {
      res.push(str.charCodeAt(0));
    } 
    else {
      let tempStr = str.split('');
      tempStr[0] = str.charCodeAt(0);
      tempStr[1] = str[str.length - 1];
      tempStr[str.length - 1] = str[1];
      res.push(tempStr.join(''));
    }
  });
  
  return res.join(' ');
}
```
3. https://www.codewars.com/kata/53368a47e38700bd8300030d
```js
function list(names){
  // Se usa el método reduce, donde se pasa como parámetro inicial el valor vacio ''
  // De acuerdo con la documentación reduce hace una iteración sobre los elementos del arreglo
  // por lo tanto verifica si el índice ya llego al ultimo valor, de ser verdadero, agrega ampersand
  // caso contrario, regresa coma espacio ', '
  return names.reduce(function(prev, current, index, array){
    if (index === 0)
    {
      // si solo tiene un valor regresa
      return current.name;
    }
    else
    {
      return (index === array.length - 1) ? prev + ' & ' + current.name : prev + ', ' + current.name;
    }
  }, '');
 }
```
4. ✨Complete your 2nd [**Core Challenge**](https://corecode.notion.site/LinkedIn-Boost-5974abb0f917458ea235d3288ac6c7d3). This is one of the requirements for the certification, where you'll boost your dev professional-brand.
