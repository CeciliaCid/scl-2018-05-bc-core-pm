function encode(){
    let mensajeEnviado = document.getElementById("textoACifrar").value;
    let offset = parseInt(document.getElementById("keyOffset").value);
    const resultado = window.cipher.encode(mensajeEnviado, offset);
    document.getElementById("textoCifrado").innerHTML = resultado;
}
function decode(){
    let mensajeADescifrar = document.getElementById("textoADescifrar").value;
    let offset = parseInt(document.getElementById("keyOffset").value);
    const resultado = window.cipher.decode(mensajeADescifrar, offset);
    document.getElementById("textoDescifrado").innerHTML = resultado;
}

