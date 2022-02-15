import { isTemplateExpression } from "typescript";

export class Rational {
   numerator : number;
   denominator : number;

   constructor(numerator : number, denominator : number){
      this.numerator = numerator;
      this.denominator = denominator;
   }

   printRational() {
      console.log(`${this.numerator} / ${this.denominator}`);
   }

   invert() {
      let num : number;
      num = this.numerator;
      this.numerator = this.denominator;
      this.denominator = num;
   }

   toFloat() : number {
      return this.numerator / this.denominator;
   }

   reduce() {
      let temporal : number = 0; 
      let numerator : number = this.numerator;
      let denominator: number = this.denominator;
      while (denominator !== 0) {
         temporal = denominator;
         denominator = numerator % denominator;
         numerator = temporal;
      }
      this.numerator = this.numerator/temporal;
      this.denominator = this.denominator/temporal;
   }
   
}