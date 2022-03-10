export class Time {
   horas: number;
   minutos : number;
   segundos : number;

   constructor(horas : number, minutos : number, segundos : number) {
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

   getInSeconds() : number {
      return ((this.horas * 3600) + (this.minutos * 60) + this.segundos);
   }
}

