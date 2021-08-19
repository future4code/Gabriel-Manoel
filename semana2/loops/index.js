// =================== Exercícios de interpretação de código =====================

// 1) resposta ==> 10
/* 2) A - resposta ==> 19, 21, 23, 25, 27, 30.
      B - resposta ==> tiraria o (if) e mudaria para (numero += 0)
*/
// 3) !!
// =================== Exercícios de escrita de código =======================

// ================ Exercicio 01 =================
// A)
// const bichos = Number(prompt('Quantos bichos de estimação você tem?'))
// const mensagem = 'Que pena! Você pode adotar um pet!'

// // B)
// if (bichos < 1){
//     i = 0
//     while (i < 1){
//        console.log(mensagem)
//        i+=1
//      }
// }
// // C)
// if(bichos > 0) {
//     nomeDosBichos = []
//     i = 0
//     while(i < bichos){
//        nomeDosBichos.push(prompt('Digite o nome dos pet'))
//        i++
//     }
//     console.log(nomeDosBichos)
// }

// ================ Exercicio 02 =================

// let arrayOriginal = [20, 90, 45, 23, 70, 15]
// A)
// const imprime = (arrayOriginal) => {
//     for(respsta of  arrayOriginal){
//         console.log(respsta)
//     }

// }

// imprime(arrayOriginal)
//B)
// const divisao = (arrayOriginal) => {
//      for (resposta of arrayOriginal){
         
//          console.log(resposta / 10)
//      }
// }

// divisao(arrayOriginal)

//C)
// const numerosPares = (arrayOriginal) => {
//        novoArray = []
//        for(lista of arrayOriginal){
//           if(lista % 2 === 0){
//             novoArray.push(lista)
//           }
//        }
//        console.log(novoArray)
//     }
   
//     numerosPares(arrayOriginal)

//D)
// const imprime = (arrayOriginal) => {
//         i = 0 
//         for(resposta of  arrayOriginal){
//             console.log(`O elemento do index ${i++} é ${resposta}`)
//         }
    
//     }
    
//     imprime(arrayOriginal)
    

//E)
// const maio_Menor = (verifica) => {
//      maior = 0
//      menor = Infinity
//      for (i = 0; i < verifica.length; i++){
//          numero = verifica[i]

//          if(numero > maior){
//              maior = numero
//          }else if (numero < menor){
//              menor = numero
//          }
//      }
//      console.log(`O maior número é ${maior} e o menor é ${menor}`)
// }

// maio_Menor(arrayOriginal)


// ============================== DESAFIOS =========================================
//A)
// console.log('Vamos jogar!!!')
// let Jogada = Math.floor(Math.random() * 100) +1

// const jogador = {
//    acertou : false,
//    tentativa : 0,
//    palpite : ''
// }

// while(!jogador.acertou){
//    jogador.palpite = Number(prompt('Chute os números até acertar'))
//    jogador.tentativa++
//    console.log(`O número informado foi ${jogador.palpite}`)
//    if(jogador.palpite === Jogada){
//        console.log('Correto!!')
//        console.log(`O número de jogados foi ${jogador.tentativa}`)
//        acerto = true
//    }else if (Jogada > jogador.palpite){
//        console.log('Errado. O número e maior')
//    }else{
//        console.log('Errado. O número e menor')
//    }
// }