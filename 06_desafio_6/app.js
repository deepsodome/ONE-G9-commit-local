//crea variable de h1 camvia el texto al iniciar app
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Desafío 6 ONE G9-2025';

//nuestra mensaje en consola al pulsar botón consola
function mostarMensajeEnLaConsola() {
    console.log('Pulsaste el botón ¡CONSOLA!')
    creaElementoP('contenedor__scroll', 'p_Texto', '', '___________________________________________');
    creaElementoP('contenedor__scroll', 'p_Texto', '', 'Hiciste clic en el botón - CONSOLA -.');
}

//al pulsar botón prompt lanza prompt para pedir nombre de ciudad y manda alert con mensaje
function mostrarAlerta2() {
    let ciudad = prompt("Por favor, dame el nombre de una ciudad de México:");
    creaElementoP('contenedor__scroll', 'p_Texto', '', '___________________________________________');
    creaElementoP('contenedor__scroll', 'p_Texto', '', 'Hiciste clic en el botón - PROMPT - para pedirte el nombre de una ciudad.');
    if(ciudad != ''){
        //alert("Estuve en " + ciudad + " y me acordé de ti.");
        creaElementoP('contenedor__scroll', 'p_Texto', '', `Estuve en ${ciudad} y me acordé de ti.`);
    }else{
        alert("¡ERROR! El campo está vacío. - Intenta de nuevo -");
        creaElementoP('contenedor__scroll', 'p_Texto', '', '¡ERROR! - No capturaste el nombre de la ciudad - intenta de nuevo.');
    }
    

//al pulsar botón alerta despliega aleta con mensaje
}function mostrarAlerta1(){
    alert("Programado en JavaScript por Raúl Treuba");
    creaElementoP('contenedor__scroll', 'p_Texto', '', '___________________________________________');
    creaElementoP('contenedor__scroll', 'p_Texto', '', 'Hiciste clic en el botón - ALERTA - y se mostró un popup.');
} 

//al pulsar botón suma pide dos números y despliega la suma y resultado
function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Dame el primer numero a sumar'));
    let segunNumero = parseInt(prompt('Dame el segundo numero a sumar'));
    let resultado = primerNumero + segunNumero;
    creaElementoP('contenedor__scroll', 'p_Texto', '', '___________________________________________');
    creaElementoP('contenedor__scroll', 'p_Texto', '', `El resultado de suma: ${primerNumero} + ${segunNumero} = ${resultado}`);
    //alert(`${primerNumero} + ${segunNumero} = ${resultado}`)
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

function reinicio(){
  location.reload();
  return;
}