"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
class Rational {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    printRational() {
        console.log(`${this.numerator} / ${this.denominator}`);
    }
    invert() {
        let num;
        num = this.numerator;
        this.numerator = this.denominator;
        this.denominator = num;
    }
    toFloat() {
        return this.numerator / this.denominator;
    }
    reduce() {
        let temporal = 0;
        let numerator = this.numerator;
        let denominator = this.denominator;
        while (denominator !== 0) {
            temporal = denominator;
            denominator = numerator % denominator;
            numerator = temporal;
        }
        this.numerator = this.numerator / temporal;
        this.denominator = this.denominator / temporal;
    }
}
exports.Rational = Rational;
