// Desafío 8 - Cálculos matemáticos - ONE G9-2025

//calcula el indice de maza corporal
function inicio(){
  let metros = 0;
  let kilos = 0;

  metros = parseFloat(prompt('Voy a calcular tu indice de maza corporal, dame tu estatura en -metros-:'));
  if(metros < 1 || !isNaN(metros)){
    kilos = parseFloat(prompt('Ahora dame tu peso en kilos:'));
    if(kilos < 1 || !isNaN(kilos)){
      console.log(`Tu IMC es = ${calcularIMC(metros, kilos)}`);
      creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
      creaElementoP('contenedor__scroll', 'p_Texto', '', `Tu Indice de Maza Corporal es = ${calcularIMC(metros, kilos)}`);
      factorial();
    }else{
      console.log(`¡ERROR! Dato inválido.`);
      creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
      creaElementoP('contenedor__scroll', 'p_Texto', '', `¡ERROR! Dato inválido, vuelve a intentarlo.`);
    }
    }else{
      console.log(`¡ERROR! Dato inválido.`);
      creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
      creaElementoP('contenedor__scroll', 'p_Texto', '', `ERROR! Dato inválido, vuelve a intentarlo.`);
    }
  return;
}

//calcula factorial
function factorial(){  
  let numero = parseInt(prompt('Dame un número para calcular el factiorial:'));

  if(numero < 1 || !isNaN(numero)){
    console.log(`El factorial de ${numero} es ${calcularFactorial(numero)}`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `El factorial de ${numero} es ${calcularFactorial(numero)}`);
    convertirMoneda();
  }else{
    console.log(`¡ERROR! Dato inválido.`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `ERROR! Dato inválido, vuelve a intentarlo.`);
  }
  return;
}

// conversion dolar a real
function convertirMoneda(){
  let cantidadDolares = parseFloat(prompt('Dame una cantidad de dolares para convertirlos en Reales:'));
  if(cantidadDolares < 0 || !isNaN(cantidadDolares)){
    console.log(`La conversión de ${cantidadDolares} dólares a Reales es: $ ${convertirDolaresAReales(cantidadDolares)} BRL`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `La conversión de ${cantidadDolares} dólares a Reales es: $ ${convertirDolaresAReales(cantidadDolares)} BRL`);
    calculaAreaPeri();
  }else{
    console.log(`¡ERROR! Dato inválido.`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `ERROR! Dato inválido, vuelve a intentarlo.`);
  }
  return;
}

  // calcula area y perimero de rectángulo
function calculaAreaPeri(){
  let altura = 0;
  let base = 0;

  altura = parseInt(prompt('Calcularé el Área y perímetro de una habitación, dame la altura en centímetros:'));
  if(altura < 1 || !isNaN(altura)){
    base = parseInt(prompt('Dame la base o ancho:'));
    if(base < 1 || !isNaN(altura, base)){
      areaPerimetroRectangulo(altura, base);
      AreaPerimetroCirculo();
    }
  }else{
    console.log(`¡ERROR! Dato inválido.`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `ERROR! Dato inválido, vuelve a intentarlo.`);
  }
  return;
}

//funcion para calcular área y perímetro de círculo
function AreaPerimetroCirculo(){
  let radio = parseInt(prompt('Dame el valor del radio de un círculo en centímetros para calcular su área y perímetro:'))
  if(radio < 1 || !isNaN(radio)){
    calcularAreaYPerimetroCircular(radio);
    multiplicar();

  }else{
    console.log(`¡ERROR! Dato inválido.`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `ERROR! Dato inválido, vuelve a intentarlo.`);
    
  }
}

// tabla multiplicar
function multiplicar(){
  let numeroMult = parseInt(prompt('Dame un número para multiplicarlo hasta 20:'))
  if(numeroMult > 0 || !isNaN(numeroMult)){
    mostrarTablaDeMultiplicar(numeroMult);
    console.log(`_______________\nFIN DE LA APP.`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `FIN DE LA APP.`);
  }else{
    console.log(`¡ERROR! Dato inválido.`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `ERROR! Dato inválido, vuelve a intentarlo.`);
  }  
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

//función IMC
function calcularIMC(altura, peso) {
  return peso / (altura * altura);
}

//funcion factorial
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}

//función convertir dolar a real
function convertirDolaresAReales(dolares) {
  var valorReal = 93.04;
  return dolares * valorReal;
}

 //funcion para calcular área y perímetro
function areaPerimetroRectangulo(altura, base) { 
  var area = (altura * base);
  var perimetro = 2 * (altura + base);
  console.log(`El área de la habitación es: ${area}`);
  console.log(`El perímetro de la habitación es: ${perimetro}`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `El área de la habitación es: ${area}`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `El perímetro de la habitación es: ${perimetro}`);
  return;
}

//función calculo área y perímetro
function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log(`El área de un círculo con radio de ${radio} es: ${area}`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `El área de un círculo de radio ${radio} es: ${area}`);
  console.log(`El perímetro de un círculo con radio de ${radio} es: ${perimetro}`);
}

//función tabla multiplicación con un parámetro
function mostrarTablaDeMultiplicar(numero) {
  creaElementoP('contenedor__scroll', 'p_Texto', '', `_______________`);
  creaElementoP('contenedor__scroll', 'p_Texto', '', `Tabla de multiplicar del número ${numero}`);
  for (var i = 1; i <= 50; i++) {
    var resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
    creaElementoP('contenedor__scroll', 'p_Texto', '', `${numero} x ${i} = ${resultado}`);
  }
}