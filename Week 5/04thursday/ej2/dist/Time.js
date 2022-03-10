"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    printTime() {
        console.log(`
         ==================
           Hours: ${this.horas}
           Minutes: ${this.minutos}
           Seconds: ${this.segundos}
         ==================
         `);
    }
    getInSeconds() {
        return ((this.horas * 3600) + (this.minutos * 60) + this.segundos);
    }
}
exports.Time = Time;
