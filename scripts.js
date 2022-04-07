function viracarta(elemento) {
  console.log(elemento) 
  elemento.classList.add("virado")
  function escondefrente() {
    elemento.querySelector(".frente").classList.add("escondido")
  }
  setTimeout(escondefrente, 100)
  function mostraverso() {
    elemento.querySelector(".verso").classList.remove("escondido")
  }
  setTimeout(mostraverso, 100)

}

function adicionacartas() {
  let numerocartas = prompt("Com quantas cartas deseja jogar? Escolha um numero par entre 4 e 14")
  while (numerocartas < 4 || numerocartas > 14 || numerocartas % 2 !== 0)
    numerocartas = prompt("Valor invalido. Escolha um numero par entre 4 e 14")
  let array = [`<div class="carta " onclick="viracarta(this)">
      <img class="frente" src="imagens/front.png">
      <img class="verso escondido" src="imagens/explodyparrot.gif">
    </div>` ,
      `<div class="carta " onclick="viracarta(this)">
      <img class="frente" src="imagens/front.png">
      <img class="verso escondido" src="imagens/explodyparrot.gif">
    </div>` ,
     `<div class="carta" onclick="viracarta(this)">
      <img class="frente" src="imagens/front.png">
      <img class="verso escondido" src="imagens/fiestaparrot.gif">
    </div>`,
      `<div class="carta" onclick="viracarta(this)">
      <img class="frente" src="imagens/front.png">
      <img class="verso escondido" src="imagens/fiestaparrot.gif">
    </div>`,
      `<div class="carta " onclick="viracarta(this)">
       <img class="frente" src="imagens/front.png">
       <img class="verso escondido" src="imagens/metalparrot.gif">
     </div>`,
      `<div class="carta " onclick="viracarta(this)">
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
   </div>`,]

  function comparador() {
    return Math.random() - 0.5
  }
  document.querySelector(".cartas").innerHTML += array.slice(0,numerocartas).sort(comparador)
}

function viraDevolta() {
  let elemento = document.querySelector(".virado")
  elemento.classList.remove("virado")
  elemento.classList.add("revirado")
  function escondeverso() {
    elemento.querySelector(".verso").classList.add("escondido")
  }
  setTimeout(escondeverso, 100)
  function mostrafrente() {
    elemento.querySelector(".frente").classList.remove("escondido")
  }
  setTimeout(mostrafrente, 100)
}



function comparaCartas(){
let viradas = document.querySelectorAll(".virado")
console.log(viradas)
}
adicionacartas()
