// String, number, undefined, null, boolean, symbol

const nome = 'Saul' // string
const nome1 = "Saul" // string
const nome2 = `Saul` // string
const num1 = 10 // number
const num2 = 10.52 // number
let nomeAluno; // undefined -> não aponta para lugar nenhum na memória
const sobrenomeAluno = null; // nulo -> não aponta para local nenhum na memória
const aprovado = true // Boolean = true, false (lógico)

console.log(typeof nome, nome)
console.log(typeof num1, num1)
console.log(typeof nomeAluno, nomeAluno)
console.log(typeof aprovado, aprovado)

// const a = [1, 2]
// const b = a -> apontando para o mesmo valor na memória

// console.log(a, b);

// b.push(3);
// console.log(a, b)