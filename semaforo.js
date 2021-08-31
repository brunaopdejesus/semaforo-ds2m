const semaforo = document.getElementById("semaforo")

const acenderVermelho = () => semaforo.src = "img/vermelho.png"

const acenderAmarelo = () => semaforo.src = "img/amarelo.png"

const acenderVerde = () => semaforo.src = "img/verde.png"







// EVENTOS
document.getElementById("button-vermelho").addEventListener("click", acenderVermelho)
document.getElementById("button-amarelo").addEventListener("click", acenderAmarelo)
document.getElementById("button-verde").addEventListener("click", acenderVerde)

