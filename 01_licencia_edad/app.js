// desafío 1 
const p = document.createElement('p');
const noCorrectos = /[^a-zA-Z\s]/g;
let capturaNombre = "";     //crea variable y asigna valor caracrteres
let capturaEdad = 0;      //crea variable y asigna valor

function inicio(){
    let mensajeDeError = 'Completa todos los campos -usa variable-';   ////crea variable y asigna valor texto

    deshabilitaElemento('inicio');
    
//crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
    creaElementoP('container__interactividad', 'bienVenido', 'pCSS', '¡Bienvenido a la App!');    
    creaElementoP('container__interactividad', 'textoMensaje', 'pCSS', 'Completa todos los campos y pulsa el boton "Enviar"');

    //creaElementoP('container__interactividad', 'textoMensaje2', 'pCSS', mensajeDeError);
    
//crea contenedor 1 <div> - (combreContenedor, identificador, classCSS, contenido)
    creaContenedor('container__interactividad', 'contenedor__input__boton_1', 'contenedor__input__boton_css', '');
// crea input 1 <input> - (nombreContenedor, tipoDatos, identificador, claseCSS, textoEjemploCampo, requerido,longitudMaxima)
    creaElementoInput('contenedor__input__boton_1', 'text', 'nombre', 'inputNombre', 'Escribe tu nombre', 'false', 20);
    //creaBoton('contenedor__input__boton_1', 'botonNombre', 'clase__boton', 'Aceptar', botonAcepta, 'nombre');

// crea contenedor 2 <div> - (combreContenedor, identificador, classCSS, contenido)
    creaContenedor('container__interactividad', 'contenedor__input__boton_2', 'contenedor__input__boton_css', '');
// crea input 2 <input> - (nombreContenedor, tipoDatos, identificador, claseCSS, textoEjemploCampo, requerido,longitudMaxima)
    creaElementoInput('contenedor__input__boton_2', 'text', 'edad', 'inputEdad', 'Escribe tu edad', 'false', 3);
    //creaBoton('contenedor__input__boton_2', 'botonEdad', 'clase__boton', 'Aceptar', botonAcepta, 'edad');

// crea contenedor 3 <div> - (combreContenedor, identificador, classCSS, contenido)
    creaContenedor('container__interactividad', 'contenedor__input__boton_fin', 'contenedor__input__boton_css', '');
//crea boton aceptar <button> - (nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton, inputId)
    creaBoton('contenedor__input__boton_fin', 'botonEnviar', 'clase__boton', 'Enviar', botonAcepta, 'botonEnviar');

}
//función muestra mensaje en p que ya existe en html
function visualizaMensaje(elemento, mensaje){
    document.getElementById(elemento).textContent = mensaje;
    return;
}

//función crea elemento p en html
function creaElementoP(nombreContenedor, identificador, claseCSS, texto){
    document.getElementById(nombreContenedor).appendChild(Object.assign(document.createElement('p'), {
        id: identificador,
        className: claseCSS,
        textContent: texto
    }));
return;
}

//función crea elemento input en página en html
function creaElementoInput(nombreContenedor, tipoDatos, identificador, claseCSS, textoEjemploCampo, requerido,longitudMaxima){
    document.getElementById(nombreContenedor).appendChild(Object.assign(document.createElement('input'), {
        type: tipoDatos,
        id: identificador,
        className: claseCSS,
        placeholder: textoEjemploCampo,
        required: requerido,
        maxlength: longitudMaxima
    }));
    return;
}

//función crea botón
function creaBoton(nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton, inputId){
    document.getElementById(nombreContenedor).appendChild(Object.assign(document.createElement('button'), {
        id: identificador,
        className: claseCSS,
        textContent: textoBoton,
        onclick: funcionBoton,
        onclick: () => botonAcepta(inputId)
    }));
    return;
}

//función hace clic en aceptar
function botonAcepta(elemento){
    let = edadNumero = 0;
    capturaNombre = document.getElementById('nombre').value;
    capturaEdad = document.getElementById('edad').value;
    if((capturaEdad && capturaNombre) &&  !isNaN(capturaEdad) && capturaEdad != undefined) {
        //compara que variable sea mayor o igual a 18
        if (capturaEdad >= 18) {
            creaElementoP('container__interactividad', 'compruebaEdad', 'pCSS', `${capturaNombre}, ¡Eres mayor de edad y puedes obtener tu licencia de conducir!`);
            document.getElementById('texto__desafio').textContent = '¡Eres Mayor!';
            document.getElementById('texto__desafio').style.color = '#62eff4ff';
        }
        else {
            creaElementoP('container__interactividad', 'compruebaEdad', 'pCSS', `${capturaNombre}, ¡Eres menor de edad y No puedes obtener tu licencia de conducir!`);
            document.getElementById('texto__desafio').textContent = '¡Eres Menor!';
            document.getElementById('texto__desafio').style.color = '#10ff88ff';
        }
        deshabilitaElemento('botonEnviar');
        return;
    }else{
        alert("¡Captura un Nombre y Edad Válidos!")
    }
}

//función crea contenedor <div>
function creaContenedor(nombreContenedor, identificador, classCSS, contenido){
    document.getElementById(nombreContenedor).appendChild(Object.assign(document.createElement('div'), {
        id: identificador,
        className: classCSS,
        //textContent: contenido
    }));
}

//función deshabilita elemento
function deshabilitaElemento(elemento){
    document.getElementById(elemento).disabled = true;
}

//función Reinicia app
function reinicio(){
     location.reload();
     return;
}