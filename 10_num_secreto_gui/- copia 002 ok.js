let numeroSecreto = 0;
let intentos = 0;
let cadenaP = '';

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);    
    if(numeroSecreto === numeroDeUsuario){
        cadenaP = `¡Acertaste!<br>Lo conseguiste en: ${intentos} ${intentos == 1 ?'intento' : 'intentos'}`;
        //cambia texto en p
        asignarTextoElemento('p',cadenaP);
        
        //habilitar boton reinicio
        habilitaElemento('reiniciar');

        //deshabilitar boton intentar   
        deshabilitaElemento('botonOk');

        //deshabilitar caja texto
        deshabilitaElemento('valorUsuario');

        cambiaColorTexto('p', 'orange');


    } else {
        if (numeroSecreto < numeroDeUsuario){
            asignarTextoElemento('p', 'El número secreto es menor!');
            cambiaColorTexto('p', 'magenta');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor!');
            cambiaColorTexto('p', 'coral');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    return elementoHTML.innerHTML = texto;
}

function cambiaColorTexto(elemento, color) {
    let mensajeAyuda = document.querySelector(elemento).style.color = color;
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    document.getElementById("valorUsuario").focus();
    return;
} 

function generaNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function habilitaElemento(elemento){
    return document.getElementById(elemento).removeAttribute('disabled');
}

function deshabilitaElemento(elemento){
    return document.getElementById(elemento).disabled = true;
}

function valoresIniciales(){
    numeroSecreto = generaNumeroSecreto();
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Ingresa un numero entre 1 y 10');    
    deshabilitaElemento('reiniciar');   
    habilitaElemento('botonOk');
    habilitaElemento('valorUsuario');
    intentos = 1;
    limpiarCaja();
    cambiaColorTexto('p', 'white');
    console.log(`número secreto - ${numeroSecreto}`);
    return;
}

function reiniciarJuego(){
    //limpiar caja
    //titulo 1 y 2
    //num aleatorio
    //deshabilita boton reset
    //inicializar numero juegos
    valoresIniciales();
    return;
}


valoresIniciales();
