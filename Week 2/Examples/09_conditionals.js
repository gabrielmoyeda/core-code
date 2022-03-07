// 0 --> 23
let hora = 24;

// if(hora < 12) {
//   console.log('buenos dias');
// } else {
//   if(hora < 19) {
//     console.log('buenas tardes');
//   } else {
//     if(hora <= 23) {
//       console.log('buenas noches');
//     } else {
//       console.log('no es un horario valido');
//     }
//   }
// }

if (hora < 12) {
  console.log('buenos dias');
} else if (hora < 19) {
  console.log('buenas tardes');
} else if (hora <= 23) {
  console.log('buenas noches');
} else {
  console.log('no es un horario valido!');
}
