//            012345678910  
const nome = 'Luiz Otávio';

//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];// Funciona independete do tipo de dado, porém é mais certo usar apenas um tipo de dado por array

console.log(typeof alunos);
console.log(alunos instanceof Array);

// alunos.unshift('Mário'); // Adiciona no início
// alunos.unshift('Alan'); // Adiciona no início

alunos.push('Luiza'); // Adiciona no fim
alunos.push('Fábio'); // Adiciona no fim

// alunos[0] = 'Eduardo'; // Altera
// alunos[3] = 'Henrique'; // Adiciona

// const removido = alunos.pop(); // Remove o último elemento
// console.log(removido);

// const removido2 = alunos.shift(); // Remove o primeiro elemento
// console.log(removido2)

console.log(nome[5]);

console.log(alunos.length);

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);


