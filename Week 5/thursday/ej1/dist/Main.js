"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Tile_1 = require("./Tile");
class Main {
    start() {
        const A = new Tile_1.Tile('A', 10);
        A.printTile(); // Example of a reader-friendly format above
        /*
          ==================
            Letter: A
            Value: 10
          ==================
        */
        const W = new Tile_1.Tile('W', '50'); // This should show and error
        W.printTile();
    }
}
exports.Main = Main;
