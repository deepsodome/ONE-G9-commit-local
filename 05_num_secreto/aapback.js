const tituloPrincipal = document.getElementById('tituloPrincipal');
const subTitulo = document.getElementById('subTitulo');
let maximoIntentos = 0; //crea variable y se asigna el máximo

async function adivinaNumero(){
    //Variables
    let numeroSecreto = Math.floor(Math.random()*10)+1; // crea variable con el número constante a encontrar igual a 5
    let numeroUsuario = 0; // crea variable asignada para input de usuario igual a 0    
    let intentos = 1;   //crea variable intentos a 0  
    
    titulosinicio();
    cambioColorTexto('tituloPrincipal','#1875E8');
    cambioColorTexto('subTitulo','#fff');

    maximoIntentos = parseInt(await datoEntrada(`Hola Amig@! \nEn cuántos intentos quieres adivinar?`, `Número de intentos`, ``, true, '¡Campo vacío!'));
    if (isNaN(maximoIntentos) || maximoIntentos === null) {
        console.log("Valor inválido o usuario canceló");
        mensajePantalla(`error`, `¡DATO INVÁLIDO!\no cancelaste`, `Debe ser un número`, `Intenta de nuevo`);
    } else {
        console.log(maximoIntentos);
        while(numeroSecreto != numeroUsuario){  // repite hasta el maximo numero de intentos
            numeroUsuario = parseInt(await datoEntrada(`Intento: ${intentos} de ${maximoIntentos} \nDame un número entre el 1 y 10\n-${numeroSecreto}-`, `!Adivina!`, ``, true, 'Captura un número entre 1 y 10'));
            /*
                compara valores de variables y despliega mensaje si la edad es mayot a diez
            */
            if (numeroSecreto == numeroUsuario) {
                mensajePantallaGana(`success`, `¡GANASTE!`, `El número secreto es: ${numeroSecreto}`, `*Reinicia para seguir jugando*`);
                titulosGana();
                cambioColorTexto('tituloPrincipal','#eb5e5eff');    //titulo principal
                cambioColorTexto('subTitulo','#ebdf5eff');    //subtitulo
            } else { // no se cumple concidión
                if (numeroUsuario < numeroSecreto){                    
                    alert(`ERROR! \nEl número secreto es mayor a: ${numeroUsuario}`);       //lanza mensaje avisando si el número es mayor
                } else {
                    alert(`ERROR! \nEl número secreto es menor a: ${numeroUsuario}`);       //lanza mensaje avisando si el número es menor
                }
                //incrementar el contador
                intentos++;
                if (intentos > maximoIntentos){  //compara cuantos intentos se han hecho
                    mensajePantallaError(`warning`, `¡PERDISTE!`, `Llegaste al número máximo de intentos: ${maximoIntentos}`, `Fin del juego`);
                    break;      //sale de loop
                }
            }
        }
    }
}

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

function mensajePantallaError(icon, titulo, mensaje, footer){
    Swal.fire({
    icon: icon,
    title: titulo,
    text: mensaje,
    footer: footer
    });
}

function mensajePantallaGana(icon, titulo, mensaje, footer){
    Swal.fire({
    icon: icon,
    title: titulo,
    text: mensaje,
    footer: footer
    });
}

function titulosinicio(){
    //tituloPrincipal.textContent = '¡Correcto!';
    document.getElementById('tituloPrincipal').textContent = '¡Adivina!';
    //subTitulo.textContent = '¡Descubriste el número secreto!';
    document.getElementById('subTitulo').textContent = '¡Intenta descubrir el número secreto...!';
    return;
}

function titulosGana(){
    //tituloPrincipal.textContent = '¡Correcto!';
    document.getElementById('tituloPrincipal').textContent = '¡Correcto!';
    //subTitulo.textContent = '¡Descubriste el número secreto!';
    document.getElementById('subTitulo').textContent = '¡Descubriste el número secreto!';
    return;
}

function cambioColorTexto(elemento, color){
    document.getElementById(elemento).style.color = color;
}

function reinicio(){
    location.reload();
}