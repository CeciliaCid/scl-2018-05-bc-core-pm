function encode(){
    let mensajeEnviado = document.getElementById("textoACifrar").value; // tomo el mensaje enviado hacia el js como id
    let offset = parseInt(document.getElementById("keyOffset").value); // mi offset siempre tiene que estar transformado en numero para que funcione la formula
    const resultado = window.cipher.encode(mensajeEnviado, offset); // linkeo de la funcion en el otro documento js
    document.getElementById("textoCifrado").innerHTML = resultado;
}
function decode(){
    let mensajeADescifrar = document.getElementById("textoADescifrar").value;
    let offset = parseInt(document.getElementById("keyOffset").value); 
    const resultado = window.cipher.decode(mensajeADescifrar, offset);
    document.getElementById("textoDescifrado").innerHTML = resultado;
}

