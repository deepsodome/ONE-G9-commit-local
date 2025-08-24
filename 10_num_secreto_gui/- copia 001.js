let numeroSecreto = 0;
let intentoa = 0;
let cadenaP = '';

//alert(numeroSecreto);
//console.log(`número secreto - ${numeroSecreto}`);

/* let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un numero de 1 al 10';
*/

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(`tipo dato ${typeof(numeroSecreto)}`);
    console.log(`número secreto - ${numeroSecreto}`);
    console.log(`tipo dato ${typeof(numeroDeUsuario)}`)
    console.log(`Valor usuario - ${numeroDeUsuario}`);
    console.log(`comparacion es: ${numeroDeUsuario === numeroSecreto}`);*/

    if(numeroSecreto === numeroDeUsuario){
        cadenaP = `Acertaste el número en: ${intentoa} ${intentoa == 1 ?'intento' : 'intentos'}`;
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
        intentoa++;
        limpiarCaja();
    }
    
    return;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
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
    asignarTextoElemento('p','Ingresa un numero de 1 al 10');    
    
    deshabilitaElemento('reiniciar');
    habilitaElemento('botonOk');
    habilitaElemento('valorUsuario');
    intentoa = 1;
    limpiarCaja();
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
