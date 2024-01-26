let numeroSecreto = -1;
let intentos = 1;
let numerosGenerados = [];
let maximo = 100;

function asignacionDeTexto(etiqueta, texto){
    let asignacion = document.querySelector(etiqueta);
    asignacion.innerHTML = texto;
    return;
}

function intentoDelUsuario(){
    let numeroIntento = parseInt(document.getElementById("valorUsuario").value);
    if (numeroIntento === numeroSecreto){
        asignacionDeTexto("p",`Haz acertado el numero en ${intentos} ${(intentos === 1) ? "intento": "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (numeroIntento > numeroSecreto){
            asignacionDeTexto("p","Intenta uso mas chico");
        } else{
            asignacionDeTexto("p","Intenta uno mas grande");
        }
        intentos++;
        limpiarValor();
    }
}

function aleatorio(min,max){
    let numero = (min + Math.ceil(Math.random()*(max-min)));

    if (numerosGenerados.length === maximo){
        asignacionDeTexto("p","El juego termino");
    } else {
        if (numerosGenerados.includes(numero)){
            return aleatorio(0,maximo);
        }else{
            numerosGenerados.push(numero);
            return numero;
        }
    }
}

function limpiarValor () {
    document.querySelector("#valorUsuario").value = "";
}

function reiniciarJuego () {
    intentos = 1;
    limpiarValor();
    numeroSecreto = aleatorio(0,maximo);
}

function condicionesIniciales () {
    asignacionDeTexto("h1", "Juego del numero secreto");
    asignacionDeTexto("p", `Ingresa un numero del 1 al ${maximo}`);
    reiniciarJuego();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();