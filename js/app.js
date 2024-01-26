function cifrar() {
  /* obtener el balor del text area */
  let textoUsuario = document.getElementById("textoUsuario").value;
  /* cambiar por un numero menor en base a su codigo ascci */
  let cifrado = "";
  for (let i = 0; i < textoUsuario.length; i++) {
    let texto = textoUsuario.charCodeAt(i);
    cifrado += String.fromCharCode(texto - 14);
  }
  /* mostrar como resultado en una etiqueta en html */
  let parrafo = document.getElementById("resultado");
  parrafo.innerHTML = `${cifrado}`;
}

function desifrar() {
  /* obtener el balor del text area */
  let textoUsuario = document.getElementById("textoUsuario").value;
  /* cambiar por un numero menor en base a su codigo ascci */
  let desifrado = "";
  for (let i = 0; i < textoUsuario.length; i++) {
    let texto = textoUsuario.charCodeAt(i);
    desifrado += String.fromCharCode(texto + 14);
  }
  /* mostrar como resultado en una etiqueta en html */
  let parrafo = document.getElementById("resultado");
  parrafo.innerHTML = `${desifrado}`;
}
