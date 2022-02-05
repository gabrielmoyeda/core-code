# Week 3 - 24 - 28 Ene 2022
## Week challenges (Monday)  💻

Week challenges (Monday) 💻
https://www.codewars.com/kata/5266876b8f4bf2da9b000362
```
function likes(names) {
  
  switch(names.length)
    {
    case 0:  return 'no one likes this';
    break;
    case 1: return names[0] + ' likes this';
    break;
    case 2: return names[0] + ' and ' + names[1] + ' like this';
    break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    break;
    default:
        return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';        
    }
}
```
https://www.codewars.com/kata/526571aae218b8ee490006f4
```
var countBits = function(n) {
  res = n.toString(2).match(/1/g);
  return (res) ? res.length : 0;
};
```
https://www.codewars.com/kata/54b724efac3d5402db00065e
```
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


Week challenges (Tuesday) 💻
https://www.codewars.com/kata/55c45be3b2079eccff00010f
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
https://www.codewars.com/kata/520b9d2ad5c005041100000f

Week challenges (Wednesday) 💻
https://www.codewars.com/kata/52774a314c2333f0a7000688
https://www.codewars.com/kata/517abf86da9663f1d2000003
https://www.codewars.com/kata/54e6533c92449cc251001667

Week challenges (Thursday) 💻
https://www.codewars.com/kata/57ea70aa5500adfe8a000110
https://www.codewars.com/kata/5848565e273af816fb000449
https://www.codewars.com/kata/53368a47e38700bd8300030d
✨Complete your 2nd Core Challenge. This is one of the requirements for the certification, where you'll boost your dev professional-brand.