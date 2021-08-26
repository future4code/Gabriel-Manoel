function calculaNota(ex, p1, p2) {
  let media1 = (p1 * 2 ) 
  let media2 = (p2 * 3)
  let exercicio = (ex * 1) 
  let resposta = (media1 + media2 + exercicio) / (1 + 2 + 3)
  
  if(resposta >= 9){
    return 'A'
  }else if(resposta < 9 && resposta >= 7.5){
    return 'B'
  }else if(resposta < 7.5 && resposta >= 6){
    return 'C'
  }else if(resposta < 6){
    return 'D'
  }
}