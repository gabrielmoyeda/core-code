export class Tile {
   letter: string;
   value: number;
   constructor (letter: string, value: number) {
      this.letter = letter;
      this.value = value;
   }

   printTile ()
   {
      console.log("==================");
      console.log(`  Letter: ${this.letter}`);
      console.log(`  Value: ${this.value}`);
      console.log("==================");
   }
  }