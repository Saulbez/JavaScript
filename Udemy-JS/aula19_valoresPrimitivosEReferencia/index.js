/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/
let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);// trocando apenas o que está dentro da variável

let nome2 = 'Saul';
nome2[0] = 'R'
console.log(nome2[0])

let a = 'A';
let b = a; // Cópia do valor de a
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

let a2 = [1, 2, 3];
let b2 = a2; // Apontam para o mesmo valor na memória, por tanto não gera uma cópia
let c = [...a2] // Gera cópia do valor quando não é um dado primitivo
console.log(a2, b2, c)

a2.push(4);
console.log(a2, b2, c)

b2.pop()
console.log(a2, b2, c)