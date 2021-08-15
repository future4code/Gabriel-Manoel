// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  num1 = 1
  num2 = 3
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}



// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Escreva sua altura')
  const largura = prompt('Escreva a largura')
  resposta = altura * largura
  console.log(resposta)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const ano = Number (prompt('Qual é o ano atual?'))
  const nascimento = Number (prompt ('Qual é o ano do seu nascimento?'))
  resposta = ano - nascimento
  console.log(resposta)

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 
  return peso / (altura * altura)
  
}



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Qual é o seu nome?')
  const idade = prompt('Qual é a sua idade?')
  const email = prompt('Qual é o seu email?')

  resposta = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  console.log(resposta)

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt('Escreva sua cor favorita')
  let cor2 = prompt('Escreva outra cor favorita')
  let cor3 = prompt ('Escreva mais uma cor favorita')
   
   resposta = [cor1,cor2,cor3]

   console.log(resposta)
}



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  resposta = string.toUpperCase()

  return resposta

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  resposta = custo / valorIngresso

  return resposta

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
let resposta1 = string1.length
let resposta2 = string2.length
let final = resposta1 == resposta2  
return final
}
 


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let fim = array[array.length -1]
  return fim

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 

}



// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}