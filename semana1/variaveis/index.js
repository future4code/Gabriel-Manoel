/*
Exercícios de interpretação de código.

EXERCÍCIO 1

let a = 10;
let b = 10;

Sera exibido 10 no console.
console.log(b)


será atribuido um novo valor para o  b
b = 5;
console.log(a,b)


EXERCÍCIO 2
let a = 10;
let b = 20;
c = a;
b = c;
a = b;
resposta c = 10, b = 10, a = 10
console.log(a, b, c)

/*
EXERCÍCIO 3
let horasTrabalhadasPorDia = prompt("Quantas horas trabalha por dia?");
let quantoRecebePorDia = prompt("Quanto você recebe por dia?")
console.log("Voce recebe ", quantoRecebePorDia / quantoRecebePorDia, " por dia")



// Exercícios de escrita de código

let nome;
console.log(idade)
let idade;
// undefined ==> não tem nada atribuido a variável.
console.log(typeof idade)
console.log(typeof nome)


//Erro de escrita do codigo nome e idade ja foram criados.
let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual a sua idade?");


//retornou dua strings.
console.log( typeof nome)
console.log(typeof idade)


//G
console.log("Olá ",nome," você tem " ,idade, " anos.");
*/

/*
let pergunta1 = prompt("Você está usando uma roupa azul hoje?")
let pergunta2 = prompt("Vocẽ pratica esporte?")
let pergunta3 = prompt("Gosta de ler?")

let roupa = pergunta1
let esporte = pergunta2
let ler = pergunta3


console.log("Você está usando uma roupa azul hoje?" ,roupa)
console.log("Vocẽ pratica esporte?", esporte)
console.log("Gosta de ler?", ler)
*/

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
