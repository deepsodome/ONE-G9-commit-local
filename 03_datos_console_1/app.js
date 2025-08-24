// programa js que hace preguntas al usuario desafío 3
let contadorInicio = 0;    
let contadorFinal = 0;
let pasos = 0;
let indicadorAvance = 0;

function iniciar(){
    contadorInicio = 0;    
    contadorFinal = 0;

    contadorInicio = parseInt(prompt("Cuenta de números acendente...\nDame un número desde el que te gustaría iniciar una lista entre 1 y 50:"));
    if(contadorInicio <= 0 || contadorInicio > 50){
        alert('¡ERROR!\nEl núemro inicial debe ser mayor a CERO y menor o igual a 50\nVuelve a iniciar')
    }else{
        contadorFinal = parseInt(prompt(`Ahora dame el número en el que te gustaría terminar la lista entre ${contadorInicio + 1} y ${contadorInicio + 50}:`));
        if(contadorFinal <= contadorInicio + 1 || contadorFinal >= contadorInicio + 51){
            alert(`¡ERROR!\nEl núemro final no debe ser mayor a ${contadorInicio + 50}\nVuelve a iniciar`);
        }else{
            //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
            creaElementoP('contenedor__scroll', '', '', '__________');
            creaElementoP('contenedor__scroll', '', '', ` Inicia cuenta acendente desde: ${contadorInicio}`);
            while (contadorInicio <= contadorFinal) { 
                //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
                creaElementoP('contenedor__scroll', 'incremento', 'pCSS', `Línea - ${contadorInicio}`);
                console.log(`Indice - ${contadorInicio}`);
                contadorInicio++;
            }
            creaElementoP('contenedor__scroll', '', '', ` Termina en: ${contadorInicio-1}`);
            creaElementoP('contenedor__scroll', '', '', '__________ Revisa las lineas de arriba ^^^');
            //crea boton continuar <button> - (nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton)
            creaBoton('contenedor__scroll', 'boton_continuar1', 'clase__boton', 'Continuar a paso 2', boton_continuar);
            creaElementoP('contenedor__scroll', '', '', '\n');
        }        
    }
}

function masAmenos(){
    contadorInicio = 0;
    contadorFinal = 0;

    contadorFinal = parseInt(prompt("Cuenta de números decendente...\nDame un número mayor a 10:"));
    if(contadorFinal <= 10){
        alert('¡ERROR!\nEl núemro debe ser mayor a 10\nVuelve a iniciar')
    }else{
        contadorInicio = parseInt(prompt(`Ahora dame un número menor a ${contadorFinal}`));
        if(contadorInicio >= contadorFinal){
            alert(`¡ERROR!\nEl núemro debe ser menor a ${contadorFinal}\nVuelve a iniciar`)
        }else{
            creaElementoP('contenedor__scroll', '', '', '__________');
            creaElementoP('contenedor__scroll', '', '', ` Inicia cuenta decendente desde: ${contadorFinal}`);
            while (contadorFinal >= contadorInicio) {
                creaElementoP('contenedor__scroll', 'incremento', 'pCSS', `Línea - ${contadorFinal}`);
                console.log(`Indice - ${contadorFinal}`);
                contadorFinal--;
            }
            creaElementoP('contenedor__scroll', '', '', ` Termina en: ${contadorFinal+1}`);
            creaElementoP('contenedor__scroll', '', '', '__________ Revisa las lineas de arriba ^^^');
            //crea boton continuar <button> - (nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton)
            creaBoton('contenedor__scroll', 'boton_continuar2', 'clase__boton', 'Continuar a paso 3', boton_continuar);
            creaElementoP('contenedor__scroll', '', '', '\n');
        }
    }
}

function incremento(){
    contadorInicio = 0;    
    contadorFinal = 0;
    pasos = 0;

    contadorInicio = parseInt(prompt("Incremento de números...\nDame un número  entre 1 y 50 que te gustaría para iniciar una lista:"));
    if(contadorInicio <= 0 || contadorInicio > 50){
        alert('¡ERROR!\nEl núemro inicial debe ser mayor a CERO y menor a 50\nVuelve a iniciar')
    }else{
        pasos = parseInt(prompt("Ahora dame el número entre 1 y 5"));
        if(pasos <= 0 || pasos > 5){
            alert('¡ERROR!\nEl núemro debe ser entre 1 y 5\nVuelve a iniciar')
        }else{
            contadorFinal = parseInt(prompt(`Ahora dame el número en el que te gustaría terminar la lista entre ${contadorInicio + pasos} y ${contadorInicio + 200}:`));
            if(contadorFinal > contadorInicio + 200 || contadorFinal <= contadorInicio){            
                alert(`¡ERROR!\nEl núemro final no debe ser mayor a ${contadorInicio + 200} y menor a ${contadorInicio + pasos}\nVuelve a iniciar`);
            }else{
                //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
                creaElementoP('contenedor__scroll', '', '', '__________');
                creaElementoP('contenedor__scroll', '', '', ` Inicia en: ${contadorInicio} con incrementos: ${pasos}`);
                while (contadorInicio <= contadorFinal) { 
                    //crea elemento <p> - (nombreContenedor, identificador, claseCSS, texto)
                    creaElementoP('contenedor__scroll', 'incremento', 'pCSS', `Línea - ${contadorInicio}`);
                    console.log(`Indice - ${contadorInicio}`);
                    contadorInicio = contadorInicio + pasos;
                }
            }
            creaElementoP('contenedor__scroll', '', '', ` Termina en: ${contadorInicio-1}`);
            creaElementoP('contenedor__scroll', '', '', '__________ Revisa las lineas de arriba ^^^');
            creaElementoP('contenedor__scroll', '', '', '__________');
            creaElementoP('contenedor__scroll', '', '', ` FIN DE LA APP`);
        }
    }        
    
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

//función crea botón
function creaBoton(nombreContenedor, identificador, claseCSS, textoBoton, funcionBoton){
    document.getElementById(nombreContenedor).appendChild(Object.assign(document.createElement('button'), {
        id: identificador,
        className: claseCSS,
        textContent: textoBoton,
        onclick: boton_continuar
    }));
    return;
}

//función deshabilita elemento
function deshabilitaElemento(elemento){
    document.getElementById(elemento).disabled = true;
}

//función botón vomtinuar
function boton_continuar(){
    indicadorAvance++;
    if(indicadorAvance == 1){
        deshabilitaElemento('boton_continuar1')
        masAmenos();
    }

    if(indicadorAvance == 2){
        deshabilitaElemento('boton_continuar2')
        incremento();
    }
    return;
}

function reiniciar(){
     location.reload();
     return;
}