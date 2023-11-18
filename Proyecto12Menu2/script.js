document.querySelector(".menuBarra").addEventListener("click", animacionMenu);
document.querySelector(".menuBarra").addEventListener("click", animacionImag);


let barra1 = document.querySelector(".fila1");
let barra2 = document.querySelector(".fila2");
let barra3 = document.querySelector(".fila3");
let corazon = document.querySelector(".cora");
let dolida = document.querySelector(".doli");
let botonAudio = new Audio ('./sound/audio.mp3');

function animacionMenu(){
    barra1.classList.toggle("fila1Animacion");
    barra3.classList.toggle("fila3Animacion");
    barra2.classList.toggle("fila2Animacion");
}

function animacionImag(){
    corazon.classList.toggle("coraAnimacion");
    dolida.classList.toggle("doliAnimacion");
}

function play() {
    botonAudio.play();
}

function pause() {
    botonAudio.pause();
}