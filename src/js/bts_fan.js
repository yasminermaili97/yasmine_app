 let correctas =["2013","Army", "Jungkook", "Bangtan Sonyeondan", "Billboard Music Award - Top Social Artist", "I NEED U", "Morado", "Jungkook", "New York", "2017"];

 let puntaje = 0;

 function comprobar(){
  let respuestas = document.querySelectorAll('input[type="radio"]:checked');
  console.log(respuestas);
  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i].value == correctas[i]) {
      puntaje++;
    }
  }
  document.querySelector("#score").textContent = puntaje;
 }

document.querySelector("#boton").addEventListener("click",()=> {
  comprobar();
  mostrarComentario();
  limpiar();
});

function limpiar() {
  let respuestas = document.querySelectorAll('input[type="radio"]:checked');
  for (let i = 0; i < respuestas.length; i++) {
    respuestas[i].checked = false;
  }
}



function mostrarComentario() {
  let comentario = document.querySelector("#comentario");
  if (puntaje <= 8 && puntaje >= 6) {
    comentario.textContent = " Excelente! Estas muy cerca de ser un BTS Fan!";

  } else  if ( puntaje == 10) {
    comentario.textContent = "Army de BTS! Has ganado el juego!";
  }
  else {
    comentario.textContent = "Lo siento, pero no has ganado el juego.";
  }
}
