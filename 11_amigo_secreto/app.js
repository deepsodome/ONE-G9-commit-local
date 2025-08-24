// Desafío "AMIGO SECRETO" By Raúl Trueba ONE G9 2025

/*Declaración y asignación de variables
asigna listas de html a variables
*/
let listaAmigos = [];
let amigoAdd = "";
const elementoLista1 = document.getElementById("listaAmigos");
const elementoLista2 = document.getElementById("resultado");
const noCorrectos = /[^a-zA-Z\s]/g;
let numeroValidado = 0;

/*Agrega al arreglo los nombres desde caja de texto al hacer clic en botón añadir
Valida que no se encuentre vacia la caja de texto y hace trim a espacios
*/
function agregarAmigo(){
    amigoAdd = document.getElementById("amigo").value;  //asigna valor de caja de texto a variale
    let amigoVal = amigoAdd.trim(" ");      //declara variable y elimina espacios al inicio y final del nombre
    amigoVal = amigoVal.toLowerCase();      //convierte a minusculas la cadena
    amigoVal = amigoVal.replace(noCorrectos, "");   //elimina caracteres especiales y números
    
    //console.log(noCorrectos.test(amigoAdd));
    //valida que la caja de texto no esté vacío o no tenga solo números
        if (amigoVal != ""){            
                if(validaNombresNoIguales(amigoVal) == true){
                    listaAmigos.push(amigoVal);
                    document.getElementById("amigo").value = "";
                    barreLista();
                    asignaFoco("amigo");
                }
            //asignaFoco("amigo");            
        }else{      //mensaje si esta vacio o tiene números
            Swal.fire({
                icon: "¡ERROR!",
                title: "Dato inválido",
                text: "El campo está vacío, contiene caracteres especiales o son números.",
                footer: "-Ingresa un nombre válido-"
            });            
            document.getElementById("amigo").value = "";            
            /*alert("¡Error - Dato inválido! \nEl campo está vacío, con caracteres especiales o son números. \n¡Ingresa un nombre válido!")
            document.getElementById("amigo").value = "";*/
            //console.log("no hay datos");
        }
        asignaFoco("amigo");
    return;
}

/* Compara nombres de arreglo con nuevo para que no se repitan*/
function validaNombresNoIguales(nombreNuevo){
    for (let numeroLista = 0;numeroLista <= (listaAmigos.length-1);numeroLista++){
        if(nombreNuevo == listaAmigos[numeroLista]){
            Swal.fire({
                icon: "¡ERROR!",
                title: "Dato inválido",
                text: "El nombre ya existe en la lista.",
                //footer: '<a href="#">Why do I have this issue?</a>'
            });
            document.getElementById("amigo").value = "";            
            /*alert("¡Error - Dato inválido! \nEl nombre ya existe en la lista. \n¡Ingresa un nombre diferente!")
            document.getElementById("amigo").value = "";*/
            asignaFoco("amigo");
            return false;
        }
    }
    return true;
}

/*Revisa todos los nombres del arreglo y los agrega a la lista en pantalla
*/
function barreLista(){
    borrarLista();
    for (let numeroLista = 0;numeroLista <= (listaAmigos.length-1);numeroLista++){
        //console.log(`Nombre en lista: ${numeroLista} - ${listaAmigos[numeroLista]}`);
        addNombreLista(`${numeroLista + 1} - ${listaAmigos[numeroLista]}`);
    }
    return;
}

/*Detecta si la lista tiene datos y los borra
*/
function borrarLista(){
    if(elementoLista1){
        //console.log(elementoLista1);
        //elementoLista1.getElementById("listaAmigos").value = "";
        elementoLista1.replaceChildren();
    }else {
        //console.log("Vacío");
    }
    return;
}

/*Agrega los nombres a la lista en pantalla
*/
function addNombreLista(nombreLista){
    let amigoLista = document.createElement("li");
    amigoLista.textContent = nombreLista;   
    elementoLista1.appendChild(amigoLista);
    return;
}

/*Genera número aleatorio del primer arreglo al último (0 a X)
y lo muestra en pantalla alpresionar el botón "Sortear amigo"
devuelve el foco a la caja de texto
*/
function sortearAmigo(){
    let sorteo = Math.floor(Math.random()*listaAmigos.length-1)+1;
    let resultado = document.createElement("li");

    if(listaAmigos.length >= 2){
        resultado.textContent = `Tu amigo secreto es: ${listaAmigos[sorteo]}`;
        elementoLista2.appendChild(resultado);
        asignaFoco("amigo");
        borrarLista();
        deshabilitaElemento('amigo');
        deshabilitaElemento('agregar');
        deshabilitaElemento('sorteo');
        cambiaColorFondoBoton('sorteo', '#edc785');
        
        //console.log(`Nombre sorteado ${listaAmigos[sorteo]}`);
    } else{
        Swal.fire({
                icon: "¡ERROR!",
                title: "Deben ser al menos dos nombres.",
                text: "¡Añade uno o más nombres!",
                //footer: ""
            });
            
        /*alert(`¡Error!. Hay ${listaAmigos.length} ${listaAmigos.length == 1 ?'nombre' : 'nombres'}. \nDeben ser al menos dos nombres. \nAñade uno o más nombres!`)*/
    }
    asignaFoco("amigo");
    return;
}

//Asigna foco a caja de texto para que no hacer clic para escribir
function asignaFoco(elementHTML){
    document.getElementById(elementHTML).focus();
    return;
}

/*function habilitaElemento(elemento){
    return document.getElementById(elemento).removeAttribute('disabled');
}*/

function deshabilitaElemento(elemento){
    return document.getElementById(elemento).disabled = true;
}

function cambiaColorFondoBoton(elemento, color) {
    document.getElementById(elemento).style.backgroundColor = color;
    return;
}

//Reinicia app
function reload(){
     location.reload();
     return;
}