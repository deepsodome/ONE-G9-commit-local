// inician preguntas
let inputDato = "";
let numero = 0;
let puntuacion = 0;
let saldoCuenta = 0;

function iniciar(){
    document.getElementById("contenedor__scroll").style.display = "block"

    deshabilitaElemento('inicio');
    
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', 'etiqueta', 'pCSS', '¡Bienvenido a la App!\n');    
    creaElementoP('contenedor__scroll', 'textoMensaje', 'pCSS', 'Completa todos los campos y pulsa el boton "Enviar"');

    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', 'etiqueta', 'pCSS', '¿Qué día de la semana es hoy?');
    // crea input 1 <input> - (nombreContenedor, tipoDatos, identificador, claseCSS, textoEjemploCampo, requerido, longitudMaxima)
    creaElementoInput('contenedor__scroll', 'text', 'dia_semana', 'input__CSS', 'Escribe día de la semana', false, 10);    
    //crea boton aceptar <button> - (nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton)
    creaBoton('contenedor__scroll', 'botonDia', 'clase__boton', 'Enviar', 'dia_semana');
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', '', '', '\n');
    document.getElementById('dia_semana').focus();

}

function numeroPositivoNegativo(){
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', '', '', '__________');
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', 'etiqueta', 'pCSS', 'Escribe un número que sea positivo o negativo\n');
    // crea input 1 <input> - (nombreContenedor, tipoDatos, identificador, claseCSS, textoEjemploCampo, requerido, longitudMaxima)
    creaElementoInput('contenedor__scroll', 'number', 'input__numero', 'input__CSS', 'Número +-', false, 2);    
    //crea boton aceptar <button> - (nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton)
    creaBoton('contenedor__scroll', 'botonNumero', 'clase__boton', 'Enviar', 'input__numero');
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', '', '', '\n');
    document.getElementById('input__numero').focus();

}
function puntos(){
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', '', '', 'Pulsa la tecla F12 para ver la consola');
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', '', '', `* Tu saldo es de ${saldoCuenta} *`);
    console.log(`Tu saldo es de ${saldoCuenta}.`);

    //crea boton continuar <button> - (nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton)
    creaBoton('contenedor__scroll', 'boton_continuar', 'clase__boton', 'Continuar', 'boton_continuar', '');
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', '', '', '\n');
}

function nombreUsuario(){
    creaElementoP('contenedor__scroll', '', '', '__________');
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', 'nombre__Usuario', 'pCSS', 'Ingresa tu nombre\n');
    // crea input 1 <input> - (nombreContenedor, tipoDatos, identificador, claseCSS, textoEjemploCampo, requerido, longitudMaxima)
    creaElementoInput('contenedor__scroll', 'text', 'inputNombreUsuario', 'input__CSS', 'Tu nombre', false, 10);    
    //crea boton aceptar <button> - (nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton)
    creaBoton('contenedor__scroll', 'botonNombre', 'clase__boton', 'Enviar', 'inputNombreUsuario');
    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('contenedor__scroll', '', '', '\n');
    asignaFoco('inputNombreUsuario');
}

//función deshabilita elemento
function deshabilitaElemento(elemento){
    document.getElementById(elemento).disabled = true;
}

//función crea elemento p en html
function creaElementoP(nombreContenedor, identificador, claseCSS, texto){
    const contenedorScroll = document.getElementById(nombreContenedor);
    contenedorScroll.appendChild(Object.assign(document.createElement('p'), {
        id: identificador,
        className: claseCSS,
        textContent: texto
    }));
    contenedorScroll.scrollTo({ top: contenedorScroll.scrollHeight, behavior: 'smooth' });
    contenedorScroll.scrollTo({ top: contenedorScroll.scrollHeight });
    return;
}

//función crea elemento input en página en html
function creaElementoInput(nombreContenedor, tipoDatos, identificador, claseCSS, textoEjemploCampo, requerido, longitudMaxima){
    const contenedorScroll = document.getElementById(nombreContenedor);
    contenedorScroll.appendChild(Object.assign(document.createElement('input'), {
        type: tipoDatos,
        id: identificador,
        className: claseCSS,
        placeholder: textoEjemploCampo,
        required: requerido,
        maxlength: longitudMaxima
    }));
    contenedorScroll.scrollTo({ top: contenedorScroll.scrollHeight, behavior: 'smooth' });
    return;
}

//función crea botón
function creaBoton(nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton){
    document.getElementById(nombreContenedor).appendChild(Object.assign(document.createElement('button'), {
        id: identificador,
        className: claseCSS,
        textContent: textoBoton,
        onclick: () => botonAcepta(funcionBoton)
    }));
    return;
}

function botonAcepta(variablePregunta){
    inputDato = document.getElementById(variablePregunta).value.toLowerCase();
    if (inputDato != '' && inputDato.trim() != '') {    
        if (variablePregunta == 'dia_semana') {            
            if (inputDato === 'sábado' || inputDato === 'sabado' || inputDato === 'domingo') {
                //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
                creaElementoP('contenedor__scroll', '', 'pCSS', `- ${inputDato} - Es un día en fin de semana!`);
                limpiarInput('dia_semana');
                deshabilitaElemento('dia_semana');
                deshabilitaElemento('botonDia');
                asignaFoco('dia_semana');
                numeroPositivoNegativo();
                return;
            } else {
                if (inputDato === 'lunes' || inputDato === 'martes' || inputDato === 'miércoles' || inputDato === 'miercoles' || inputDato === 'jueves' || inputDato === 'viernes') {
                    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
                    creaElementoP('contenedor__scroll', '', 'pCSS', `- ${inputDato} - ¡NO es un día en fin de semana!`);
                    limpiarInput('dia_semana');
                    deshabilitaElemento('dia_semana');
                    deshabilitaElemento('botonDia');
                    asignaFoco('dia_semana');
                    numeroPositivoNegativo();
                    return;
                }else{
                    creaElementoP('contenedor__scroll', '', 'pCSS', `- ${inputDato} - ¡NO es un día de la semana valido!\n  Intenta de nuevo..`);
                    limpiarInput('dia_semana');
                    asignaFoco('dia_semana');
                    return;
                }                 
            }
        }
        if (variablePregunta == 'input__numero') {            
            if (inputDato > 0) {       // compara si es mayor a cero
                //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
                puntuacion = 150;
                creaElementoP('contenedor__scroll', 'positivo', 'pCSS', `- ¡El número es positivo! - Ganaste ${puntuacion} puntos.\n`);
                console.log(`¡El número es positivo! - Ganaste ${puntuacion} puntos`);
                saldoCuenta = puntuacion * 3;
                deshabilitaElemento('input__numero');
                deshabilitaElemento('botonNumero');
                puntos();
            } else if (inputDato < 0) {  
                //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
                puntuacion = 100;
                creaElementoP('contenedor__scroll', 'negativo', 'pCSS', `- ¡El número es negativo! - Ganaste ${puntuacion} 
                puntos.\n`);
                saldoCuenta = puntuacion * 2;
                console.log(`¡El número es negativo! - Ganaste ${puntuacion} puntos`);
                deshabilitaElemento('input__numero');
                deshabilitaElemento('botonNumero');
                puntos();
                return;
            } else {
                 puntuacion = 0;
                //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)               
                creaElementoP('contenedor__scroll', 'cero', 'pCSS', `- ¡El número es >CERO< ! - No ganaste nigún punto.\n`);
                console.log(`¡El número es >CERO< ! - No ganaste nigún punto`);
                saldoCuenta = puntuacion * 1;
                deshabilitaElemento('input__numero');
                deshabilitaElemento('botonNumero');
                puntos();
                return;
            }
            return;
        }
        if(variablePregunta == 'inputNombreUsuario'){
            //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)               
            creaElementoP('contenedor__scroll', 'nombre_fin', 'pCSS', `- ¡GRACIAS POR PARTICIPAR ${inputDato.toLocaleUpperCase()}!\n-Fin de la App.`);
            deshabilitaElemento('inputNombreUsuario');
            deshabilitaElemento('botonNombre');
            console.log(inputDato.toLocaleUpperCase())
            return;
        }
    }else{
        indicadorAvance = 0;
        if(variablePregunta == 'boton_continuar'){
            deshabilitaElemento('boton_continuar');
            nombreUsuario();
            return;
        }
        alert('¡Captura un dato válido!')
        return;
    }
    return;
}

function limpiarInput(elemento){
    document.getElementById(elemento).value = '';
}

function asignaFoco(elementHTML){
    document.getElementById(elementHTML).focus();
    return;
}

function reload(){
     location.reload();
     return;
}