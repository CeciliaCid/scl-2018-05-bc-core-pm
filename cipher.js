window.cipher = {
  encode: (mensajeEnviado, offset) => {
    /* Acá va tu código */
    let mensajeCifrado = ""; //Variable de mensaje ya cifrado.
    
    for (let i = 0; i < mensajeEnviado.length; i++){ //mi bucle para transformar cada letra
      let mensajeMayus = mensajeEnviado.toUpperCase(); //mi mensaje enviado pasa a ser mayuscula
      if (mensajeMayus.charCodeAt(i) >= 65 && mensajeMayus.charCodeAt(i) <= 90){ //rango del abc
        const formula = (mensajeMayus.charCodeAt(i)- 65 + offset)%26 + 65; 
        const cifrar = String.fromCharCode(formula); //traduce mi formula (numero ascii) a letra 
        mensajeCifrado+=cifrar;
      }else{ //Solo si mi string no esta dentro de mi abc
        mensajeCifrado += String.fromCharCode(mensajeMayus.charCodeAt(i));
      }
      
    }
   console.log(mensajeCifrado);
return mensajeCifrado
  },
  decode: (mensajeADescifrar, offset) => {
    /* Acá va tu código */
    let mensajeDescifrado = "";

    for(let i = 0; i< mensajeADescifrar.length; i++){
      let mensajeMayusC = mensajeADescifrar.toUpperCase();
      if(mensajeMayusC.charCodeAt(i) >= 65 && mensajeMayusC.charCodeAt(i) <= 90){
        const formula = (mensajeMayusC.charCodeAt(i)+ 65 - offset)%26 + 65;
        const descifrar = String.fromCharCode(formula);
        mensajeDescifrado+=descifrar;
      }else{
        mensajeDescifrado +=String.fromCharCode(mensajeMayusC.charCodeAt(i));
      }
    }
    console.log(mensajeDescifrado);
return mensajeDescifrado
  }
}