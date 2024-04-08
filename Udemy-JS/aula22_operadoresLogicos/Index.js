/* 
Operadores lógicos
&& -> AND -> E - Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU - Apenas uma expressao precisa ser verdadeira para retornar true
! -> NOT -> NÃO - Troca o valor da expressão, se é verdadeiro fica falso e vice-versa
*/

const usuario = 'Luiz';
const senha = '12345';

// console.log(true && true);
// console.log(false || true);
// console.log(true && true);

const vaiLogar = usuario === 'Luiz' && senha === '123456'
console.log(vaiLogar)