/*
Operadores relacionais:
5 > 2 -> true - maior
7 < 4 -> false - menor
8 >= 8 -> true - maior ou igual
9 <= 7 -> false - menor ou igual
4 == 4 -> true - Igualdade
5 != 5 -> false - Diferença

Operadores relacionais de identidade:
=== -> igualdade restrita (mesmo valor e tipo)
!== -> Diferença restrita (valor e tipo diferentes)

Operadores relacionais não possuem precedência

Operadores lógicos:

! -> negação (Se true - false, se false - true)
&& -> and - e (Todos os valores precisam ser verdadeiros)
|| -> or - ou (Apenas um valor precisa ser verdadeiro)

Precedência operadores lógicos:
! -> primeiro se realiza a ou as negações
&& -> em seguida o and - e
|| -> por último o or - ou

 */

var a = 8
var b = 15

// console.log(a > b)
// console.log(a < b)
// console.log(a <= b - 10)
// console.log(a == b)
// console.log(a != b)
// console.log(a !== b)

var c = 5
var d = '5'

// console.log(c == d)
// console.log(c === d)
// console.log(c != d)
// console.log(c !== d)

/*
true && true -> true
false && true -> false
true || false -> true
false || false -> false
*/

console.log(a > b && a % 2 === 0) // false -> a menor que b
console.log(a > b || a % 2 === 0) // true -> resto da divisão de 8 por 2 é 0



