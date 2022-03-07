function cambiaColorFondo(){
   var pantalla = document.getElementById("miBody");
   pantalla.style.backgroundColor = ColorRandomHex();
}

function ColorRandomHex() {
   var letters = '0123456789ABCDEF'.split('');
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
   }
   return color;
}