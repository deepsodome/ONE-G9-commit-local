//APP funciones 

//llama a funcion mostrarHola() - botón inicio
function inicio(){
  let resultadoDoble = 0;
  let promedio = 0;
  let numeroMayor = 0;
  let resultado = 0;

  mostrarHola();  
  mostrarHolaNombre(prompt("Dame tu nombre:"));
  
  resultadoDoble = parseInt(prompt('Dame un número para calcular el doble:'));
  calcularDoble(resultadoDoble);

  promedio = calcularPromedio(parseInt(prompt('Dame número (1 de 3):')), parseInt(prompt('Dame número (2 de 3):')), parseInt(prompt('Dame número (3 de 3):')));
  console.log(`El promedio de los tres números es: ${promedio}.\n'(Si el resultado es NaN entonces no capturaste los números.)'`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `El promedio de los tres números es: ${promedio}.`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', '(Si el resultado es NaN entonces no capturaste los números.)');

  numeroMayor = encontrarMayor(parseInt(prompt('Dame número (1 de 2):')), parseInt(prompt('Dame número (2 de 2):')));
  console.log(`El número mayor es: ${numeroMayor}.\n(Si el resultado es NaN entonces no capturaste los números.)`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `El número mayor es: ${numeroMayor}.`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', '(Si el resultado es NaN entonces no capturaste los números.)');

  resultado = cuadrado(parseInt(prompt('Dame número para sacar su cuadrado:')));
  console.log(`El del número es: ${resultado}.\n(Si el resultado es NaN entonces no capturaste el número.)`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `El cuadrado del número es: ${resultado}.`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', '(Si el resultado es NaN entonces no capturaste el número.)');
  console.log('_______________\n_______________\nFIN DE APP.');
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `FIN DE APP.`);
  return;
}

//función 1
function mostrarHola() {
  console.log("¡Hola, mundo!");
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `- ¡Hola, mundo!`);
  return;
}

//función 2
function mostrarHolaNombre(nombre) {
  if(nombre != ''){
    console.log(`¡Hola, ${nombre}!`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `¡Hola, ${nombre}!`);
  }else{
    console.log(`¡ERROR! - El nombre está vacío.`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `¡ERROR! - El nombre está vacío.`);
  }
  return;
}

//función 3
function calcularDoble(numero) {
  let resultadoDobleB = numero;
  if(!isNaN(numero)){
    console.log(`El doble de ${numero} es: ${resultadoDobleB * 2}`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `El doble de ${numero} es: ${resultadoDobleB * 2}`);
  }else{
    console.log(`Valor incorrecto o sin datos`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `Valor incorrecto o sin datos`);
  }
  return;
}

//función 4
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

//función 5
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

//función 6
function cuadrado(numero) {
  return numero * numero; 
}

function reinicio(){
  location.reload();
  return;
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