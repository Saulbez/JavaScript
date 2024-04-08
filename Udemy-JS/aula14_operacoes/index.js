let num1 = 1; //number
let num2 = 2.5; //number
let num3 = 10;
let num4 = 10.53253245531;

console.log(num1.toString() + num2);
// num1 = num1.toString();
console.log(typeof num1);
console.log(num3.toString(2)); //Binário
console.log(num4.toFixed(2)); //Número de casas decimais
console.log(Number.isInteger(num3));// É inteiro

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp))// É um erro "Not a Number(NaN)"

let Num1 = 0.7
let Num2 = 0.1

Num1 = Num1 += Num2 // 0.8
let outra_forma = ((Num1 * 100) + (Num2 * 100)) / 100 // 0.9

console.log(parseFloat(Num1.toFixed(2)))// Resolver problemas casas decimais em operações com números pequenos

console.log(outra_forma)