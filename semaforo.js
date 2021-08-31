const semaforo = document.getElementById("semaforo")

const semaforoApagado = () => semaforo.src = "img/desligado.png"

const acenderVermelho = () => semaforo.src = "img/vermelho.png"

const acenderAmarelo = () => semaforo.src = "img/amarelo.png"

const acenderVerde = () => semaforo.src = "img/verde.png"

// const automatico = () => acenderVermelho() 




let idVermelho
function automatico() {
    acenderVermelho()
    idVermelho = setTimeout(() => {
        acenderAmarelo()
        setTimeout(() => {
           acenderVerde()
           setTimeout(() => {
              automatico() 
           }, 700); 
        }, 700);
    }, 700);
}

function mudarButtonAutomatico() {
    const automatico = document.getElementById("automatico")
    if (automatico.textContent == "Automático") {
        automatico()
        automatico.textContent = "Parar"
    } else {
        clearInterval(idVermelho)
    }
}




// EVENTOS
document.getElementById("button-vermelho").addEventListener("click", acenderVermelho)
document.getElementById("button-amarelo").addEventListener("click", acenderAmarelo)
document.getElementById("button-verde").addEventListener("click", acenderVerde)
document.getElementById("button-automatico").addEventListener("click", automatico)


// function acenderVermelho() {
//     semaforo.src = "img/vermelho.png"
// }

// function acenderAmarelo() {
//     semaforo.src = "img/amarelo.png"
// }

// function acenderVerde() {
//     semaforo.src = "img/verde.png"
// }