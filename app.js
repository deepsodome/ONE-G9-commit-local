const controlDark = document.getElementById('control__dark');
const hamburguesa = document.getElementById('hamburguesa');
const menu = document.querySelector('.header__menu');
const contenidoTitTextImaLink = [
    ["01. Práctica: ¿Eres mayor de edad?", "¡Entra y averigua que puedes hacer según tu edad!", "¡Desafío! En esta práctica de programación, experimentarás como se agragan elementos a una página web por medio de código Java Script. Vas a interactuar con la app para capturar datos hasta ver el resultado. ¿Quieres ver como funciona? ¡Entra y descubre cómo funciona!", "./01_licencia_edad", "./ima/01_mayor_edad.jpg"],

    ["02. Práctica: Preguntas al usuario", "¡Entra e interactua con la App! respondiendo una serie de preguntas. ", "¡Desafío! En esta práctica de programación, experimentarás como capturar datos, procesarkis y mostrarlos en pantalla por medio de código Java Script. Vas a interactuar con la app para capturar datos hasta ver el resultado. ¿Quieres ver como funciona? ¡Entra y descubre cómo funciona!", "./02_pregunta_user_1", "./ima/02_preguntas01.jpg"],

    ["03. Práctica: Preguntas al usuario - Console", "¡Entra e interactua con la App! Es el segundo ejercicio de preguntas al usuario. ", "¡Desafío! En esta ejercicio de programación nos enfocaremos en listas de números con incrementos y decrementos entre rangos de números hecho con Java Script. Además podrás hacerlo con incrementos de hasta 5 numeros. ¿Quieres ver como funciona? ¡Entra y descubrelo!", "./03_datos_console_1", "./ima/03_preguntas02.jpg"],

    ["04. Práctica: Preguntas al usuario - Console 2", "¡Entra e interactua con la App! Es el tercer ejercicio de preguntas al usuario. ", "¡Desafío! En esta ejercicio de programación nos enfocaremos al manejo de variables y asignación de valores de tipo texto, número y combinados. ¿Quieres ver como funciona? ¡Entra y descubrelo!", "./04_datos_console_2", "./ima/04_preguntas03.jpg"],

    ["05. Práctica: Número Secreto", "¡Juega y Descubre! Adivina el Número Secreto!", "¡Desafío! En esta práctica de programación, crearás un juego donde adivinas un número secreto dentro de un rango elegido por ti. Puedes decidir cuántos intentos tienes para ganar. ¿Podrás encontrarlo antes de que se acaben? ¡Juega y descubre cómo funciona!", "./05_num_secreto/", "./ima/05_num_secreto.jpg"],

    ["06. Práctica: Programando botones", "Aprende como se le pueden dar funciones a un botón", "¡Desafío! En esta práctica de programación se muesra como se pueden programar los botones de una app para realizar difernetes tipos de funciones. Solo tienes que hacer clic sobre cada uno para ejecutarlas. ¡Descubre las diferentes posibilidades que puedes programar en un botón!", "./06_desafio_6", "./ima/06_consola_3.jpg"],

    ["07. Práctica: Llamado de funciones", "Experimenta la versatilidad de una App cn el llamado de funciones en Java Script", "¡Desafío! En esta demostración de llamado a funciones, vas a interactur ingresando datos para que la App ejecute una serie de llamados para que puedas vr los resultados en la consola de las herramientas del progrmador de tu navegador. Disgruta de un fiseño futurístico y amigable ¡Entra y descubre cómo funciona!", "./07_desafio_7", "./ima/07_funciones.jpg"],

    ["08. Práctica: Operaciones matemáticas", "Realiza cálculos a la velocidad de la luz con esta App", "¡Desafío! En esta práctica de programación, Podrás conocer el tipo de cálculos que puedes realizar en una App. Calcula tu índice de maza corporal, calcular el tipo de cambio en tre dolares y la moneda brasileñá y muchos más cálculos. ¿Podrías hacerlo tan rapido como la App? ¡Entra y descubre cómo funciona!", "./08_desafio_claculos", "./ima/08_operaciones.jpg"],

    ["09. Práctica: Operaciones con Arreglos", "Aprende como puedes guardar datos con arreglos", "¡Desafío! En esta práctica de programación, la App realizará una serie de operaciones con diferentes datos en una variable. Podráß interactuar cuando te pida algunos datos a capturar. ¿Te gustaría aprender el uso de los arreglos? ¡Entra y descubre cómo funciona!", "./09_arreglos", "./ima/09_arreglos.jpg"],

    ["10. Práctica: Número secreto - GUI -", "¡Juega y Descubre! Adivina el Número Secreto", "¡Desafío! En esta práctica de programación con ¡¡¡INTERFAZ GRÁFICA!!!, crearás un juego donde adivinas un número secreto. Puedes hacer varios intentos para ganar o reiniciar el juego si ganas. ¿Podrás encontrarlo antes de que se acaben las oportunidades?? ¡Juega y descubre cómo funciona!", "./10_num_secreto_gui", "./ima/10_mumero_secreto_gui.jpg"],

    ["11. Práctica: Amigo secreto", "¡Juega y Sortea! a tu amigo segreto", "¡Desafío! En esta práctica de programación, la App te pedirá que captures el nombre de tus amigos y con su algoritmo seleccionará uno al azar. Captura dos o mas de tus mejores amigos y que la suerte decida cuál es el Amigo Secreto. ¡Juega y averigua quién sera tu mejor amigo", "./11_amigo_secreto", "./ima/11_amigo_secreto.jpg"],

    ["12. Práctica: Portafolios", "Personalización de una plantilla de portafolios", "¡Desafío! En esta práctica de HTML y CSS, se prsonalizó una plantilla que se usó para dar información profesional sobre Mí. Además de cambiar la información se agregan detalles como punteros de mouse e interacción al posicionar el putero sobre algunos elementos como el menú.", "./12_portafolio", "./ima/12_portafolio.jpg"]
];

let indiceContenido1 = 0;

function muestraContenido(){
    let contenidoHTML = "";
    for (indiceContenido1 = 0; indiceContenido1 < contenidoTitTextImaLink.length; indiceContenido1++){        
        contenidoHTML += `
            <h2 id="titulo__principal__entradas" class="subtitulo__proyecto">${contenidoTitTextImaLink[indiceContenido1][0]}</h2>
            <div class="contenedor__entradas__ejercicios">
                <section class="entada__ejercicio__izquierda">
                    <h3 class="titulo__entrada__izquierda">${contenidoTitTextImaLink[indiceContenido1][1]}</h3>
                    <p class="texto__entrada__izquierda">${contenidoTitTextImaLink[indiceContenido1][2]}</p>
                    <a class="entrada__link__ir" href="${contenidoTitTextImaLink[indiceContenido1][3]}" target="_blank"><strong>Ir a ejercicio</strong></a>
                </section>
            
                <section class="entada__ejercicio__derecha">
                    <a href="${contenidoTitTextImaLink[indiceContenido1][3]}" target="_blank"><img class="imagen__entrada__derecha" src="${contenidoTitTextImaLink[indiceContenido1][4]}"></a>
                </section>  
            </div>
        `;
    }
    document.getElementById("contenedor__principal").innerHTML = contenidoHTML;
    return;
}

//CONTROL CLARO / DARK
controlDark.addEventListener('change', () => {
    //MODO DARK
    if (controlDark.checked) {
        console.log('Interruptor encendido');
        cambioColorFondo('#272727');
        cambioColorTexto('titulo__principal','#a7a7a7ff');
        cambioColorTexto('titulo__secundario','#eb60acff');
        const elementos = document.querySelectorAll('.contenedor__entradas__ejercicios');
        elementos.forEach(elemento => {
            elemento.style.backgroundColor = '#3e3e3eff';
        });
    }
    //MODO CLARO
    else {
        console.log('Interruptor apagado');
        cambioColorFondo('#f2f2f2');
        cambioColorTexto('titulo__principal','#5a5a5a');
        cambioColorTexto('titulo__secundario','#cd0c76ff');
        const elementos = document.querySelectorAll('.contenedor__entradas__ejercicios');
        elementos.forEach(elemento => {
            elemento.style.backgroundColor = '';
        });
    }
});

function cambioColorFondo(color){
    document.body.style.backgroundColor = color;
}

function cambioColorTexto(elemento, color){
    document.getElementById(elemento).style.color = color;
}

hamburguesa.addEventListener('click', () => {
  menu.classList.toggle('show');
});

muestraContenido();
