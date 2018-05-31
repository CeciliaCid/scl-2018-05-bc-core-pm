window.cipher = {
  encode: (mensajeEnviado, offset) => {
    /* Acá va tu código */
    let mensajeCifrado = "";
    
    for (let i = 0; i < mensajeEnviado.length; i++){
      const formula = (mensajeEnviado.toUpperCase().charCodeAt(i)- 65 + offset)%26 + 65;
      const cifrar = String.fromCharCode(formula);
      mensajeCifrado+=cifrar;
    }
   console.log(mensajeCifrado);
return mensajeCifrado
  },
  decode: (mensajeADescifrar, offset) => {
    /* Acá va tu código */
    let mensajeDescifrado = "";

    for(let i = 0; i< mensajeADescifrar.length; i++){
      const formula = (mensajeADescifrar.toUpperCase().charCodeAt(i)+ 65 - offset)%26 + 65;
      const descifrar = String.fromCharCode(formula);
      mensajeDescifrado+=descifrar;
    }
    console.log(mensajeDescifrado);
return mensajeDescifrado
  }
}