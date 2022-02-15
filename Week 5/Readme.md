<h1 align="center">Typescript - Week 5 (07 - 11 Feb)</h1>

## Week challenges (Monday) 💻

1. Read [this](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) from `The primitives: string, number and boolean` to `Differences Between Type Aliases and Interfaces` section
2. [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript) Using `Typescript`
```ts
export function squareSum(numbers: number[]): number {
  let miNumero : number;
   miNumero = numbers.reduce((a, num) => a + Math.pow(num,2), 0);
  return miNumero;
}
```
3. [Growth of a Population](https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript) Using `Typescript`
```ts
export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
      let porcentajePopulacion : number = p0 * (percent/100);
      let popTot : number = p0 + (porcentajePopulacion) + aug;
      var numAnios :number = 1;
      while (popTot < p)
        {
          porcentajePopulacion = popTot * (percent/100);
          popTot = popTot + porcentajePopulacion + aug;
          numAnios++;
        }
      return numAnios;
    }
}
```
4. [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript) Using `Typescript`
```ts
export function accum(s: string): string {
  let miCad : string[] = s.toLowerCase().split("");
  let cadenaParte : string = "";
  let res : string = "";
  for (let i : number = 0; i < s.length; i++)
    {
      let cadena : string = "";
      for (let j : number = 0; j < i+1; j++)
        {
          cadena += miCad[i];
        }
      cadenaParte = cadena[i].charAt(0).toUpperCase() + cadena.slice(1) + "-";
      res += cadenaParte;
    }
  res = res.substring(0, res.length - 1);
  return res;
}
```
5. [A wolf in sheep's clothing](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript) Using `Typescript`
```ts
export function warnTheSheep(queue: string[]): string {
  const posLobo : number = queue.indexOf("wolf");
  if (posLobo != queue.length - 1) {
    return `Oi! Sheep number ${
      queue.length - 1 - posLobo
    }! You are about to be eaten by a wolf!`;
  }
  return "Pls go away and stop eating my sheep";
}
```

## Week challenges (Tuesday) 💻

1. [A Rule of Divisibility by 13](https://www.codewars.com/kata/564057bc348c7200bd0000ff) Using `Typescript`
2. [Playing with digits](https://www.codewars.com/kata/5552101f47fc5178b1000050) Using `Typescript`
3. [Valid Braces](https://www.codewars.com/kata/5277c8a221e209d3f6000b56) Using `Typescript`
4. [Tic-Tac-Toe](https://www.codewars.com/kata/5216a87cbf53a9c30f0000dc) Using `Typescript`
5. [Tic-Tac-Toe-like table Generator](https://www.codewars.com/kata/5b817c2a0ce070ace8002be0) Using `Typescript`

## Week challenges (Wednesday) 💻
1. [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript) Using `Typescript`
```ts
export function duplicateEncode(word: string){
  let letras : string[] = word.toLowerCase().split('');
  let res : string = '';
  
  let procesa = letras.map((valor, indice) => {
    return (letras.lastIndexOf(letras[indice]) === letras.indexOf(letras[indice])) ? res += '(' : res += ')';
  });
  return res;
}
```
2. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript) Using `Typescript`
3. [Which are in?](https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript) Using `Typescript`
4. [Sums of Parts](https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript) Using `Typescript`
5. [Consecutive strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e) Using `Typescript`

## Week challenges (Thursday) 💻
1. [Tile](./Exercices/E0/desc/ED0W5.md) Using `Typescript`
[Solución]()
2. [Time](./Exercices/E1/desc/ED1W5.md) Using `Typescript`
[Solución]()
3. [Rational](./Exercices/E2/desc/ED2W5.md) Using `Typescript`
[Solución]()
4. [Movies](./Exercices/E3/desc/ED3W5.md) Using `Typescript`
[Solución]()
