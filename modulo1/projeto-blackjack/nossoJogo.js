/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

let novaRodada = confirm("Deseja iniciar uma nova rodada?")
if (novaRodada) {
   let cartaDoUsuario1 = comprarCarta()
   let cartaDoUsuario2 = comprarCarta()

   let cartaDoComputador1 = comprarCarta()
   let cartaDoComputador2 = comprarCarta()

   let somaDasCartasDoUsuario = cartaDoUsuario1.valor + cartaDoUsuario2.valor
   let somaDasCartasDoComputador = cartaDoComputador1.valor + cartaDoComputador2.valor

   console.log(`Usuário - cartas: ${cartaDoUsuario1.texto} + ${cartaDoUsuario2.texto} - pontuação ${somaDasCartasDoUsuario}`)
   console.log(`Computador - cartas: ${cartaDoComputador1.texto} + ${cartaDoComputador2.texto} - pontuação ${somaDasCartasDoComputador}`)

   if (somaDasCartasDoUsuario === somaDasCartasDoComputador) {
      console.log("Empate!")
   } else if(somaDasCartasDoUsuario > somaDasCartasDoComputador){
      console.log("O usuário ganhou!")
   } else if(somaDasCartasDoComputador > somaDasCartasDoUsuario){
      console.log("O computador ganhou!")
   }
} else {
   console.log("O jogo acabou")
}

//Fazendo o Desafio :D 