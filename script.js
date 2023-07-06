// Aca el juego selecciona un numero al azar para que adivines 
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intentos = 0 

//Esta acción se va a ejecutar cuando se toque el botón chequear 
function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'por favor, introduce un número valido entre 1 y 100'
        mensaje.style.color = 'red';
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Más alto! El número es mayor  al que dijiste';
        mensaje.style.color = 'orange';
    }else{
        mensaje.textContent = '¡Más bajo! El número es mayor  al que dijiste';
        mensaje.style.color = 'yellow';
    }
}