// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   resposta = array.length
   return resposta
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  resposta = array.reverse()
  return resposta
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
     resposta = array.sort(ordena)
    function ordena (a,b){
        return a - b
    }
    return resposta
    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let resposta = []
    for(novaLista of array){
        if(novaLista % 2 === 0){
            resposta.push(novaLista)
        }
    }
    return resposta

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let resposta = []
    
    for(novaLista of array){
        if(novaLista % 2 === 0){
            novaLista **= 2
            resposta.push(novaLista)
            
        }
    }
    return resposta 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  resposta = Math.max(...array)
  return resposta
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = Math.max(num1,num2)
    let menor = Math.min(num1,num2)
   let  maiorDivisivelPorMenor = maior % menor === 0

const num = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca : maior - menor,
    
}
return num
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    resposta = []
    for (novaLista of n){
       if(novaLista.length % 2 === 0){
        resposta.push(novaLista)
       }      

   }
   return resposta
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}