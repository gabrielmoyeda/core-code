// if(<condicion>) {
//    <si_condicion_verdadero>
// } else {
//      <si_condicion_falso>
// }

/*
  
  // cualquier otro color: No es un color valido

  1. Rojo
  2. Azul
  3. Verde
*/

let color = 1;

if (color == 1) {
  console.log('Rojo');
}

if (color == 2) {
  console.log('Azul');
}

if (color == 3) {
  console.log('Verde');
}

if (color > 3 || color <= 0) {
  console.log('No es un color valido');
}
