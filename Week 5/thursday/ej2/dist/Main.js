"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Time_1 = require("./Time");
class Main {
    start() {
        const t = new Time_1.Time(10, 45, 1);
        t.printTime(); // Example of a reader-friendly format above
        /*
          ==================
            Hours: 10
            Minutes: 45
            Seconds: 1
          ==================
        */
        console.log(t.getInSeconds()); // 38701
    }
}
exports.Main = Main;
