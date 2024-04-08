function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
    return 123456;
}

saudacao('Luiz');
saudacao('Maria');
saudacao('Felipe');
const variavel = saudacao('Alan');
console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado
};

const resultado = soma();

console.log(resultado);
console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const raiz2 = (n) => {
    return n ** 0.5;
};

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));

const raiz3 = n => n ** 0.5;

console.log(raiz3(9));
console.log(raiz3(16));
console.log(raiz3(25));