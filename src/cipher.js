window.cipher = {
  encode: () => {
    /* Acá va tu código */
    let mensajeEnviado = document.getElementById("textoACifrar").value;
    let offset = document.getElementById("keyOffset").value;
    let mensajeCifrado = "";
    
    for (let i = 0; i < mensajeEnviado.length; i++){
      const formula = (mensajeEnviado.toUpperCase().charCodeAt(i)-65+offset)%26+65;
      const cifrar = String.fromCharCode(formula);
      mensajeCifrado+=cifrar;
    }
   console.log(mensajeCifrado);
   const resultado = document.getElementById("textoCifrado").innerHTML = mensajeCifrado;

  },
  decode: () => {
    /* Acá va tu código */
    let mensajeCifrado
  }
}