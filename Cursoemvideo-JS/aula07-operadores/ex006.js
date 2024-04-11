/* 
Operadores Aritméticos: 
+ -> soma
- -> subtração
* -> multiplicação
/ -> divisão
% -> resto da divisão
** -> potenciação

Operadores de atribuição:
= -> Recebe
+= -> recebe 'ele mesmo' + tal valor
-= -> recebe 'ele mesmo' - tal valor
.
.
.
X++ ou ++X -> Acrescenta 1
X-- ou --X -> Decrementa 1

Precedência de operadores:
() -> O que estiver dentro dos parênteses será resolvido primeiro
** -> Em seguida a potenciação
* / % -> Em seguida, multiplicação, divisão e resto da divisão na ordem em que aparecerem
+ - -> Por último, soma e subtração, na ordem em que aparecerem

Também é possível simplificar expressões como n = n + 4, escrevendo  n += 4

As expressões X += 1 e X -= 1, podem ser simplificadas para X++ ou ++X e X-- ou --X

*/

var a1 = 5+3
var b1 = a1 % 5
var c1 = 5 * b1 ** 2
var d1 = 10 - a1 / 2
var e1 = 6 * 2 / d1
var f1 = b1 % e1 + 4 / e1

var a = 3
var b = 5
var c = 5 * b ** 2
var d = 10 - a / 2
var e = 6 * 2 / d
var f = b % e + 4 / e

a += 4
b %= 2

var Y = 5
var X = 5
X++ // X += 1
Y-- // Y -= 1


console.log(a1, b1, c1, d1, e1, f1)
console.log(a,b,c,d,e,f)
console.log(X)
console.log(Y)