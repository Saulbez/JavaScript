// Não podemos criar variáveis como palavras reservadas como 'let' ou 'console'
// Variáveis precisam ter nomes significativos
//Não pode começar nome de variável com número
// Não podem conter espaços ou traços
// Utilizamos CamelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// Não utilize var, utilize const

const nome = 'João';
console.log(nome)

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado)

console.log(typeof primeiroNumero)
