let numeroSecreto = 0;
let intentos = 0;
let cadenaP = '';
let listaNumeros = [];
let maximoJugadas = 10;

//comprueba el número capturado 
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

        //cambia color texto p
        cambiaColorTexto('p', 'orange');
    } else {
        if (numeroSecreto < numeroDeUsuario){
            asignarTextoElemento('p', '¡El número secreto es menor!');
            cambiaColorTexto('p', 'magenta');
        } else {
            asignarTextoElemento('p', '¡El número secreto es mayor!');
            cambiaColorTexto('p', 'coral');
        }
        intentos++;
        limpiarCaja();
    }    
    return;
}

//Cambia el texto de un elemento
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    return elementoHTML.innerHTML = texto;
}

//cambia el color de texto de un elemento
function cambiaColorTexto(elemento, color) {
    document.querySelector(elemento).style.color = color;
    return;
}

//borra datos del input
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    document.getElementById("valorUsuario").focus();
    return;
} 

//genera número secreto y valida maximo de intentos
function generaNumeroSecreto() {
    let numGenerados = Math.floor(Math.random()*maximoJugadas)+1;

    console.log(numGenerados);
    console.log(listaNumeros);

    if(listaNumeros.length >= maximoJugadas){
        asignarTextoElemento('p','¡AVISO!<br> Se han usado todos los número posibles.');
        cambiaColorTexto('p', 'coral');
        deshabilitaElemento('botonOk');
        deshabilitaElemento('reiniciar');
    } else{
        if(listaNumeros.includes(numGenerados)){
            return generaNumeroSecreto();
        } else {
            listaNumeros.push(numGenerados);
            return numGenerados;
        }
    }
    return;
}

//habilita elementod DOM
function habilitaElemento(elemento){
    return document.getElementById(elemento).removeAttribute('disabled');
}

//deshabilita elementod DOM
function deshabilitaElemento(elemento){
    return document.getElementById(elemento).disabled = true;
}

//asigna valores de inicio a cariables y elementos DOM
function valoresIniciales(){    
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Ingresa un numero entre 1 y ${maximoJugadas}`);    
    deshabilitaElemento('reiniciar');   
    habilitaElemento('botonOk');
    habilitaElemento('valorUsuario');
    intentos = 1;
    limpiarCaja();
    cambiaColorTexto('p', 'white');
    numeroSecreto = generaNumeroSecreto();
    console.log(`número secreto - ${numeroSecreto}`);
    return;
}

//reinicia APP
function reiniciarJuego(){    
    valoresIniciales();
    return;
}

//llama función para valores iniciales
valoresIniciales();
