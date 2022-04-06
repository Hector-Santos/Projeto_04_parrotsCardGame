function viracarta(elemento){
  elemento.classList.add("virado")
  function escondefrente (){
  elemento.querySelector(".frente").classList.add("escondido")
  }
  setTimeout(escondefrente, 100)
  function mostraverso(){
    elemento.querySelector(".verso").classList.remove("escondido")
  }
  setTimeout(mostraverso, 100)
  
}