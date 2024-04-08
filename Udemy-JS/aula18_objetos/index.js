const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};


console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa2 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa3 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa4 = criaPessoa('João', 'Moreira', 19);
const pessoa5 = criaPessoa('Junior', 'Almeida', 52);
const pessoa6 = criaPessoa('Alan', 'Mota', 28);

console.log(pessoa2.idade)
console.log(pessoa3.nome)
console.log(pessoa4.sobrenome)
console.log(pessoa5)
console.log(pessoa6)