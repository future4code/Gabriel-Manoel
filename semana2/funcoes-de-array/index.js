// ============ Exercícios de interpretação de código =============
// ================ Exercicio 01 ===================
// A)
// {nome: "Amanda Rangel", apelido: "Mandi"}
// {nome: "Laís Petra", apelido: "Laura"}
// {nome: "Letícia Chijo", apelido: "Chijo"}


// ================ Exercicio 02 ===================
//A)
// {"Amanda Rangel", "Laís Petra", "Letícia Chijo"}


// ================ Exercicio 03 ===================

//A)
// {"Amanda Rangel", apelido: "Mandi"}
// {"Laís Petra", apelido: "Laura"}



// ================ Exercícios de escrita de código ================

// ================ Exercicio 01 ===================


// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"}
//  ]
// A)
//  const resposta = pets.map((iten) => {
//      console.log(iten.nome )
//  })


//B)
// const listaRaca = pets.filter((iten) => {
    
//     if (iten.raca === 'Salsicha' ){
//        return iten.raca
       
//     }
// })

// console.log(listaRaca)

//C)
// const cachorro = pets.filter((item) => {
//     racaDoCachorro = item.raca === 'Poodle'
//     return racaDoCachorro
// })


// let mensagem = cachorro.map((resposta) => {
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${resposta.nome}`)
// })

// ================ Exercicio 02 ===================

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]


//  const novaListaDeProdutos = produtos.map((mercadoMap) => {
//        return  mercadoMap.nome
//  })


// const produtosDoMercado = produtos.map((mercadoFilter) => {
//       return { nome: mercadoFilter.nome , preco:( mercadoFilter.preco * 0.95).toFixed(2)} 
// })

//  console.log(novaListaDeProdutos)

//  console.log(produtosDoMercado)

// const produtosDoMercado = produtos.filter((beber) => {
//     return beber.categoria === 'Bebidas'
// })

// console.log(produtosDoMercado)

// const produtosDoMercado = produtos.filter((item) => {
//     resposta = item.nome.includes('Ypê')
//     return resposta
// })

// // console.log(produtosDoMercado)

// const mensagem = produtosDoMercado.map((item) => {
//     return `compre ${item.nome} por ${item.preco}`
// }) 

// console.log(mensagem)



// ======================= desafio ==========================
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

//  const nome = pokemons.map((nomePoke) => {
//      return nomePoke.nome
//  })

//  nome.sort()
//  console.log(nome)

// const nome = pokemons.map((nomePoke) => {
//     return nomePoke.tipo
// })

// // console.log(nome)




// const nome2 = nome.filter((este, i, p) => p.indexOf(este) === i);



// console.log(nome2);