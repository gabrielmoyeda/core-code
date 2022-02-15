"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
class Tile {
    constructor(letter, value) {
        this.letter = letter;
        this.value = value;
    }
    printTile() {
        console.log("==================");
        console.log(`  Letter: ${this.letter}`);
        console.log(`  Value: ${this.value}`);
        console.log("==================");
    }
}
exports.Tile = Tile;
