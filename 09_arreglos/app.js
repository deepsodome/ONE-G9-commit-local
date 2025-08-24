//App desafío 9 - arreglos
let lenguagesDeProgramacion = ['PHP', 'JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
let valorBotonSiguiente = 0;

//función 1 - inicio - agregar valores al arreglo
function inicio(){
  deshabilitaElemento('inicio');
  cambiaColorTexto('inicio', '#765e5e');
  console.log('Esta es una lista de lenguajes de progrmación:');
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Esta es una lista de lenguajes de progrmación:`);
  for(let i = 0; i < lenguagesDeProgramacion.length ; i++){
    console.log(lenguagesDeProgramacion[i]);
    //contenedor - id - clase - texto
    creaElementoP('contenedor__scroll', '', 'p__normal', `${i+1} - ${lenguagesDeProgramacion[i]}`);
    cambiaColorTexto('botonSiguiente', 'white');
    habilitaElemento('botonSiguiente');
  }
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `==> Haz clic en el botón - SIGUIENTE - para continuar <==`);
  valorBotonSiguiente = 2;
  return;
}

//función  - 2 add lenguajes
function agregarLEnguajes(){
  let tamanoArreglo = lenguagesDeProgramacion.length;

  console.log(`Agregaste los lenguajes:`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Agregaste los lenguajes:`);
  for(let addLenguaje = 0 ; addLenguaje <= 1; addLenguaje++){
    nuevoLenguaje = prompt(`Agrega un lenguaje de programación diferente (${addLenguaje+1} de 2)
    `);
    if(nuevoLenguaje ==''){
      console.log(`Dato inválido, intenta de nuevo\nHaz clic en el botón - Reinicio -`);
      //contenedor - id - clase - texto
      creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
      creaElementoP('contenedor__scroll', '', 'p__resaltado', `Dato inválido, intenta de nuevo. Haz clic en el botón - Reinicio -`);
      deshabilitaElemento('botonSiguiente');
      cambiaColorTexto('botonSiguiente', '#765e5e');
      break;
    }else{
      lenguagesDeProgramacion.push(nuevoLenguaje);
      console.log(`Lenguaje agregado: ${nuevoLenguaje}`);
      //contenedor - id - clase - texto
      creaElementoP('contenedor__scroll', '', 'p__normal', `Lenguaje agregado: ${nuevoLenguaje}`);
    }
  }
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `==> Haz clic en el botón - SIGUIENTE - para continuar <==`);
  valorBotonSiguiente = 3;
  return;
}

//función 3 - mostrar arreglo
function mostrarLenguages() {
  console.log(`Esta es la lista actualizada de lenguajes:`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Esta es la lista actualizada de lenguajes:`);
  for (let i = 0 ; i < lenguagesDeProgramacion.length ; i++) {
    console.log(lenguagesDeProgramacion[i]);
    creaElementoP('contenedor__scroll', '', 'p__normal', `${i+1} - ${lenguagesDeProgramacion[i]}`);
  }
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `==> Haz clic en el botón - SIGUIENTE - para continuar <==`);
  valorBotonSiguiente = 4;
  return;
}

//función 4 - lista inversa arreglo
function mostrarLenguagesReverso() {
  console.log(`Esta es la lista en orden invertido:`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Esta es la lista en orden invertido:`);
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(`${i} - ${lenguagesDeProgramacion[i]}`);
    //contenedor - id - clase - texto
    creaElementoP('contenedor__scroll', '', 'p__normal', `${i+1} - ${lenguagesDeProgramacion[i]}`);
  }
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `==> Haz clic en el botón - SIGUIENTE - para continuar <==`);
  valorBotonSiguiente = 5;
  return;
}

//función 5 - pausa continuar a f6
function mediaPausa(){
  console.log(`Voy a calcular la media de un arreglo. Haz clic en el botón - SIGUIENTE - para iniciar <==`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Voy a calcular la media de un arreglo. Haz clic en el botón - SIGUIENTE - para iniciar <==`);
  valorBotonSiguiente = 6;
}

//función 6 - calcular media arreglo
function calcularMedia() {
  let suma = 0;
  let numeros = [11, 22, 33, 44, 99];
 
  for (let i = 0; i < numeros.length; i++) {
    console.log(`Valor - ${numeros[i]}`);
    //contenedor - id - clase - texto
    creaElementoP('contenedor__scroll', '', 'p__normal', `Valor - ${numeros[i]}`);
    suma += numeros[i];
  }
  console.log(`La media de los valores es: ${suma / numeros.length}`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `La media de los ${numeros.length} valores es: ${suma / numeros.length}`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `==> Haz clic en el botón - SIGUIENTE - para continuar <==`);
  valorBotonSiguiente = 7;
  return;
}

//función 7 - encontrar mayo y menor de arreglo
function encontrarMayorMenor() {
  let mayorMenor = [89, 5, 52, 11, 48];
  let mayor = mayorMenor[0];
  let menor = mayorMenor[0];

  console.log(`Encontrando el valor mayor y menor de un arreglo.`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Encontrando el valor mayor y menor de un arreglo.`);
  creaElementoP('contenedor__scroll', '', 'p__normal', `Valor - ${mayorMenor[0]}`);
  for (let i = 1; i < mayorMenor.length; i++) {
    //contenedor - id - clase - texto
    creaElementoP('contenedor__scroll', '', 'p__normal', `Valor - ${mayorMenor[i]}`);
    if (mayorMenor[i] > mayor) {
      mayor = mayorMenor[i];
      console.log(`${mayorMenor[i]} es mayor a ${mayor}`);
      //contenedor - id - clase - texto
      creaElementoP('contenedor__scroll', '', 'p__normal', `${mayorMenor[i]} es mayor a ${mayor}`);
    }
    if (mayorMenor[i] < menor) {
      menor = mayorMenor[i];
      console.log(`${mayorMenor[i]} es menor a ${mayor}`);
      //contenedor - id - clase - texto
      creaElementoP('contenedor__scroll', '', 'p__normal', `${mayorMenor[i]} es menor a ${mayor}`);
    }
  }
  console.log(`El valor mayor es :${mayor}`);
  console.log(`El valor menor es :${menor}`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `El valor mayor es :${mayor}`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `El valor menor es :${menor}`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `==> Haz clic en el botón - SIGUIENTE - para continuar <==`);
  valorBotonSiguiente = 8;
  return;
}

//función 8 - calcular suma arreglo
function calcularSuma() {
  let numerosSuma = [100, 200, 300, 33, 22, 11];
  let suma = 0;

  console.log(`Calcular la suma de un arreglo`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Calcular la suma de un arreglo`);
  for (let i = 0; i < numerosSuma.length; i++) {
    //contenedor - id - clase - texto
    creaElementoP('contenedor__scroll', '', 'p__normal', `Valor - ${numerosSuma[i]}`);
    suma += numerosSuma[i];
  }  
  console.log(`El total de la suma es: ${suma}`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `El total de la suma es: ${suma}`);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `==> Haz clic en el botón - SIGUIENTE - para continuar <==`);
  valorBotonSiguiente = 9;
  return;
}

//función 9 - encontrar índice elemento arreglo
function encontrarIndiceElemento() {
  let milenguaje = '';
  let minusculas = [];
  let indice = 0;

  minusculas = lenguagesDeProgramacion.map(palabra => palabra.toLowerCase());
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Encontrar el índice del arreglo`);
  creaElementoP('contenedor__scroll', '', '', `Estos son los lenguajes del arreglo: ${lenguagesDeProgramacion}`);
  milenguaje = prompt('php, javascript, c, c++, kotlin, python\nEscribe uno de estos lenguajes en minusculas..');
  if (milenguaje) {
    milenguaje = milenguaje.trim().toLowerCase(); // elimina espacios y convierte a minúsculas
    indice = minusculas.indexOf(milenguaje);
    console.log(`El índice del arreglo para '${milenguaje}' es: ${indice >= 0 ? indice : "¡ERROR! - Dato capturado incorrecto, Reinicia para intentarlo de nuevo"}`);
    //contenedor - id - clase - texto
    creaElementoP('contenedor__scroll', '', '', `El índice del arreglo para '${milenguaje}' es: ${indice >= 0 ? indice : "¡ERROR! - Dato capturado incorrecto, Reinicia para intentarlo de nuevo"}`);
  }else{
    console.log('¡ERROR!\nOlvidaste capturar el lenguaje, da clic en reiniciar y vuelve a intentarlo.');
    //contenedor - id - clase - texto
    creaElementoP('contenedor__scroll', '', '', '¡ERROR! - Olvidaste capturar el lenguaje, da clic en reiniciar y vuelve a intentarlo.');
  }
  valorBotonSiguiente = 10;
  return;
}
  
//función 10 - sumar listas
function sumarListas() {
  let lista1 = [22, 44, 66];
  let lista2 = [7, 8, 9];
  let resultado = 0;

  console.log("Sumar listas de arreglos");
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Sumar listas de arreglos`);
  console.log("Valores de lista 1:", lista1);
  console.log("Valores de lista 2:", lista2);
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', '', `Valores de lista 1: ${lista1}`);
  creaElementoP('contenedor__scroll', '', '', `Valores de lista 2: ${lista2}`);
  resultado = lista1.map((valor, indice) => valor + lista2[indice]);  
  console.log(`La suma entre las dos listas es: ${resultado}`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `La suma entre las dos listas es: ${resultado}`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `==> Haz clic en el botón - SIGUIENTE - para continuar <==`);
  valorBotonSiguiente = 11;
  return;
}

//función 11 - calcular cuadrado de lista arreglo
function cuadradoLista() {
  let lista = [70, 600, 50];
  let resultado2 = [];
  //contenedor - id - clase - texto
  creaElementoP('contenedor__scroll', '', 'p__normal', `_______________`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Eleva al cuadrado los valores del arreglo`);
  creaElementoP('contenedor__scroll', '', '', `Estos son los valores del arreglo: ${lista}`);
  resultado2 = lista.map(num => num ** 2);
  console.log(`Los resultadoa del cuadrado los valores son: ${resultado2}`);
  creaElementoP('contenedor__scroll', '', 'p__resaltado', `Los resultadoa del cuadrado los valores son: ${resultado2}`);
  creaElementoP('contenedor__scroll', '', '', `_______________`);
  creaElementoP('contenedor__scroll', '', '', `** FIN DE LA APP **`);
  deshabilitaElemento('botonSiguiente');
  cambiaColorTexto('botonSiguiente', '#765e5e');
  return;
}

//función 
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
  return;
}

function botonSiguiente(){
  switch (valorBotonSiguiente) {
    case 2:
      agregarLEnguajes();
      break;
    case 3:
      mostrarLenguages();
      break;
    case 4:
      mostrarLenguagesReverso();
      break
    case 5:
      mediaPausa();
      break;
    case 6:
      calcularMedia();
      break;
    case 7:
      encontrarMayorMenor();
      break;
    case 8:
      calcularSuma();
      break;
    case 9:
      encontrarIndiceElemento();
      break;
    case 10:
      sumarListas();
      break;
    case 11:
      cuadradoLista();
      break;
  }
  return;
}

function habilitaElemento(elemento){
    return document.getElementById(elemento).removeAttribute('disabled');
}

function cambiaColorTexto(elemento, color) {
    document.getElementById(elemento).style.color = color;
    return;
}

function deshabilitaElemento(elemento){
    return document.getElementById(elemento).disabled = true;
}