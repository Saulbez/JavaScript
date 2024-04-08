const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2010 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', alturaEmM, 'de altura e seu IMC é de', imc);

console.log(nome, 'nasceu em', anoNascimento);

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}`);

console.log(`${nome} nasceu em ${anoNascimento}`);
