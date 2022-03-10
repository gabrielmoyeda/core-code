"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Rational_1 = require("./Rational");
class Main {
    start() {
        const r1 = new Rational_1.Rational(36, 120);
        r1.printRational(); // 36 / 120
        console.log(r1.toFloat()); // 0.3
        r1.reduce();
        r1.printRational(); // 3 / 10
        r1.invert();
        r1.printRational(); // 10 / 3
        r1.reduce();
        r1.printRational(); // 10 / 3
    }
}
exports.Main = Main;
