//crea e inicializa varibles y
const soloNumerosPositivos = /^\d+$/;
let maximoIntentos = 0; //crea variable y se asigna el máximo
let numeroUsuario = 0; // crea variable asignada para input de usuario igual a 0    

async function adivinaNumero(){
    //Variables locales
    let numeroSecreto = 0; // crea variable numero secreto
    let intentos = 1;   //crea variable intentos a 0  
    let inicioRangoIntentos = 0;
    let finRangoIntentos = 0;
    
    //inicializa pantalla usuario
    cambiaTitulos('tituloPrincipal', '¡Adivina!');
    cambiaTitulos('subTitulo', '¡Intenta descubrir el número secreto...!');
    cambioColorTexto('tituloPrincipal','#1875E8');
    cambioColorTexto('subTitulo','#fff');

    //pide numero de intentos y valida dato input
    //pasaparametos para popup
    maximoIntentos = parseInt(await datoEntrada(`Hola Amig@! \nEn cuántos intentos quieres adivinar?`, `Número de intentos`, ``, true, '¡Campo vacío!'));

//valida si intentos no alcanza maximo e rango inicial es valido
    if(validaEsNumero(maximoIntentos) && maximoIntentos >= inicioRangoIntentos){        
        //input rango inicial
        inicioRangoIntentos = parseInt(await datoEntrada(`¿A partir de que número quieres adivinar?\n*Solo números positivos*`, `Rango inicial`, `1`, true, '¡Campo vacío!'));
        //valida inicio de rango
        if(validaEsNumero(inicioRangoIntentos) && inicioRangoIntentos >= 1){
            //input fin de rango
            finRangoIntentos = parseInt(await datoEntrada(`¿Hasta cuál número quieres adivinar?\n*Solo números positivos*`, `Rango inicial`, `10`, true, '¡Campo vacío!'));
            //valida fin rango
            if(validaEsNumero(finRangoIntentos) && finRangoIntentos > inicioRangoIntentos){
                //valida maximo intentos se encuentra entre rango inicial y final
                if (maximoIntentos < finRangoIntentos && maximoIntentos >= 1) {
                    numeroSecreto = Math.floor(Math.random() * (finRangoIntentos - inicioRangoIntentos + 1)) + inicioRangoIntentos;
                        //inicia loop mientras el numero del usuario es diferente al número secreto                 
                        while(numeroSecreto != numeroUsuario){
                            //input numero usuari y valida
                            numeroUsuario = parseInt(await datoEntrada(`Intento: ${intentos} de ${maximoIntentos} \nDame un número entre el ${inicioRangoIntentos} y ${finRangoIntentos}\n-${numeroSecreto}-`, `!Adivina!`, ``, true, `Captura un número entre  ${inicioRangoIntentos} y ${finRangoIntentos}`));
                            //compara nuemro secreto y número usuario son iguales
                            if (numeroSecreto == numeroUsuario) {
                                //despliega mensaje ganador
                                mensajePantallaGana(`success`, `¡GANASTE!`, `El número secreto es: ${numeroSecreto}`, `*Reinicia para seguir jugando*`);
                                //cambia titulos y color a ganador
                                cambiaTitulos('tituloPrincipal', '¡Adivinaste!');
                                cambiaTitulos('subTitulo', '¡Descubriste el número secreto!');
                                cambioColorTexto('tituloPrincipal','#eb5e5eff');
                                cambioColorTexto('subTitulo','#ebdf5eff');
                                deshabilitaElemento('inicio');
                                cambiaColorFondoBoton('inicio', '#98c8ecff');
                            }else{
                             // número usuario y secreto son diferentes
                                if (numeroUsuario < numeroSecreto){
                                    //pista - número secreto es mayor
                                    alert(`¡ERROR! \nEl número secreto es mayor a: ${numeroUsuario}`);
                                }
                                if (numeroUsuario > numeroSecreto){
                                    //pista - número secreto es menor
                                    alert(`ERROR! \nEl número secreto es menor a: ${numeroUsuario}`);
                                }
                                //incrementar el contador
                                intentos++;
                                //alcanza limite intentos
                                if (intentos > maximoIntentos){  //compara cuantos intentos se han hecho
                                    mensajePantallaError(`warning`, `¡PERDISTE!`, `El úmero máximo de intentos es: ${maximoIntentos}. \nEl número secreto era: ${numeroSecreto}`, `Fin del juego - Reinicia`);
                                    cambiaTitulos('tituloPrincipal', 'Perdiste');
                                    cambiaTitulos('subTitulo', 'Reinicia e intenta de nuevo..');
                                    cambioColorTexto('tituloPrincipal','#eb5e5eff');
                                    deshabilitaElemento('inicio');
                                    cambiaColorFondoBoton('inicio', '#98c8ecff');
                                    break;      //sale de loop
                                }
                            }
                        }
                } else { //mensaje error numero intentos dentro de rangos
                    errorEntrada(`El número de intentos tenía que ser entre: 1\ny: ${finRangoIntentos}`,'El número de intentos deia ser dentro del rango de inicio y fina');
                }                
            } else{ //mensaje error inicio debe ser menor a final
                errorEntrada(`El rango de número INICIAL debe ser menor al rango FINAL`,`Lo que capturaste fue: inicial = ${inicioRangoIntentos} y el final = ${finRangoIntentos}`);
            }
        } else{ //mensaje error rango inicial debe ser numero positivo
            errorEntrada(`El número de inicio no es válido.`,`Debe ser un número positivo mayor a 0`);
        }
    } else{ //mensaje error numero intentos debe ser positivo
        errorEntrada(`¡ERROR!\nEl número no era positivo / o cancelaste.`);
    }
}

//función valida si input es número y no está vacío
function validaEsNumero(valor){
    if (isNaN(valor) || valor === null) {
        //console.log("Valor inválido o usuario canceló");
        mensajePantallaError(`error`, `¡DATO INVÁLIDO!\no cancelaste`, `Debe ser un número`, `Intenta de nuevo`);
        return false;
    } else{
        return true;
    }
}

//función mensaje error input
function errorEntrada(valor, etiqueta){
    mensajePantallaError(`error`, valor, etiqueta, `Intenta de nuevo`);
    return false;
}

//función genera popup para input
async function datoEntrada(mensaje, etiqueta, valorInput, verBotonCancelar, mensejeError) {
  const { value: datoInput } = await Swal.fire({
    title: mensaje,
    input: "text",
    inputLabel: etiqueta,
    inputValue: valorInput,
    showCancelButton: verBotonCancelar,
    inputValidator: (value) => {
      if (!value) {
        return mensejeError;
      }
    }
  });    
    return datoInput;
}

//función genera mensaje popup error
function mensajePantallaError(icon, titulo, mensaje, footer){
    Swal.fire({
    icon: icon,
    title: titulo,
    text: mensaje,
    footer: footer
    });
    return;
}

//función genera mensaje popup para ganador
function mensajePantallaGana(icon, titulo, mensaje, footer){
    Swal.fire({
    icon: icon,
    title: titulo,
    text: mensaje,
    footer: footer
    });
    return;
}

//función para reasignar cadenas texto a títulos al ganar
function cambiaTitulos(elemento, texto){
    //tituloPrincipal.textContent = '¡Correcto!';
    document.getElementById(elemento).textContent = texto;
    return;
}

//función cambia color textos
function cambioColorTexto(elemento, color){
    document.getElementById(elemento).style.color = color;
    return;
}

//reinicia juego (botón reinicio)
function reinicio(){
    location.reload();
    return;
}

//desactiva botón iniciar juego
function deshabilitaElemento(elemento){
    return document.getElementById(elemento).disabled = true;
}

//cambia color fondo boton al desactivar
function cambiaColorFondoBoton(elemento, color) {
    document.getElementById(elemento).style.backgroundColor = color;
    return;
}