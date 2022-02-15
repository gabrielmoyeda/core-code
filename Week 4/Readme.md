<h1 align="center">npm,npx & Typescript - Week 4 (31 Ene - 4 Feb)</h1>

## Week challenges (Wednesday) 💻
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

## Week challenges (Thursday) 💻

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
