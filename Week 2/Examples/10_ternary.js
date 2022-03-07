let color = 2;
let mensaje = '';

if (color == 1) {
  mensaje = 'Es un color rojo';
} else {
  mensaje = 'No es un color valido';
}
console.log(mensaje);

// .......

// operador ternario:

// <condicion> ? <cuando_es_verdadero> : <cuando_es_falso>;

mensaje =
  color == 1
    ? color > 0
      ? 'Si es mayor a cero'
      : 'no es mayor a cero'
    : 'No es un color valido';
console.log(mensaje);
