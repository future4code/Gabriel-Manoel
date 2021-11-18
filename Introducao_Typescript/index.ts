//========================= EXERCÍCIO 1 ==============================

// A)
// O tipo 'number' não pode ser atribuído ao tipo 'string'

//let  minhaString: string = "Hello World";
//minhaString = 123; 

//B)
// let meuNumero: number | string  = 50
// meuNumero = "111";
// meuNumero = 55
// meuNumero = "abc"

//C)
// const pessoa: {name: string, idade:number, corFavorita: string } = {
//     name: "Paulo",
//     idade: 20,
//     corFavorita: "green"
// }

// const pessao2: {name: string, idade: number, corFavorita: string} = {
//     name : "Pedro",
//     idade: 30,
//     corFavorita: "branca"
// }

// const pessoa3: {name: string, idade: number, corFavorita: string} = {
//     name: "marcos",
//     idade: 50,
//     corFavorita: "marrom"
// }

//D)
// enum arco_iris {
//    violeta = "violeta",
//    anil = "anil",
//    azul = "azul",
//    verde = "verde",
//    amarelo = "amarelo",
//    laranja = "laranja",
//    vermelho = "vermelho" 
// }

// type PessoaArcoIris = {
//     nome: string,
//     idade: number,
//     corFavorita: arco_iris
// }

// const pesso1: PessoaArcoIris = {
//     nome:"carlos",
//     idade: 90,
//     corFavorita: arco_iris.anil
// }

// const pesso2: PessoaArcoIris= {
//     nome: "paulo",
//     idade: 70,
//     corFavorita: arco_iris.amarelo
// }

// const pessoa3: PessoaArcoIris = {
//     nome:"carla",
//     idade: 15,
//     corFavorita: arco_iris.violeta
// }

// const pessoa4: PessoaArcoIris = {
//     nome:"felipe",
//     idade: 18,
//     corFavorita: arco_iris.azul
// }

// const pesso5: PessoaArcoIris = {
//     nome: "olivia",
//     idade: 33,
//     corFavorita: arco_iris.violeta
// }


// ======================== exercício 2 =====================
//A)
type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

// function obterEstatisticas(numeros:number[]):Estatisticas{
//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b 
//     )

//     let soma = 0

//     for (let num of numeros){
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

//B)


// function obterEstatisticasTotalmentTipadas(numeros: number[]):Estatisticas {
//     const numerosOrdenados: number[] = numeros.sort(
//         (a,b)=> a - b
//     )

//     let soma: number = 0

//     for(let num of numeros){
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas

// }

//C

// type AmostraDeIdades = {
//     numeros: number[],
//     obterEstatisticas: (number: number[]) => Estatisticas
// }

// const amostraDeIdeias: AmostaDeIdeias = {
//     numeros: [21,13,40,46,,10],
//     obterEstatisticas 
// }

// ======================== exercício 3 =====================

type Post = {
    autor: string,
    texto: string
}

const post: Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

function buscarPostsPorAutor(
    posts: Post[],
    autorInformado: string
): Post[] | [] {
    return post.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

// ======================== exercício 4 =====================

// type pokemon = {
//     name: string,
//     types: string,
//     healthPoints: number
// }

// const pokemon1: pokemon = {
//     name: "Charmander",
//     types: "Fire",
//     healthPoints: 28
// }

// const pokemon2: pokemon = {
//     name : "Bulbasaur",
//     types: "Grass/Position",
//     healthPoints: 31
// }

// const pokemon3: pokemon = {
//     name: "squirtle",
//     types: "water",
//     healthPoints: 35
// }

// a) Como você faria, já com a extensão instalada, para gerar um arquivo 
//javascript a partir do  arquivo typescript com o código abaixo?

// Instalado globalmente com npm i -g typescript
//  executando o comando: tsc ./nome-do-arquivo.ts

// Instalado localmente com npm i typescript -D
//  executando o comando: npx tsc ./nome-do-arquivo.ts


// b) E se este arquivo estivesse dentro de uma pasta chamada src.
// O processo seria diferente? Se sim, descreva as diferenças.

// Instalado globalmente com npm i -g typescript
//  executando o comando: tsc ./src/exercicio4.ts

// Instalado localmente com npm i typescript -D
//  executando o comando: npx tsc ./src/exercicio4.ts


// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? 
//Caso conheça, explique como fazer.

// Sim, configurando o tsconfig para olhar a pasta de entrada rootDir e a
// pasta de saída outDir

// Instalado globalmente com npm i -g typescript
//  executando o comando: tsc

// Instalado localmente com npm i typescript -D
//  executando o comando: npx tsc


// d) Compare esse arquivo com o que criamos durante a aula 
//(ele está disponível na área de **configuração do projeto** ali em cima).
// Leia as descrições sobre cada uma das propriedades. Alguma configuração 
//que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos
// slides?

// O outDir, rootDir e es6. Existem diversas configs comentadas,
// cada uma com uma funcionalidade.

// ======================== exercício 5 =====================
// const firstArg = Number(process.argv[2])
// const secondArg = Number(process.argv[3])

// function compareNumbers(firstNum: number, secondNum: number): void{
//     if (isNaN(firstNum)) {
//         return console.log("Invalid first number in argv")
//     }
//     if (isNaN(secondNum)) {
//         return console.log("Invalid second number in argv")
//     }
//     console.log(`Números ${firstNum} e ${secondNum}`)

//     console.log("Soma: ", firstNum + secondNum)
//     console.log("Sub: ", firstNum - secondNum)
//     console.log("Mult: ", firstNum * secondNum)

//     if (firstNum > secondNum) {
//         console.log("Maior: ", firstNum)
//     }else if (firstNum < secondNum) {
//         console.log("Maior: ", secondNum)
//     } else {
//         console.log(`São iguais: ${firstNum} = ${secondNum}`)
//     }
// }

// compareNumbers(firstArg, secondArg)

// ======================== exercício 6 =====================

// enum IDADE_HISTORICA_SIGLA {
//     AC = "AC",
//     DC = "DC"
// }

// enum IDADE_HISTORICA {
//     PRE_HISTORIA = "Pré-história",
//     IDADE_ANTIGA = "Idade Antiga",
//     IDADE_MEDIA = "Idade Média",
//     IDADE_MODERNA = "Idade Moderna",
//     IDADE_COMTEMPORANEA = "Idade Contemporânea"
// }
// const ano = Number(process.argv[2])
// const sigla = process.argv[3] as IDADE_HISTORICA_SIGLA

// function checaIdadeHistorica(
//     ano: number,
//     sigla: IDADE_HISTORICA_SIGLA = IDADE_HISTORICA_SIGLA.DC
// ): IDADE_HISTORICA | void {
//     if (isNaN(ano)){
//         return console.log("Ano inválido, deve ser um número")
//     }
//     switch (sigla.toUpperCase()){
//         case IDADE_HISTORICA_SIGLA.AC:
//             if (ano < 4000){
//                 return IDADE_HISTORICA.PRE_HISTORIA
//             }else {
//                 return IDADE_HISTORICA.IDADE_ANTIGA
//             }
//         case IDADE_HISTORICA_SIGLA.DC:
//             if(ano < 476){
//                 return IDADE_HISTORICA.IDADE_ANTIGA
//             }
//             if(ano < 1453){
//                 return IDADE_HISTORICA.IDADE_MEDIA
//             }
//             if(ano < 1789){
//                 return IDADE_HISTORICA.IDADE_MODERNA
//             }else {
//                 return IDADE_HISTORICA.IDADE_COMTEMPORANEA
//             }
//         default:
//             console.log("Sigla inválida")
//     }
// }

// const result = checaIdadeHistorica(ano, sigla)
// result && console.log(result)

// ======================== exercício 7 =====================

enum CATEGORIA {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMAS = "Intimas"
}

enum DESCONTO {
    VERAO = 0.50,
    INVERNO = 0.1,
    BANHO = 0.04,
    INTIMAS = 0.07
}

type Produto = {
    nome: string,
    preco: number,
    tipo: CATEGORIA,
    precoComDesconto?: number
}

const mokProdutos: Produto[] = [
    {
        nome: "blusa",
        preco:50,
        tipo: CATEGORIA.INVERNO
    },
    {
        nome: "regata",
        preco: 25,
        tipo: CATEGORIA.VERAO
    }
]
function adicionaDesconto(produtos: Produto[]): Produto[]{
    return produtos.map(produto => {
        let desconto = 0

        switch (produto.tipo){
            case CATEGORIA.VERAO:
                desconto = DESCONTO.VERAO
                break
            case CATEGORIA.INVERNO:
                desconto = DESCONTO.INVERNO
                break
            case CATEGORIA.BANHO:
                desconto = DESCONTO.BANHO
                break
            case CATEGORIA.INTIMAS:
                desconto = DESCONTO.INTIMAS
                break
            default:
                console.log("Tipo inválido")
        }
        return {
            nome: produto.nome,
            preco: produto.preco,
            tipo: produto.tipo,
            precoComDesconto: (produto.preco * (1 - desconto))
        }
    })
}

console.log(adicionaDesconto(mokProdutos))