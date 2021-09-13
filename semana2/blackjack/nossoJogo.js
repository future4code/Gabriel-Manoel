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
console.log('Seja bem-vindo(a) ao jogo de blackjack')



  

let inicio = confirm('Quer iniciar a partida?')
let carta1 = []
let carta2 = []
let i = 0

if(inicio){


   const dados = {
    jogador : comprarCarta(), 
    cartaJogador :comprarCarta(),
    jogadorPc :  comprarCarta(),
    cartaPc : comprarCarta()}
 
 carta1[i] = dados.jogador.valor
 carta2[i] = dados.cartaPc.valor


 let pontuacaoJogador = dados.jogador.valor +  dados.cartaJogador.valor
 let pontuacaoPc = dados.jogadorPc.valor + dados.cartaPc.valor

 

  
 
 console.log(`Usuário - cartas: ${dados.cartaJogador.texto} ${dados.cartaJogador.texto} - pontuação ${pontuacaoJogador}`)
 console.log(`Computador - cartas: ${dados.cartaPc.texto} ${dados.cartaPc.texto} -  pontuação ${pontuacaoPc}`)

  
 if(pontuacaoJogador === pontuacaoPc){
   console.log( 'Empate!!')
 }else if(pontuacaoJogador > pontuacaoPc) {
   console.log('O usuário ganhou!')
 }else {console.log('O computador ganhou!')}



}else {console.log('Fim de jogo!!')}