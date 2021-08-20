

// ================== Exercícios  01 ===============

// A) Matheus Nachtergaele, Virginia Cavendish, canal: Globo, horario: 14h


// ================== Exercícios  02 ===============

// A) nome: "Juca", idade: 3, raca: "SRD", nome: "Juba", idade: 3, raca: "SRD", nome: "Jubo", idade: 3, raca: "SRD"
// B) Copia um objeto

// ================== Exercícios  03 ===============

// A) ?
// B) ?



// ==================  Exercícios de escrita de código ========================

// ==================  Exercícios 01 =================

// A)
const pessoa = {
    nome: 'gabriel',
    apelido: ['Biel ', ' Manel', ' Bie']
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido}`)


// B)
const novoAtributo = {
    ...pessoa,
    profissao: 'Carteiro'
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido}, trabalho como ${novoAtributo.profissao}`)





// ==================  Exercícios 02 =================
//A)
const dados = {
    nome : 'Carlos',
    idade : 35,
    profissao : 'professor'
}

//B)
console.log([dados.nome, dados.nome.length, dados.idade, dados.profissao, dados.profissao.length])


// ==================  Exercícios 03 =================

// A)
let carrinho = []

// B)
const fruta1 = {
  fruta_01 : { nome : 'banana',  disponibilidade : true}
  

}

const fruta2 = {
    
    fruta_02 : {nome : 'morango', disponibilidade: true}
    
  
}

const fruta3 = {
    
    
    fruta_03 : {nome:'melancia', disponibilidade: true}
  
  }

// C)
carrinho.push(fruta1,fruta2,fruta3)


// D)
console.log(carrinho)