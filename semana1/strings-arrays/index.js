/*
let array
console.log('a. ', array)// Resposta ==> undefined n


array = null
console.log('b. ',array)// Resposta ==> null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)// Resposta ==> 11

let i = 0
console.log('d. ', array[i])// Resposta ==> 3

array [i+1] = 19
console.log('e. ', array)// Resposta ==> [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)// Resposta ==> 9

*/

const frase = prompt("Digite uma frase:")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)// Resposta ==> "SUBI NUM ÔNIBUS EM MIRROCOS" 29