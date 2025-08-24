//instrucciones desafio 4
let nombre = "";
let lenguajePreferido ="";
let suma1 = 0;
let suma2 = 0;
let resultado = 0;
let diferencia1 =0;
let diferencia2 =0;
let resultadoDiferencia = 0;
let tuEdad = 0;
let esPositivoNegativo =0;
let numeroloop = 0;
let miCalificacion = 0;
let numeroAleatorio = 0;

function iniciar(){
    deshabilitaElemento('inicio');

    console.log('¡Bienvenido!');
    creaElementoP('contenedor__scroll', '', '', ` *** ¡Bienvenido! ***\n`);

    nombre = prompt("¿Cuál es tu nombre?:") + " --";
    if(validaDato(nombre)){
        console.log(`¡Hola, ${nombre.trim()}!`);
        creaElementoP('contenedor__scroll', '', '', `- ¡Hola, ${nombre.trim()}!\n`);
        lenguaje();
    }else{
        vacio();
    }
    return;
}

function lenguaje(){
    lenguajePreferido = prompt('¿Qué lenguaje de programación te gusta más? - (JAVA, Java Script, Pyton, C, Php)');
    if(validaDato(lenguajePreferido)){
        console.log(`${lenguajePreferido.trim()} es tu lenguaje preferido!`);
        creaElementoP('contenedor__scroll', '', '', `- ${lenguajePreferido.trim()} es tu lenguaje preferido!\n`);
        sumar();
    }else{
        vacio();
    }
    return;
}

function sumar(){
    suma1 = parseInt(prompt("Ingresa el primer número mayor a 0 para sumar:"));
    if(suma1){
        suma2 = parseInt(prompt("Ingresa el segundo número mayor a 0 para sumar:"));
        if(suma2){
            resultado = suma1 + suma2;
            console.log(`La suma de ${suma1} y ${suma2} es igual a ${resultado}.`);
            creaElementoP('contenedor__scroll', '', '', `- La suma de ${suma1} y ${suma2} es igual a ${resultado}.\n`);
            diferencia();
        }else{
            vacio();
        }
    }else{
        vacio();
    }
    return;
}

function diferencia(){
    diferencia1 = parseInt(prompt("Ingresa un número positivo:"));
    if(diferencia1){
        diferencia2 = parseInt(prompt("Ingresa un número diferente al primero:"));
         if(diferencia2){
            resultadoDiferencia = diferencia1 - diferencia2;
            console.log(`La diferencia entre la resta de ${diferencia1} y ${diferencia2} es igual a ${resultadoDiferencia}.`);
            creaElementoP('contenedor__scroll', '', '', `- La diferencia entre la resta de ${diferencia1} y ${diferencia2} es igual a ${resultadoDiferencia}.\n`);
            edad();
         }else{
             vacio();
         }
    }else{
         vacio();
    }
    return;
}    

function edad(){
    tuEdad = parseInt(prompt(`${nombre.trim()} ingresa tu edad:`));
    if(tuEdad){
        if (tuEdad > 17) {
            console.log(`${nombre.trim()} eres mayor de edad.`);
            creaElementoP('contenedor__scroll', '', '', `- ${nombre.trim()} eres mayor de edad.\n`);
        } else {
            console.log(`${nombre.trim()} eres menor de edad.`);
            creaElementoP('contenedor__scroll', '', '', `- ${nombre.trim()} eres menor de edad.\n`);
        }
        numeroPositivoNegativo();
    }else{
        vacio();
    }
    return;
}

function numeroPositivoNegativo(){
    esPositivoNegativo = parseInt(prompt("Ingresa un número:"));
    if(esPositivoNegativo){
        if (esPositivoNegativo > 0) {
            console.log("El número es positivo.");
            creaElementoP('contenedor__scroll', '', '', `- El número es positivo.\n`);
        } else if (esPositivoNegativo < 0) {
            console.log("El número es negativo.");
            creaElementoP('contenedor__scroll', '', '', `- El número es negativo.\n`);
        } else {
            console.log("El número es cero.");
            creaElementoP('contenedor__scroll', '', '', `- El número es cero.\n`);
        }
        loop();
    }else{
        vacio();
    }
    return;
}

function loop(){
    numeroloop = parseInt(prompt(`${nombre} dame un número para listarlo menor a 30:`));
    if(numeroloop){
        if (numeroloop < 30){
            while (numeroloop <= 30) {
            console.log(numeroloop);
            creaElementoP('contenedor__scroll', '', '', `- ${numeroloop}\n`);
            numeroloop++;        
            }
            calificacion();
        }else{
            console.log("El número es mayor a 30");
            creaElementoP('contenedor__scroll', '', '', `- El número es mayor a 30\n`);
        }
    }else{
        vacio();
    }
}

function calificacion(){    
    miCalificacion = parseInt(prompt("Ingresa tu calificación entre 0 y 10:"));
    if(miCalificacion){
        if(miCalificacion >= 0 || miCalificacion <= 10){
            if (miCalificacion >= 7) {
                console.log(`${nombre} ¡Estás Aprobado!`);
                creaElementoP('contenedor__scroll', '', '', `- ${nombre} ¡Estás Aprobado!\n`);
            } else{
                console.log(`${nombre} ¡Estás Reprobado!`);
                creaElementoP('contenedor__scroll', '', '', `- ${nombre} ¡Estás Reprobado!\n`);
            }
            numAleatorio();
        }else{
            console.log("El número está fuera del rango de 0 a 30");
            creaElementoP('contenedor__scroll', '', '', `- El número está fuera del rango de 0 a 30\n`);
        }
    }else{
        vacio();
    }
}

function numAleatorio(){
    console.log(`**** GENERACIÓN DE NÚMEROS ALEATORIOS ****`);
    numeroAleatorio = Math.random(); 
    console.log(`${nombre} este es un número decimal generado aleatoriamente: ${numeroAleatorio}`);
    creaElementoP('contenedor__scroll', '', '', `- ${nombre} este es un número decimal generado aleatoriamente: ${numeroAleatorio}\n`);

    //genea número aleatorio por rango entre 1 y 10
    numeroAleatorio = parseInt(Math.random() * 10) + 1;
    console.log(`${nombre} este es un número entre el 1 y el 10 generado aleatoriamente: ${numeroAleatorio}`);
    creaElementoP('contenedor__scroll', '', '', `- ${nombre} este es un número entre el 1 y el 10 generado aleatoriamente: ${numeroAleatorio}\n`);

    //genea número aleatorio por rango entre 1 y 1000
    numeroAleatorio = parseInt(Math.random() * 1000) + 1;
    console.log(`${nombre} este es un número entre el 1 y el 1000 generado aleatoriamente: ${numeroAleatorio}`);
    creaElementoP('contenedor__scroll', '', '', `- ${nombre} este es un número entre el 1 y el 1000 generado aleatoriamente: ${numeroAleatorio}\n`);
    console.log("FIN DE LA APP.")
    creaElementoP('contenedor__scroll', '', '', `- FIN DE LA APP.\n`);
}

function validaDato(datoValidar){
    if(datoValidar.trim()){
        console.log(datoValidar.trim());
        return true;
    }
    return false;
}

function reiniciar(){
     location.reload();
     return;
}

function vacio(){
     console.log("¡El campo está vacío!");
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

//función deshabilita elemento
function deshabilitaElemento(elemento){
    document.getElementById(elemento).disabled = true;
}