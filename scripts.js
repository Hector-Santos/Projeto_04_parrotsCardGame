let arraycompara = []
let numerocartas
function viracarta(elemento) {
  if (arraycompara.length < 2 && elemento.classList.contains("virado") != true) {
    elemento.classList.add("virado")
    function escondefrente() {
      elemento.querySelector(".frente").classList.add("escondido")
    }
    setTimeout(escondefrente, 100)
    function mostraverso() {
      elemento.querySelector(".verso").classList.remove("escondido")
    }
    setTimeout(mostraverso, 100)

    arraycompara.push(elemento)
    setTimeout(comparaCartas, 2000)
  }
}



function adicionacartas() {
  let numerocartas = prompt("Com quantas cartas deseja jogar? Escolha um numero par entre 4 e 14")
  while (numerocartas < 4 || numerocartas > 14 || numerocartas % 2 !== 0)
    numerocartas = prompt("Valor invalido. Escolha um numero par entre 4 e 14")
  let array = [`<div class="carta " onclick="viracarta(this)">
      <img class="frente" src="imagens/front.png">
      <img class="verso escondido" src="imagens/explodyparrot.gif">
    </div>`,
    `<div class="carta" onclick="viracarta(this)">
      <img class="frente" src="imagens/front.png">
      <img class="verso escondido" src="imagens/explodyparrot.gif">
    </div>`,
    `<div class="carta" onclick="viracarta(this)">
      <img class="frente" src="imagens/front.png">
      <img class="verso escondido" src="imagens/fiestaparrot.gif">
    </div>`,
    `<div class="carta" onclick="viracarta(this)">
      <img class="frente" src="imagens/front.png">
      <img class="verso escondido" src="imagens/fiestaparrot.gif">
    </div>`,
    `<div class="carta" onclick="viracarta(this)">
       <img class="frente" src="imagens/front.png">
       <img class="verso escondido" src="imagens/metalparrot.gif">
     </div>`,
    `<div class="carta" onclick="viracarta(this)">
       <img class="frente" src="imagens/front.png">
       <img class="verso escondido" src="imagens/metalparrot.gif">
     </div>`,
    `<div class="carta" onclick="viracarta(this)">
       <img class="frente" src="imagens/front.png">
       <img class="verso escondido" src="imagens/revertitparrot.gif">
     </div>`,
    `<div class="carta" onclick="viracarta(this)">
       <img class="frente" src="imagens/front.png">
       <img class="verso escondido" src="imagens/revertitparrot.gif">
     </div>`,
    `<div class="carta" onclick="viracarta(this)">
    <img class="frente" src="imagens/front.png">
    <img class="verso escondido" src="imagens/tripletsparrot.gif">
    </div>`,
    `<div class="carta" onclick="viracarta(this)">
    <img class="frente" src="imagens/front.png">
    <img class="verso escondido" src="imagens/tripletsparrot.gif">
    </div>`,
    `<div class="carta" onclick="viracarta(this)">
   <img class="frente" src="imagens/front.png">
   <img class="verso escondido" src="imagens/unicornparrot.gif">
   </div>`,
    `<div class="carta" onclick="viracarta(this)">
   <img class="frente" src="imagens/front.png">
   <img class="verso escondido" src="imagens/unicornparrot.gif">
   </div>`,
    `<div class="carta" onclick="viracarta(this)">
   <img class="frente" src="imagens/front.png">
   <img class="verso escondido" src="imagens/bobrossparrot.gif">
   </div>`,
    `<div class="carta" onclick="viracarta(this)">
   <img class="frente" src="imagens/front.png">
   <img class="verso escondido" src="imagens/bobrossparrot.gif">
   </div>`]

  function aleatorio() {
    return Math.random() - 0.5
  }

  array = array.slice(0, numerocartas).sort(aleatorio);

  for (let i = 0; i < array.length; i++) {
    document.querySelector(".cartas").innerHTML += array[i];
  }
}

function viraDevolta(elemento) {
  elemento.classList.add("revirado")
  elemento.classList.remove("virado")
  function escondeverso() {
    elemento.querySelector(".verso").classList.add("escondido")
  }
  setTimeout(escondeverso, 100)
  function mostrafrente() {
    elemento.querySelector(".frente").classList.remove("escondido")
  }
  setTimeout(mostrafrente, 100)
  elemento.classList.remove("revirado")
}



function comparaCartas() {

  if (arraycompara[0].innerHTML !== arraycompara[1].innerHTML) {
    viraDevolta(arraycompara[0])
    viraDevolta(arraycompara[1])
  }
  arraycompara = []
}


adicionacartas()
